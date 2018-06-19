import React from 'react';
import {decorate, observable, computed} from 'mobx';
import axios from 'axios';
import formStore from './formStore';
class AuthStore {
  constructor() {
    this.currentUser = localStorage.getItem("currentUser");
    this.token = localStorage.getItem("token");
    this.error = [];
    this.username = "";    
    this.email = "";
    this.privatecode = "";
    this.password = "";
    this.username_or_email="";
  }


  signup() {     
     return axios.post('http://127.0.0.1:8000/admission/register/', {      
      username: this.username,
      email: this.email,
      privatecode: this.privatecode,
      password: this.password,     
    })
      .then(res => res.data)
      .then(({username, email, token}) => {
        localStorage.setItem("currentUser", username);
        localStorage.setItem("token", token);
        this.currentUser = username;
        this.token = token;
        this.resetForm();
      })
      .catch(err => {
        console.log(err);
        // Object.entries(err.response.data).forEach(
        //   ([errType, errList]) =>
        //     this.error = this.error.concat(errList.map(
        //       message => <p key={errType+message}><strong>{errType}:</strong> {message}</p>
        //     ))
        // );
      });
  }

  login() {    
    return axios.post('http://127.0.0.1:8000/admission/login/', {      
      username_or_email: this.username_or_email,
      password: this.password
    })
      .then(res => res.data)
      .then(({username,username_or_email, token}) => {
        localStorage.setItem("currentUser", username);
        localStorage.setItem("token", token);
        this.currentUser = username;
        this.token = token;
        this.resetForm();
      })
      .catch(err => {
        console.log(err);
        // Object.entries(err.response.data).forEach(
        //   ([errType, errList]) =>
        //     this.error = this.error.concat(errList.map(
        //       message => <p key={errType+message}><strong>{errType}:</strong> {message}</p>
        //     ))
        // );
      });
  }

  logout() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
    this.currentUser = null;
    this.token = null;
    formStore.resetForm();
  }

  // storeUser(type) {
  //   return axios.post(`http://127.0.0.1:8000/admission/${type}/`, {
  //     {}
  //     username: this.username,
  //     password: this.password
  //   })
  //     .then(res => res.data)
  //     .then(({username, token}) => {
  //       localStorage.setItem("currentUser", username);
  //       localStorage.setItem("token", token);
  //       this.currentUser = username;
  //       this.token = token;
  //       this.resetForm();
  //     })
  //     .catch(err => {
  //       Object.entries(err.response.data).forEach(
  //         ([errType, errList]) =>
  //           this.error = this.error.concat(errList.map(
  //             message => <p key={errType+message}><strong>{errType}:</strong> {message}</p>
  //           ))
  //       );
  //     });
  // }

  resetForm() {
    console.log("here")
    this.error = [];
    this.username = "";
    this.email = "";
    this.privatecode = "";
    this.password = "";
    this.username_or_email="";
  }

  get isLoggedIn() {
    return !!this.token;
  }
}

decorate(AuthStore, {
  currentUser: observable,
  token: observable,
  error: observable,
  username: observable,
  username_or_email:observable,
  email:observable,
  privatecode:observable,
  password: observable,
  isLoggedIn: computed
})

export default new AuthStore();
