import React from 'react';
import {decorate, observable, computed} from 'mobx';
import axios from 'axios';
import authStore from './authStore';
class BootCampStore {
  constructor() { 
    this.bootcamp=[];       
    this.error = [];
    this.bootcampid="";
    this.title="";
    this.description="";
    this.startdate = "";
    this.admissionenddate = "";  
  }


  submit() {       
     return axios.post('http://127.0.0.1:8000/admission/createbootcamp/', {      
      title:this.title,
      description:this.description,    
      startdate:this.startdate,
      admissionenddate:this.admissionenddate,          
    },{headers:{Authorization:'JWT ' + authStore.token}})
      .then(res => res.data)
      .then((res) => {
        console.log("done");
      })
      .catch(err => {
        console.log(err);
      });
  }

  fetchone(){
 return axios.get('http://127.0.0.1:8000/admission/detailbootcamp/', {this.bootcampid})
      .then(res => res.data)
      .then((res) => {
      // this.bootcamp=res.data;
      this.title = res.title;
      this.description  = res.description; 
      this.startdate = res.startdate;
      this.admissionenddate = res.admissionenddate;       
    }
      )
      .catch(err => {
        console.log(err);
      });    
  }

  Fetchall() { 
    return axios.get('http://127.0.0.1:8000/admission/listbootcamp/')
      .then(res => res.data)
      .then((res) => { 
        // this.Applicant=res.data;
      this.bootcamp=res.data;        
    }
      )
      .catch(err => {
        console.log(err);
      });    
  }

  Deletebootcamp(){
    return axios.post('http://127.0.0.1:8000/admission/deletebootcamp', {this.bootcampid} , {headers:{Authorization:'JWT ' + authStore.token}})
      .then(res => res.data)
      .catch(err => {
        console.log(err);
      });
  }

  resetForm() {
    this.bootcamp=[];       
    this.error = [];
    this.bootcampid="";
    this.title="";
    this.description="";
    this.startdate = "";
    this.admissionenddate = "";
  
}
}

decorate(BootCampStore, {
  bootcamp:observable,
  error:observable,
  bootcampid:observable,
  title:observable,
  description:observable,
  startdate:observable,
  admissionenddate:observable,
})

export default new BootCampStore();
