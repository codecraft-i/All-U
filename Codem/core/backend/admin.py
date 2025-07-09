from django.contrib import admin

# Register your models here.

from .models import *

@admin.register(University)
class UniversityAdmin(admin.ModelAdmin):
    list_display = ('name', 'country', 'ranking', 'details_url')
    search_fields = ('name', 'country')
    list_filter = ('country',)
    ordering = ('-ranking',)

@admin.register(WhyChoose)
class WhyChooseAdmin(admin.ModelAdmin):
    list_display = ('university', 'title', 'text')
    search_fields = ('university__name', 'text')

@admin.register(ExtraParagraph)
class ExtraParagraphAdmin(admin.ModelAdmin):
    list_display = ('university', 'text')
    search_fields = ('university__name', 'text')

@admin.register(ShortInfo)
class ShortInfoAdmin(admin.ModelAdmin):
    list_display = ('university', 'name', 'bgColor', 'fontColor', 'priority')
    search_fields = ('university__name', 'name')
    list_filter = ('priority',)
    ordering = ('priority',)

admin.site.register(Country)

admin.site.register(Programmes)
class ProgrammesAdmin(admin.ModelAdmin):
    list_display = ['university', 'title', 'context']

admin.site.register(Scholarships)
class ScholarshipsAdmin(admin.ModelAdmin):
    list_display = ['university', 'title', 'context']

admin.site.register(Requirements)
class RequirementsAdmin(admin.ModelAdmin):
    list_display = ['university', 'title', 'context']


admin.site.register(ProgrammesData)
class ProgrammesDataAdmin(admin.ModelAdmin):
    list_display = ['university', 'context']

admin.site.register(ScholarshipsData)
class ScholarshipsDataAdmin(admin.ModelAdmin):
    list_display = ['university', 'context']

admin.site.register(RequirementsData)
class RequirementsDataAdmin(admin.ModelAdmin):
    list_display = ['university', 'context']