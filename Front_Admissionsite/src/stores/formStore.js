import React from 'react';
import {decorate, observable, computed} from 'mobx';
import axios from 'axios';
import authStore from './authStore';
class FormStore {
  constructor() {
    this.Applicant=[];
    this.user="";
    this.ApplicantID="";
    this.error = [];
    this.first_name = "";
    this.last_name = "";    
    this.email = "";
    this.mobile_phone = "";
    this.date_of_birth = "";
    this.gender = "";
    this.tshirt_size = "";   
    this.street_address = "";
    this.address_line_2 = "";
    this.city = "";
    this.country = "";
    this.education_level="";
    this.name_of_university_highschool="";
    this.major="";
    this.work_experience="";
    this.website_link="";
    this.hear_by="";
    this.goal="";
    this.background="";
    this.portfolio="";
    this.cv="";   
  }

  submit() {       
     return axios.post('http://127.0.0.1:8000/admission/createapplicant/', {      
      first_name:this.first_name,
      last_name:this.last_name,    
      email:this.email,
      mobile_phone:this.mobile_phone,
      date_of_birth:this.date_of_birth,
      gender:this.gender,
      tshirt_size:this.tshirt_size,      
      street_address:this.street_address,
      address_line_2:this.address_line_2,
      city:this.city,
      country:this.country,
      education_level:this.education_level,
      name_of_university_highschool:this.name_of_university_highschool,
      major:this.major,
      work_experience:this.work_experience,
      website_link:this.website_link,
      hear_by:this.hear_by,
      goal:this.goal,
      background:this.background,
      portfolio:this.portfolio,
      cv:this.cv,     
    },{headers:{Authorization:'JWT ' + authStore.token}})
      .then(res => res.data)
      .then((res) => {
        console.log("done");
      })
      .catch(err => {
        console.log(err);
      });
  }

  Saveme() {     
     return axios.post('http://127.0.0.1:8000/admission/createapplicant', {      
      first_name:this.first_name,
      last_name:this.last_name,    
      email:this.email,
      mobile_phone:this.mobile_phone,
      date_of_birth:this.date_of_birth,
      gender:this.gender,
      tshirt_size:this.tshirt_size,      
      street_address:this.street_address,
      address_line_2:this.address_line_2,
      city:this.city,
      country:this.country,
      education_level:this.education_level,
      name_of_university_highschool:this.name_of_university_highschool,
      major:this.major,
      work_experience:this.work_experience,
      website_link:this.website_link,
      hear_by:this.hear_by,
      goal:this.goal,
      background:this.background,
      portfolio:this.portfolio,
      cv:this.cv,     
    },{headers:{Authorization:'JWT ' + authStore.token}})
      .then(res => res.data)
      .then((res) => {
        console.log("done");
      })
      .catch(err => {
        console.log(err);
      });
  }
    UpdateForm() {       
     return axios.post(`http://127.0.0.1:8000/admission/createapplicant/${this.ApplicantID}`, {      
      first_name:this.first_name,
      last_name:this.last_name,    
      email:this.email,
      mobile_phone:this.mobile_phone,
      date_of_birth:this.date_of_birth,
      gender:this.gender,
      tshirt_size:this.tshirt_size,      
      street_address:this.street_address,
      address_line_2:this.address_line_2,
      city:this.city,
      country:this.country,
      education_level:this.education_level,
      name_of_university_highschool:this.name_of_university_highschool,
      major:this.major,
      work_experience:this.work_experience,
      website_link:this.website_link,
      hear_by:this.hear_by,
      goal:this.goal,
      background:this.background,
      portfolio:this.portfolio,
      cv:this.cv,     
    },{headers:{Authorization:'JWT ' + authStore.token}})
      .then(res => res.data)
      .then((res) => {
        console.log("done");
      })
      .catch(err => {
        console.log(err);
      });
  }
  Fetch() { 
    // if(!this.first_name){
    console.log(authStore.token)    
     return axios.get('http://127.0.0.1:8000/admission/alldetailapplicant/',{headers:{Authorization:'JWT ' + authStore.token}})
      .then(res => res.data)
      .then((res) => { 
        // this.Applicant=res.data;
      this.user=res.user; 
      this.ApplicantID=res.id;   
      this.first_name=res.first_name;
      this.last_name=res.last_name;    
      this.email=res.email;
      this.mobile_phone=res.mobile_phone;
      this.date_of_birth=res.date_of_birth;
      this.gender=res.gender;
      this.tshirt_size=res.tshirt_size;      
      this.street_address=res.street_address;
      this.address_line_2=res.address_line_2;
      this.city=res.city;
      this.country=res.country;
      this.education_level=res.education_level;
      this.name_of_university_highschool=res.name_of_university_highschool;
      this.major=res.major;
      this.work_experience=res.work_experience;
      this.website_link=res.website_link;
      this.hear_by=res.hear_by;
      this.goal=res.goal;
      this.background=res.background;
      this.portfolio=res.portfolio;
      this.cv=res.cv;    
    }
      )
      .catch(err => {
        console.log(err);
      });
    
  }

  DeleteForm(){
    return axios.post('http://127.0.0.1:8000/admission/createapplicant',{headers:{Authorization:'JWT ' + authStore.token}})
      .then(res => res.data)
      .catch(err => {
        console.log(err);
      });
  }

  resetForm() {
    this.user = "";
    this.ApplicantID="";
    this.error = [];
    this.first_name = "";
    this.last_name = "";    
    this.email = "";
    this.mobile_phone = "";
    this.date_of_birth = "";
    this.gender = "";
    this.tshirt_size = "";    
    this.street_address = "";
    this.address_line_2 = "";
    this.city = "";
    this.country = "";
    this.education_level="";
    this.name_of_university_highschool="";
    this.major="";
    this.work_experience="";
    this.website_link="";
    this.hear_by="";
    this.goal="";
    this.background="";
    this.portfolio="";
    this.cv="";
  }
}


decorate(FormStore, {
    user: observable,
    ApplicantID: observable,
    error: observable,
    first_name:observable,
    last_name:observable,    
    email:observable,
    mobile_phone:observable,
    date_of_birth:observable,
    gender:observable,
    tshirt_size:observable,    
    street_address:observable,
    address_line_2:observable,
    city: observable,
    country:observable,
    education_level:observable,
    name_of_university_highschool:observable,
    major:observable,
    work_experience:observable,
    website_link:observable,
    hear_by:observable,
    goal:observable,
    background:observable,
    portfolio:observable,
    cv:observable,
})

export default new FormStore();
