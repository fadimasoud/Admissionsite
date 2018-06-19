import React, { Component } from 'react';
import './font.css';
// Components
import LogoutModal from './components/LogoutModal';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal'
import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import Applicant from './components/Applicant';
import Form from './components/Form';
import FormForm from './components/FormForm';
import FormForm2 from './components/FormForm2';
import BootCampDetail from './components/BootCampDetail';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';

function App(props) {
  const {authStore, formStore} = props;
    return (
      <div>
        <LogoutModal authStore={authStore}/>
        <LoginModal authStore={authStore} formStore={formStore}/>
        <SignupModal authStore={authStore} formStore={formStore}/>        
        <NavBar authStore={authStore}/>
        <Switch> 
          <Route exact path='/bootcampdetail'
              render={ () =>
                <BootCampDetail authStore={authStore} formStore={formStore}/>
              }
              />
          <Route exact path='/form'
              render={ () =>(formStore.ApplicantID?
                <FormForm authStore={authStore} formStore={formStore}/>:
                <FormForm2 authStore={authStore} formStore={formStore}/>)
              }
              />
          <Route path='/'
              render={ () => 
                  <div>                    
                    <Header/> 
                    <About/>
                    <Applicant/>
                  </div>                  
                }
              />  
        </Switch>
      </div>
    );
  }


export default App;
