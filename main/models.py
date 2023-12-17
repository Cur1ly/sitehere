from django.db import models
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _

class Country(models.Model):

    title = models.CharField('Country', max_length=255)
    user = models.ForeignKey(User, on_delete=models.CASCADE)


    class Meta:
        verbose_name = "Country"
        verbose_name_plural = "Countries"

    def __str__(self):
        return self.title


