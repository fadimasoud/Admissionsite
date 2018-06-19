import React from 'react';
import {observer} from 'mobx-react';

// Components
import Modal from './Modal';
import LoginForm from './LoginForm';
import FormForm2 from './FormForm2';
import { Route, Redirect } from 'react-router-dom';

function LoginModal(props) {
  const authStore = props.authStore;
  const formStore = props.formStore;
  const body = <LoginForm target="#loginModal"
                  
                  authStore={authStore} />;

  const login = () => {
    const thisModal = window.$('#loginModal')
    authStore.login()
      .then(() => !authStore.error.length && thisModal.modal('toggle'))
      .then(() => formStore.Fetch())
  };

  const modalProps = {
    id: 'loginModal',
    title: 'Login to send messages',
    body: body,
    clickHandler: login,
    type: 'Login',
    authStore: authStore
  }

  return <Modal {...modalProps}/>;
}

export default observer(LoginModal);
