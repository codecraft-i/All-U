from django.shortcuts import render, redirect

# Create your views here.

# Model import
from .models import *
# Form import
from .Forms.forms import ContactForm

MAX_REQUESTS = 5
BLOCK_TIME = 3600  # 1 hour

# Import the necessary classes
from django.urls import reverse_lazy
from django.views.generic.edit import FormView
from django.views.generic import TemplateView

from django.utils.timezone import now

class ContactCreateView(FormView):
    template_name = 'backend/index.html'
    form_class = ContactForm
    success_url = reverse_lazy('success')

    def get_client_ip(self):
        """ Get the client's IP address """
        x_forwarded_for = self.request.META.get('HTTP_X_FORWARDED_FOR')
        # If the IP address is not in the HTTP_X_FORWARDED_FOR header, get the IP address from REMOTE_ADDR
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = self.request.META.get('REMOTE_ADDR')
        return ip

    def dispatch(self, request, *args, **kwargs):
        """ Check if the IP address is blocked """
        ip = self.get_client_ip()
        blocked_ip, created = BlockedIP.objects.get_or_create(ip_address=ip)

        # If the IP address has reached the maximum number of requests
        if blocked_ip.request_count >= MAX_REQUESTS:
            time_diff = (now() - blocked_ip.last_request).total_seconds()
            if time_diff < BLOCK_TIME:
                return render(request, 'backend/blocked.html')
            else:
                blocked_ip.request_count = 0
                blocked_ip.save()

        return super().dispatch(request, *args, **kwargs)

    def form_valid(self, form):
        """ Save the form data and update the request count """        
        # contact = Contact(
        #     name=form.cleaned_data['name'],
        #     phone=form.cleaned_data['phone'],
        #     language_certificate=form.cleaned_data.get('language_certificate', 'No')
        # )
        # contact.save()

        contact = form.save(commit=False)
        # If language_certificate wasn't provided, it will use the default 'No'
        contact.save()

        ip = self.get_client_ip()
        blocked_ip, created = BlockedIP.objects.get_or_create(ip_address=ip)
        blocked_ip.request_count += 1
        blocked_ip.save()

        self.request.session['form_submitted'] = True
        return super().form_valid(form)
    
    def get(self, request, *args, **kwargs):
        certificate = Certificate.objects.first()
        form = self.form_class()


        context = {
            "certificate": certificate,
            "form": form,
        }
        return render(request, 'backend/index.html', context)

class SuccessView(TemplateView):
    template_name = 'backend/success.html'

    def dispatch(self, request, *args, **kwargs):
        """ Check if the form has been submitted """
        # If the form has not been submitted, redirect to the home page
        if not request.session.get('form_submitted', False):
            return redirect('home')
        request.session['form_submitted'] = False
        return super().dispatch(request, *args, **kwargs)