from django.contrib import admin
from django.urls import path, include

# Set static
from django.conf import settings
from django.conf.urls.static import static

# Path route
from django.views.generic import TemplateView
from django.urls import re_path

urlpatterns = [
    path('system/admin/', admin.site.urls),

    # Extra URLS
    path('', include('backend.urls')),
    path('', include('Contact.urls')),
    
    # Path route
    # re_path(r"^.*$", TemplateView.as_view(template_name="index.html"), name="client"),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
