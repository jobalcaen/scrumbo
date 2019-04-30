# Generated by Django 2.1.7 on 2019-04-27 17:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('scrumbo', '0005_auto_20190423_0128'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='note',
            name='board',
        ),
        migrations.AddField(
            model_name='board',
            name='note',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='notes', to='scrumbo.Note'),
        ),
    ]
