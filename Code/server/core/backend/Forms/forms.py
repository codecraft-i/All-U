# All form data
from django import forms

# Importing Contact model
from backend.models import Contact

# Form for Contact model
class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = ['name', 'phone', 'language_certificate']
    
    language_certificate = forms.ChoiceField(
        label="Sizda bu sertifikatlarining qaysi biri bor?",
        choices=Contact.LANGUAGE_CERTIFICATE_CHOICES,
        widget=forms.RadioSelect,
        initial='No',
        required= False
    )