from django.urls import path, include
from .views import *

app_name='admission'

urlpatterns = [
    path('register/', UserRegisterAPIView.as_view()),
    path('login/', UserLoginAPIView.as_view()),
    path('logout/', user_logout),    
    path('createbootcamp/', BootCampCreateAPIView.as_view(), name='createbootcamp'),
    path('updatebootcamp/<int:BootCamp_id>/', BootCampUpdateAPIView.as_view(), name='updatebootcamp'),
    path('listbootcamp/', BootCampListAPIView.as_view(), name='listbootcamp'),
    path('detailbootcamp/<int:BootCamp_id>/', BootCampDetailAPIView.as_view(), name='detailbootcamp'),
    path('deletebootcamp/<int:BootCamp_id>', BootCampDeleteAPIView.as_view(), name='deletebootcamp'),
    path('createapplicant/', ApplicantCreateAPIView.as_view(), name='createapplicant'),
    path('updateapplicant/<int:Applicant_id>/', ApplicantUpdateAPIView.as_view(), name='updateapplicant'),
    path('listapplicant/', ApplicantListAPIView.as_view(), name='listapplicant'),
    path('detailapplicant/<int:Applicant_id>/', ApplicantDetailAPIView.as_view(), name='detailapplicant'),
    path('alldetailapplicant/', AllApplicantDetailAPIView.as_view(), name='detailapplicant'),
    path('deleteapplicant/<int:Applicant_id>', ApplicantDeleteAPIView.as_view(), name='deleteapplicant'),
]

