from django.db import models


class Board(models.Model):
    """Model for a board"""
    name = models.CharField(max_length=30)
    url_friendly_name = models.CharField(max_length=30, default=None)

    def __str__(self):
        return self.name

class Note(models.Model):
    """Model for a single note that goes in a board"""
    body = models.CharField(max_length=200)
    board = models.ForeignKey(Board, on_delete=models.CASCADE, default=None)
    top = models.IntegerField()
    left = models.IntegerField()
    color = models.CharField(max_length=6, default="FFFFFF")

class Column(models.Model):
    """Model for a column that goes in a board"""
    title = models.CharField(max_length=50, default=" ")
    board = models.ForeignKey(Board, on_delete=models.CASCADE, default=None)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
   