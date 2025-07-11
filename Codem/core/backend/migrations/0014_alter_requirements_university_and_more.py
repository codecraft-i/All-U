# Generated by Django 5.1.7 on 2025-04-25 07:12

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0013_university_programmes_university_requirements_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='requirements',
            name='university',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='requirement_set', to='backend.university'),
        ),
        migrations.AlterField(
            model_name='scholarships',
            name='university',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='scholarship_set', to='backend.university'),
        ),
    ]
