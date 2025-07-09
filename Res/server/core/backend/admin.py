from django.contrib import admin

# Register your models here.

from .models import Table, Reservation

@admin.register(Table)
class TableAdmin(admin.ModelAdmin):
    list_display = ('number', 'capacity', 'category', 'extra_fee')
    list_filter = ('category',)

@admin.action(description="Finish selected reservations")
def make_finished(self, request, queryset):
    queryset.update(status="finished")

@admin.register(Reservation)
class ReservationAdmin(admin.ModelAdmin):
    list_display = ('name', 'date', 'time', 'people', 'status')
    list_filter = ('status', 'date')
    search_fields = ('name', 'phone')
    filter_horizontal = ('tables',)

    actions = ['export_as_csv', 'make_finished']

    def export_as_csv(self, request, queryset):
        import csv
        from django.http import HttpResponse
        response = HttpResponse(content_type='text/csv')
        response['Content-Disposition'] = 'attachment; filename="reservations.csv"'
        writer = csv.writer(response)
        writer.writerow(['Name', 'Phone', 'Date', 'Time', 'People', 'Status'])
        for r in queryset:
            writer.writerow([r.name, r.phone, r.date, r.time, r.people, r.status])
        return response

    export_as_csv.short_description = "Export selected reservations as CSV"