from django.apps import AppConfig


class ContactConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'Contact'

    def ready(self):
        import Contact.Signals.signals
