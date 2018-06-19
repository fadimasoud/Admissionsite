from django.db import models
from django.contrib.auth.models import User

# Create your models here.
Gender = (('Male','Male'), ('Female','Female'))
T_Shirt_Size  = (('XS','XS'),('S','S'),('M','M'),('L','L'),('XL','XL'),('XXL','XXL'),('3Xl','3Xl'))
Education_Level = (('High School','High School'),('University: First Year','University: First Year'),('University: Second Year','University: Second Year'), ('University: Third Year','University: Third Year'), ('University: Fourth Year','University: Fourth Year'), ('Completed a Two-Year Diploma','Completed a Two-Year Diploma'), ('Completed a Bachelors Degree','Completed a Bachelors Degree'), ('Post Graduate Studies(Master & PHD)','Post Graduate Studies(Master & PHD)'))
Hear_by = (('Presentation we did','Presentation we did'), ('Friend','Friend'), ('Your Computer Science professor','Your Computer Science professor'),('From a Blog','From a Blog'),('Instagram','Instagram'),('Facebook','Facebook'),('Twitter','Twitter'),('Snapchat','Snapchat'),('Sirdablab (Member)','Sirdablab (Member)'),('From a former or current Coded student','From a former or current Coded student'),('LinkedIn','LinkedIn'),('Google','Google'),('Other','Other'))

class BootCamp(models.Model):
	title = models.CharField(max_length=255)
	# languages_taught = models.CharField(max_length=255)
	# duration = models.CharField(max_length=255)
	# pre_requisites = models.TextField()
	# format_l = models.TextField()
	# dates = models.CharField(max_length=255)
	# tuition = models.TextField()
	# location = models.TextField()
	# scholarships = models.TextField()
	# class_size = models.CharField(max_length=255)
	# device_requirements = models.TextField()
	# application_deadline = models.DateField()
	# who_is_this_course_for_b

	description = models.TextField()	
	startdate= models.DateTimeField()
	admissionenddate = models.DateTimeField()

class Applicant(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
	bootcamp = models.OneToOneField(BootCamp, on_delete=models.CASCADE, null=True, blank=True)
	privatecode = models.CharField(max_length=4)
	first_name = models.CharField(max_length=50)
	last_name = models.CharField(max_length=50)
	email = models.CharField(max_length=255)
	status = models.CharField(max_length=255, null=True, blank=True)
	mobile_phone = models.CharField(max_length=40)
	date_of_birth = models.DateField()
	gender = models.CharField(max_length=8, choices=Gender)
	tshirt_size = models.CharField(max_length=4, choices=T_Shirt_Size)
	# address = models.CharField(max_length=255)
	street_address = models.CharField(max_length=255)
	address_line_2 = models.CharField(max_length=255)
	city= models.CharField(max_length=40)
	country = models.CharField(max_length=40)
	education_level = models.CharField(max_length=255, choices=Education_Level)
	name_of_university_highschool = models.CharField(max_length=255)
	major = models.CharField(max_length=255)
	work_experience = models.TextField(null=True, blank=True)
	website_link = models.CharField(max_length = 255, null=True, blank=True)
	hear_by = models.CharField(max_length=255, choices=Hear_by)
	goal = models.TextField()
	background = models.TextField()
	portfolio = models.FileField(null=True)
	cv = models.FileField(null=True)

	def __str__(self):
		return str(self.id)


