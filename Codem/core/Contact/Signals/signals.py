from django.db.models.signals import post_migrate
from django.dispatch import receiver
from Contact.models import CertificateSetting

@receiver(post_migrate)
def create_default_certificate_setting(sender, **kwargs):
    if not CertificateSetting.objects.exists():
        CertificateSetting.objects.create(is_active=False)