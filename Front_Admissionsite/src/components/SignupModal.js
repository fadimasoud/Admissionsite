import React from 'react';
import {observer} from 'mobx-react';

// Components
import Modal from './Modal';
import RegistationForm from './RegistrationForm';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import FormForm2 from './FormForm2';

function SignupModal(props) {
  const authStore = props.authStore;
  const formStore = props.formStore;
  const body = <RegistationForm target="#loginModal"
                  alternateLinkText="login with an existing account"
                  authStore={authStore} />;

  const signup = () => {
    const thisModal = window.$('#signupModal')
    authStore.signup()
      .then(() => !authStore.error.length && thisModal.modal('toggle'))
      .then(() => formStore.Fetch())      
  };

  const modalProps = {
    id: 'signupModal',
    title: 'Register an account',
    body: body,
    clickHandler: signup,
    authStore: authStore,
    type: 'Signup'
  }
  return <Modal {...modalProps} />;
}

export default withRouter(observer(SignupModal));
