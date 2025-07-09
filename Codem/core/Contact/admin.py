from django.contrib import admin

# Register your models here.

# Local Modules
# Model import
from .models import *

# Ather Modules

# Registering the model
@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'created_at')
    search_fields = ('name', 'phone')
    list_filter = ('created_at', 'is_checked',)
    date_hierarchy = 'created_at'
    ordering = ('-created_at',)
    list_per_page = 10

    def get_queryset(self, request):
        """Hamma ma'lumotlarni chiqarish"""
        return Contact.objects.all()

@admin.register(CheckedContact)
class CheckedContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'is_checked')
    search_fields = ('name', 'phone')
    list_filter = ('is_checked',)

@admin.register(UncheckedContact)
class UncheckedContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'is_checked')
    search_fields = ('name', 'phone')
    list_filter = ('is_checked',)

@admin.register(BlockedIP)
class BlockedIPAdmin(admin.ModelAdmin):
    list_display = ('ip_address', 'request_count', 'last_request')
    search_fields = ('ip_address',)
    list_filter = ('last_request',)
    date_hierarchy = 'last_request'
    ordering = ('-last_request',)
    list_per_page = 10

@admin.register(Certificate)
class CertificateAdmin(admin.ModelAdmin):
    list_display = ('name', 'is_active')
    list_editable = ('is_active',)

@admin.register(CertificateSetting)
class CertificateSettingAdmin(admin.ModelAdmin):
    list_display = ('is_active',)

@admin.register(Country)
class CountryAdmin(admin.ModelAdmin):
    list_display = ('is_active', 'name')