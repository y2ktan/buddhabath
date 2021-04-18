from django.shortcuts import render
from django.views import View

from buddha_bath_app.models import Participant


class Home(View):
    def get(self, request):
        return render(request, 'home.html', {'submit': False})
