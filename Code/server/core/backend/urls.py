from django.urls import path
from django.shortcuts import render

# View import
from .views import ContactCreateView, SuccessView

urlpatterns = [
    path('', ContactCreateView.as_view(), name='home'),
    path('success/', SuccessView.as_view(), name='success'),
    path('blocked/', lambda request: render(request, 'backend/blocked.html'), name='blocked'),
]