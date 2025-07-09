from django.urls import path
from .views import SearchAvailableTables, CreateReservation

urlpatterns = [
    path('api/search-available-tables/', SearchAvailableTables.as_view()),
    path('api/reserve/', CreateReservation.as_view()),
]