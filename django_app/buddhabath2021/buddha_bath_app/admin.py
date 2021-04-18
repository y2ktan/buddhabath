from django.contrib import admin

# Register your models here.
from .models import Participant


class ParticipantInfoAdmin(admin.ModelAdmin):
    class Meta:
        model = Participant


admin.site.register(Participant, ParticipantInfoAdmin)

