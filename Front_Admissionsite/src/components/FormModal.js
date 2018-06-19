// import React from 'react';
// import {observer} from 'mobx-react';

// // Components
// import ModalF from './ModalF';
// import FormForm from './FormForm';
// import {Switch, Route, withRouter, Redirect} from 'react-router-dom';

// function FormModal(props) {
//   const authStore = props.authStore;
//   const formStore = props.formStore;
//   const body = <FormForm target="#FormModal"                  
//                   authStore={authStore} formStore={formStore}/>;

//   const Submit = () => {
//     const thisModal = window.$('#FormModal')
//     formStore.submit()
//       .then(() => !formStore.error.length && thisModal.modal('toggle'));
//   };

//   const modalProps2 = {
//     id: 'FormModal',
//     title: 'Submit your form',
//     body: body,
//     clickHandler: Submit,
//     authStore: authStore,
//     type: 'Submit'
//   }

//   return <ModalF {...modalProps2} />;
// }

// export default withRouter(observer(FormModal));
