from django.db import models

# Extra modules
from colorfield.fields import ColorField

# Create your models here.

from django.db import models

class Country(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

class University(models.Model):
    name = models.CharField(max_length=255, unique=True)
    image = models.ImageField(upload_to='media/universities/')
    yt_video_link = models.URLField(blank=True, null=True)
    country = models.ForeignKey(Country, on_delete=models.CASCADE, related_name="universities")
    ranking = models.PositiveIntegerField(db_index=True)
    description = models.TextField()
    details_url = models.URLField(unique=True)

    programmes = models.CharField(null=True, max_length=1000)
    scholarships = models.CharField(null=True, max_length=1000)
    requirements = models.CharField(null=True, max_length=1000)

    def __str__(self):
        return self.name

class WhyChoose(models.Model):
    university = models.ForeignKey(University, on_delete=models.CASCADE, related_name='why_choose')
    title = models.CharField(max_length=1000)
    text = models.TextField()

    def __str__(self):
        return f"{self.university.name} - Why Choose"

class ExtraParagraph(models.Model):
    university = models.ForeignKey(University, on_delete=models.CASCADE, related_name='extra_paragraphs')
    text = models.TextField()

    def __str__(self):
        return f"{self.university.name} - Extra Paragraph"

class ShortInfo(models.Model):
    university = models.ForeignKey(University, on_delete=models.CASCADE, related_name='short_info')
    name = models.CharField(max_length=50)
    bgColor = ColorField(default="#3498db")
    fontColor = ColorField(default="#FFFFFF")
    priority = models.PositiveIntegerField(default=10)

    class Meta:
        ordering = ['priority']

    def __str__(self):
        return f"{self.university.name} - {self.name}"
    


class Programmes(models.Model):
    university = models.ForeignKey(University, on_delete=models.CASCADE, related_name='programme_set')
    title = models.CharField(max_length=1000)

    def __str__(self):
        return f"{ self.university } - { self.title }"
    
class ProgrammesData(models.Model):
    programmes = models.ForeignKey(Programmes, on_delete=models.CASCADE, related_name='programmesdata_set')
    context = models.CharField(max_length=1000)

    def __str__(self):
        return f"{ self.context }"
    
class Scholarships(models.Model):
    university = models.ForeignKey(University, on_delete=models.CASCADE, related_name='scholarship_set')
    title = models.CharField(max_length=1000)

    def __str__(self):
        return f"{ self.university } - { self.title }"
    
class ScholarshipsData(models.Model):
    programmes = models.ForeignKey(Scholarships, on_delete=models.CASCADE, related_name='programmesdata_set')
    context = models.CharField(max_length=1000)

    def __str__(self):
        return f"{ self.context }"
    
class Requirements(models.Model):
    university = models.ForeignKey(University, on_delete=models.CASCADE, related_name='requirement_set')
    title = models.CharField(max_length=1000)

    def __str__(self):
        return f"{ self.university } - { self.title }"
    
class RequirementsData(models.Model):
    programmes = models.ForeignKey(Requirements, on_delete=models.CASCADE, related_name='requirementsdata_set')
    context = models.CharField(max_length=1000)

    def __str__(self):
        return f"{ self.context }"