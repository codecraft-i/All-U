from django.urls import path, include
from django.shortcuts import render
from .views import certificate_list, CountryViewSet

from rest_framework.routers import DefaultRouter

# View import
from .views import ContactCreateAPIView

router = DefaultRouter()
router.register(r'contact-countries', CountryViewSet)

urlpatterns = [
    path('site/api/', include(router.urls)),
    path("site/api/contact/", ContactCreateAPIView.as_view(), name="api-contact-create"),
    path('site/api/certificates/', certificate_list, name='certificate-list'),
]
