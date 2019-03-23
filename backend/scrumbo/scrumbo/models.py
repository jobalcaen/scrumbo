from django.db import models

class Board(models.Model):
    """Model for a board"""
    name = models.CharField(max_length=30, unique=True)

    def __str__(self):
        return self.name

class Note(models.Model):
    """Model for a single note that goes in a board"""
    body = models.CharField(max_length=200)
    board_id = models.ForeignKey(Board, on_delete=models.CASCADE)
