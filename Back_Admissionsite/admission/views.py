from django.shortcuts import render, redirect
from django.contrib.auth import logout
from rest_framework.response import Response
from .models import BootCamp, Applicant
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from rest_framework.views import APIView
from rest_framework.generics import (
	ListAPIView,
	RetrieveAPIView,
	DestroyAPIView,
	CreateAPIView,
	RetrieveUpdateAPIView)
from .serializers import (
	BootCampListSerializer,
	BootCampDetailSerializer,
	BootCampCreateSerializer,
	ApplicantListSerializer,
	ApplicantDetailSerializer,
	ApplicantCreateSerializer,
	RegisterUserSerializer,
	UserLoginSerializer)
from .permissions import IsAuthor
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from django.utils.crypto import get_random_string
# Create your views here.

class BootCampCreateAPIView(CreateAPIView):
	queryset = BootCamp.objects.all()
	serializer_class = BootCampCreateSerializer
	permission_classes = [IsAdminUser]

class BootCampUpdateAPIView(RetrieveUpdateAPIView):
	queryset = BootCamp.objects.all()
	serializer_class = BootCampCreateSerializer
	lookup_field = 'id'
	lookup_url_kwarg = 'BootCamp_id'
	permission_classes = [IsAdminUser]

class BootCampListAPIView(ListAPIView):
    queryset = BootCamp.objects.all()
    serializer_class = BootCampListSerializer
    permission_classes = [AllowAny]

class BootCampDetailAPIView(RetrieveAPIView):
	queryset = BootCamp.objects.all()
	serializer_class = BootCampDetailSerializer
	lookup_field = 'id'
	lookup_url_kwarg = 'BootCamp_id'
	permission_classes = [AllowAny]


class BootCampDeleteAPIView(DestroyAPIView):
	queryset = BootCamp.objects.all()
	serializer_class = BootCampDetailSerializer
	lookup_field = 'id'
	lookup_url_kwarg = 'BootCamp_id'
	permission_classes = [IsAdminUser]

# =====================

class ApplicantCreateAPIView(CreateAPIView):
	queryset = Applicant.objects.all()
	serializer_class = ApplicantCreateSerializer
	permission_classes = [AllowAny]

	def perform_create(self, serializer):
		if self.request.user.is_authenticated:
			serializer.save(privatecode = get_random_string(length=4), user=self.request.user)
		else:
			serializer.save(privatecode = get_random_string(length=4) )	

	# def perform_update(self, serializer):
		# instance = serializer.save(privatecode = get_random_string(length=4))
		# send_email_confirmation(user=self.request.user, modified=instance)

class ApplicantUpdateAPIView(RetrieveUpdateAPIView):
	queryset = Applicant.objects.all()
	serializer_class = ApplicantCreateSerializer
	lookup_field = 'id'
	lookup_url_kwarg = 'Applicant_id'
	permission_classes = [IsAuthor]
	# permission_classes = [IsAuthenticated, IsAuthor]
	# def get(self, request, Applicant_id):
	# 	queryset = Applicant.objects.filter(id = Applicant_id)		
	# 	serializer = ApplicantCreateSerializer(queryset, many=True).data
		# return Response(serializer)

class ApplicantListAPIView(ListAPIView):	
	queryset = Applicant.objects.all()
	serializer_class = ApplicantListSerializer
	permission_classes = [IsAdminUser]	

# class ApplicantDetailAPIView(RetrieveAPIView):
# 	permission_classes = [IsAuthor]
# 	def get(self, request, Applicant_id):
		
# 		queryset = Applicant.objects.filter(id = Applicant_id)		
# 		serializer = ApplicantDetailSerializer(queryset, many=True).data
# 		return Response(serializer)
	
class ApplicantDetailAPIView(RetrieveAPIView):
	queryset = Applicant.objects.all()
	serializer_class = ApplicantDetailSerializer
	lookup_field = 'id'
	lookup_url_kwarg = 'Applicant_id'
	permission_classes = [IsAuthor]
# 	[IsAuthor, IsAdminUser]
class AllApplicantDetailAPIView(RetrieveAPIView):
	# queryset = Applicant.objects.all()
	# serializer_class = ApplicantDetailSerializer
	# lookup_field = 'user.id'
	permission_classes = [IsAuthor]
	def get(self, request):
		queryset = Applicant.objects.filter(user = request.user).first()		
		serializer = ApplicantDetailSerializer(queryset).data
		return Response(serializer)

class ApplicantDeleteAPIView(DestroyAPIView):
	queryset = Applicant.objects.all()
	serializer_class = ApplicantDetailSerializer
	lookup_field = 'id'
	lookup_url_kwarg = 'Applicant_id'
	permission_classes = [IsAuthor]
	# permission_classes = [IsAuthenticated, IsAuthor]
	# def get(self, request, Applicant_id):
	# 	queryset = Applicant.objects.filter(id = Applicant_id)		
	# 	serializer = ApplicantCreateSerializer(queryset, many=True).data
	# 	return Response(serializer)

# =====================

class UserRegisterAPIView(CreateAPIView):
	serializer_class = RegisterUserSerializer

class UserLoginAPIView(APIView):
	serializer_class = UserLoginSerializer

	def post(self, request, format=None):
		my_data = request.data
		serializer = UserLoginSerializer(data=my_data)
		if serializer.is_valid(raise_exception=True):
			valid_data = serializer.data
			return Response(valid_data, status=HTTP_200_OK)
		return Response(serializer.errors, HTTP_400_BAD_REQUEST)

def user_logout(request):
    logout(request)
    # Where you would like to redirect the user after successfully logging out
    return redirect("/admission/login")



