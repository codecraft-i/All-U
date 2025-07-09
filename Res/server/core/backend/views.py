from datetime import datetime, timedelta

from django.db import transaction
from django.utils import timezone
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Reservation, Table, TIME_SLOTS
from .serializers import ReservationSerializer, TableSerializer
from .utils import find_table_combinations


# --------------------------------------------------
#  /api/search-available-tables/
# --------------------------------------------------
class SearchAvailableTables(APIView):
    def post(self, request):
        date_  = request.data.get("date")
        time_  = request.data.get("time")
        try:
            people = int(request.data.get("people", 0))
        except ValueError:
            people = 0

        if not (date_ and time_ and people):
            return Response({"error": "Missing fields"}, status=400)

        # 1) Slot tekshiruvi
        if time_ not in dict(TIME_SLOTS):
            return Response({"error": "Invalid time slot"}, status=400)

        # 2) Sana parse
        try:
            date_obj = datetime.strptime(date_, "%Y-%m-%d").date()
        except ValueError:
            return Response({"error": "Invalid date format"}, status=400)

        # 3) O‘tmish slotlari (xuddi avvalgidek)
        now = timezone.localtime()
        if date_obj < now.date() or (
            date_obj == now.date()
            and datetime.strptime(time_, "%H:%M").time() <= now.time()
        ):
            return Response({"error": "Cannot book past time slots"}, status=400)

        # 4) Shu sanada CONFIRMED bo‘lgan stollarni chiqarib tashlaymiz
        reserved_tables = Table.objects.filter(
            reservations__date=date_obj,
            reservations__status=Reservation.STATUS_CONFIRMED,
            reservations__time__lte=time_,        # <<<<<<<<<<
        ).distinct()

        free_tables = Table.objects.exclude(id__in=reserved_tables)

        # 5-a) Bitta stol sig‘adi
        exact = free_tables.filter(capacity=people).order_by("capacity")
        if exact.exists():
            return Response(
                {"available": True, "tables": TableSerializer(exact, many=True).data}
            )

        larger = free_tables.filter(capacity__gte=people).order_by("capacity")
        if larger.exists():
            return Response(
                {"available": True, "tables": TableSerializer(larger, many=True).data}
            )

        # 5-b) Kombinatsiya
        combo = find_table_combinations(free_tables, people)
        if combo:
            return Response(
                {"available": True, "tables": TableSerializer(combo, many=True).data}
            )

        return Response({"available": False, "tables": []})


# --------------------------------------------------
#  /api/reserve/
# --------------------------------------------------
class CreateReservation(APIView):
    RATE_LIMIT_MINUTES = 15

    def post(self, request):
        phone = request.data.get("phone")
        if phone:
            cutoff = timezone.now() - timedelta(minutes=self.RATE_LIMIT_MINUTES)
            recent = Reservation.objects.filter(
                phone=phone,
                created_at__gte=cutoff,
                status__in=[
                    Reservation.STATUS_PENDING,
                    Reservation.STATUS_CONFIRMED,
                ],
            )
            if recent.exists():
                return Response(
                    {
                        "error": f"You can only book once every {self.RATE_LIMIT_MINUTES} minutes."
                    },
                    status=429,
                )

        serializer = ReservationSerializer(data=request.data)
        if serializer.is_valid():
            reservation = serializer.save()  # status → pending
            return Response(
                ReservationSerializer(reservation).data, status=status.HTTP_201_CREATED
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)