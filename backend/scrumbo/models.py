from django.db import models
# Using FieldTracker from django-model-utils helps you only send
# updates when something actually changes.
from model_utils import FieldTracker
# from scrumbo.notifyers import update_board

from asgiref.sync import async_to_sync

class Board(models.Model):
    """Model for a board"""
    name = models.CharField(max_length=30)
    url_friendly_name = models.CharField(max_length=30, default=None)
    notes_tracker = FieldTracker()

    def __str__(self):
        return self.name



class Note(models.Model):
    """Model for a single note that goes in a board"""
    body = models.CharField(max_length=200)
    board = models.ForeignKey(Board, on_delete=models.CASCADE, default=None)
    tracker = FieldTracker()

    # def save(self, *args, **kwargs):
    #     ret = super().save(*args, **kwargs)
    #     has_changed = self.tracker.has_changed('body')
    #     if has_changed:
    #         # This is the wrapper that lets you call an async
    #         # function from inside a synchronous context:
    #         async_to_sync(update_board)(self)
    #     return ret

        