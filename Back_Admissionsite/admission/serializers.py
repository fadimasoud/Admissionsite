from rest_framework import serializers
from .models import BootCamp, Applicant
from django.contrib.auth.models import User
from rest_framework_jwt.settings import api_settings
from django.db.models import Q

class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = ['first_name', 'last_name', 'email']

# ===================== 

class BootCampListSerializer(serializers.ModelSerializer):
    class Meta:
        model = BootCamp
        fields = ['title', 'startdate', 'admissionenddate']

class BootCampDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = BootCamp
        fields = ['title', 'description', 'startdate', 'admissionenddate']

class BootCampCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = BootCamp
        fields = ['title', 'description', 'startdate', 'admissionenddate']

# ===================== 

class ApplicantListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Applicant
        fields = ['user','first_name', 'last_name', 'email']
        # , 'mobile_phone', 'country', 'education_level', 'major', 'website_link', 'goal']
    

class ApplicantDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Applicant
        fields = ['user', 'id','first_name', 'last_name', 'email', 'mobile_phone', 'date_of_birth', 'gender', 'tshirt_size', 'street_address', 'address_line_2', 'city',  'country', 'education_level', 'name_of_university_highschool', 'major', 'work_experience', 'website_link', 'hear_by', 'goal', 'background', 'portfolio', 'cv']
    

class ApplicantCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Applicant
        fields = ['first_name', 'last_name', 'email','mobile_phone', 'date_of_birth', 'gender', 'tshirt_size', 'street_address', 'address_line_2', 'city', 'country', 'education_level', 'name_of_university_highschool', 'major', 'work_experience', 'website_link', 'hear_by', 'goal', 'background', 'portfolio', 'cv']
    

# =====================

class RegisterUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(style={'input_type':'password'}, write_only=True)
    privatecode = serializers.CharField(write_only=True, allow_blank=True)
    token = serializers.CharField(allow_blank=True, read_only=True)
    class Meta:
        model = User
        fields = ['username','email','privatecode','password', 'token']

    def create(self, validated_data):
        new_user = User(
            username = validated_data['username'],           
            email = validated_data['email']
            )
        new_user.set_password(validated_data['password'])
        new_user.save()
        if validated_data['privatecode']:            
            obj=Applicant.objects.filter(email=validated_data['email'],privatecode=validated_data['privatecode'])
            for obj1 in obj:
                obj1.user=new_user                
                obj1.save()

        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(new_user)
        token = jwt_encode_handler(payload)

        validated_data["token"] = token             
        return validated_data

class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField(allow_blank=True, read_only=True)    
    username_or_email = serializers.CharField()
    password = serializers.CharField(write_only=True)
    token = serializers.CharField(allow_blank=True, read_only=True)


    def validate(self, data):        
        username_or_email = data.get('username_or_email')
        my_password = data.get('password')

        if username_or_email == '':
                return serializers.ValidationError("A username or email is required to login.")

        try:
            user_obj = User.objects.filter(Q(username=username_or_email) | Q(email=username_or_email)).first()
        except:
            raise serializers.ValidationError("This username does not exist")

        if not user_obj.check_password(my_password):
            raise serializers.ValidationError("Incorrect username/password combination! Noob..")

        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(user_obj)
        token = jwt_encode_handler(payload)

        data["token"] = token
        data["username"] = user_obj.username
        return data

