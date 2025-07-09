from datetime import date

from django.db import transaction
from django.utils import timezone
from rest_framework import serializers

from .models import Reservation, Table


class TableSerializer(serializers.ModelSerializer):
    class Meta:
        model = Table
        fields = ("id", "number", "capacity", "category", "extra_fee")


class ReservationSerializer(serializers.ModelSerializer):
    # M2M – only read; ids – only write
    tables = TableSerializer(many=True, read_only=True)
    table_ids = serializers.ListField(
        child=serializers.IntegerField(), write_only=True, required=True
    )

    class Meta:
        model = Reservation
        fields = (
            "id",
            "name",
            "phone",
            "date",
            "time",
            "people",
            "note",
            "status",
            "created_at",
            "tables",
            "table_ids",
            "rating",
        )
        read_only_fields = ("status", "created_at")

    # -----------------------------
    #  BIZNES VALIDATSIYA
    # -----------------------------
    def validate(self, data):
        table_ids = data["table_ids"]
        people    = data["people"]
        date_obj  = data["date"]

        # 1) Stol mavjudligi
        tables = list(Table.objects.filter(id__in=table_ids))
        if len(tables) != len(table_ids):
            raise serializers.ValidationError("One or more tables do not exist.")

        # 2) Sig‘im
        if sum(t.capacity for t in tables) < people:
            raise serializers.ValidationError("Selected tables do not have enough capacity.")

        # 3) O‘tmish sanasi
        if date_obj < timezone.localdate():
            raise serializers.ValidationError("Date is in the past.")

        # 4) Kolliziya faqat CONFIRMED bandlar bilan
        clash = Reservation.objects.filter(
            date=date_obj,
            status=Reservation.STATUS_CONFIRMED,
            tables__id__in=table_ids,
            time__lte=data["time"],          # <<<<<<<<<<
        ).exists()
        if clash:
            raise serializers.ValidationError(
                "One or more tables are already CONFIRMED on this date."
            )

        return data

    # -----------------------------
    #  CREATE  (transaction + lock)
    # -----------------------------
    def create(self, validated_data):
        table_ids = validated_data.pop("table_ids")
        with transaction.atomic():
            # select_for_update() → race-condition oldini oladi
            Table.objects.select_for_update().filter(id__in=table_ids)

            reservation = Reservation.objects.create(
                status=Reservation.STATUS_PENDING, **validated_data
            )
            reservation.tables.set(Table.objects.filter(id__in=table_ids))
        return reservation