from django.contrib import admin

# Register your models here.

# Local Modules
# Model import
from .models import *

# Ather Modules
from django.utils.html import format_html

from django.utils.safestring import mark_safe

admin.site.site_header = "Forever Study Consulting Admin"
admin.site.site_title = "Web Forever Study"
admin.site.index_title = "Boshqaruv paneliga xush kelibsiz"

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

admin.site.register(Certificate)