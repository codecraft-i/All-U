from django.urls import path, include

# Django Rest Framework
from rest_framework.routers import DefaultRouter

# Local modules
from .views import *

router = DefaultRouter()
router.register(r'countries', CountryViewSet)
router.register(r'universities', UniversityViewSet)
router.register(r'why-choose', WhyChooseViewSet)
router.register(r'extra-paragraphs', ExtraParagraphViewSet)
router.register(r'short-info', ShortInfoViewSet)

router.register(r'programmes', ProgrammesViewSet)
router.register(r'scholarships', ScholarshipsViewSet)
router.register(r'requirements', RequirementsViewSet)

urlpatterns = [
    path('site/api/', include(router.urls)),
]
