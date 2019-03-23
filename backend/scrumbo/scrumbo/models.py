from django.db import models

class Board(models.Model):
    name = models.CharField(max_length=30, unique=True)

class Note:
	body = models.CharField(max_length=200)
	board = manufacturer = models.ForeignKey(Board, on_delete=models.CASCADE)

