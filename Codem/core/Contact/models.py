from django.db import models

# Import the necessary classes
from django.utils.timezone import now
from django.utils.html import format_html

# Create your models here.

class CheckedContactManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(is_checked='Yes')

class UncheckedContactManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(is_checked='No')

class Certificate(models.Model):
    name = models.CharField(max_length=50)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name
    
class CertificateSetting(models.Model):
    is_active = models.BooleanField(default=False)

    def __str__(self):
        return "Certificate activity"
    
    def save(self, *args, **kwargs):
        if not self.pk and CertificateSetting.objects.exists():
            return
        super().save(*args, **kwargs)

    class Meta:
        verbose_name = "Certificate setting"
        verbose_name_plural = "Certificate settings"

# 'Cantact' model for User
class Contact(models.Model):
    YES_NO_CHOICES = [
        ('No', 'No'),
        ('Yes', 'Yes'),
    ]

    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)
    language_certificate = models.ForeignKey(
        Certificate,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='contacts',
        verbose_name='Til sertifikati'
    )

    is_checked = models.CharField(
        max_length=3, choices=YES_NO_CHOICES, default='No'
    )

    objects = models.Manager()
    checked_contacts = CheckedContactManager()
    unchecked_contacts = UncheckedContactManager()

    def __str__(self):
        return f"{self.name} - {self.phone}"
    
    class Meta:
        verbose_name = "Kontakt"
        verbose_name_plural = "Kontaktlar"
    
class CheckedContact(Contact):
    objects = CheckedContactManager()

    class Meta:
        proxy = True
        verbose_name = "Tekshirilgan Kontakt"
        verbose_name_plural = "Tekshitilgan Kontaklar"

class UncheckedContact(Contact):
    objects = UncheckedContactManager()

    class Meta:
        proxy = True
        verbose_name = "Tekshirilmagan Kontakt"
        verbose_name_plural = "Tekshirilmagan Kontaklar"
    
class BlockedIP(models.Model):
    ip_address = models.GenericIPAddressField(unique=True)
    request_count = models.IntegerField(default=1)
    last_request = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.ip_address} - {self.request_count} requests"
    
    class Meta:
        verbose_name = "IP Address"
        verbose_name_plural = "IP Address"


class Country(models.Model):
    code = models.CharField(max_length=10, unique=True)
    name = models.CharField(max_length=100)
    flag = models.CharField(max_length=5)
    length = models.IntegerField()
    mask = models.CharField(max_length=20)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Country'
        verbose_name_plural = 'Countries'