# Generated by Django 2.1.7 on 2019-04-27 19:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scrumbo', '0008_auto_20190427_1759'),
    ]

    operations = [
        migrations.AlterField(
            model_name='board',
            name='url_friendly_name',
            field=models.CharField(default=None, max_length=30),
        ),
    ]
