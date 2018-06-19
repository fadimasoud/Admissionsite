# from django import forms
# from dobwidget import DateOfBirthWidget
# from django_countries.widgets import CountrySelectWidget
# from django.contrib.auth.models import User
# from .models import BootCamp, Applicant, AdminUser

# class ApplicantModelForm(forms.ModelForm):
#     class Meta(object):
#         model = Applicant
#         fields = ['name', 'date_of_birth'......]
#         widgets = {
#             'date_of_birth': DateOfBirthWidget(order='MDY'),
#             'country': CountrySelectWidget(),
#         }

# maybe i donot need a form due to serializers