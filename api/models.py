from django.db import models
import uuid

# Create your models here.


class Floor(models.Model):
    id = models.UUIDField(unique=True, default=uuid.uuid4, editable=False)
    title = models.TextField()
    description = models.TextField(null=True)
    number = models.IntegerField(primary_key=True)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.number_floor}"
