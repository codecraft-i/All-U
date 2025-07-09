from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Contact, BlockedIP, Certificate, CertificateSetting, Country
from .API.serializers import ContactSerializer, CertificateSerializer, CountrySerializer
from django.utils.timezone import now
from rest_framework.generics import ListAPIView
from rest_framework.decorators import api_view

MAX_REQUESTS = 5
BLOCK_TIME = 3600  # 1 hour in seconds

class ContactCreateAPIView(APIView):
    def get_client_ip(self, request):
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        return x_forwarded_for.split(',')[0] if x_forwarded_for else request.META.get('REMOTE_ADDR')

    def post(self, request):
        ip = self.get_client_ip(request)
        blocked_ip, _ = BlockedIP.objects.get_or_create(ip_address=ip)

        if blocked_ip.request_count >= MAX_REQUESTS:
            time_diff = (now() - blocked_ip.last_request).total_seconds()
            if time_diff < BLOCK_TIME:
                return Response(
                    {"detail": "Too many requests. Try again later."},
                    status=status.HTTP_429_TOO_MANY_REQUESTS
                )
            else:
                blocked_ip.request_count = 0

        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            blocked_ip.request_count += 1
            blocked_ip.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ActiveCertificateList(ListAPIView):
    queryset = Certificate.objects.filter(is_active=True)
    serializer_class = CertificateSerializer

@api_view(['GET'])
def certificate_list(request):
    setting = CertificateSetting.objects.first()
    if not setting or not setting.is_active:
        return Response([])

    certificates = Certificate.objects.filter(is_active=True)
    serializer = CertificateSerializer(certificates, many=True)
    return Response(serializer.data)

from rest_framework import viewsets

class CountryViewSet(viewsets.ModelViewSet):
    queryset = Country.objects.filter(is_active=True)
    serializer_class = CountrySerializer