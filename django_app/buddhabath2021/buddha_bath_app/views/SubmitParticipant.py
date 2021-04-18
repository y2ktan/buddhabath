from django.shortcuts import render
from django.views import View

from buddha_bath_app.models import Participant


class SubmitParticipant(View):
    def post(self, request):
        name = request.POST.get("name", "")
        email = request.POST.get("email", "")
        phone = request.POST.get("phone", "")
        comment = request.POST.get("comment", "")

        print("name: " + name)
        print("email: " + email)
        print("phone: " + phone)
        print("comment: " + comment)
        participant = Participant(name = name, email = email, phoneNumber = phone, comment = comment)
        participant.save()

        return render(request, 'home.html', {'submit': True})

