# Generated by Django 2.1.7 on 2019-04-12 23:27

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('scrumbo', '0003_note'),
    ]

    operations = [
        migrations.AddField(
            model_name='board',
            name='url_friendly_name',
            field=models.CharField(default=django.utils.timezone.now, max_length=30),
            preserve_default=False,
        ),
    ]