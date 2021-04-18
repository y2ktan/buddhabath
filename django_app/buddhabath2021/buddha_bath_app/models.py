from django.db import models

# Create your models here.
from django.db import models


class Participant(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    phoneNumber = models.CharField(max_length=50)
    comment = models.TextField()

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Participant'
        verbose_name_plural = verbose_name

