import React from 'react';
import {observer} from 'mobx-react';


function RegistationForm(props) {
  const authStore = props.authStore;
  return (
    <div>
      <form>
        {authStore.error.length > 0 && (
          <div className="alert alert-danger" role="alert">{authStore.error}</div>
        )}
        <div className="form-group">
          <input className="form-control"
            type="text"
            placeholder="Username"
            value={authStore.username}
            required
            onChange={(e) => {
              authStore.username = e.target.value;
              authStore.error = [];
            }}/>
        </div>
        <div className="form-group">
          <input className="form-control"
            type="text"
            placeholder="Email"
            value={authStore.email}
            required
            onChange={(e) => {
              authStore.email = e.target.value;
              authStore.error = [];
            }}/>
        </div>
        <div className="form-group">
          <input className="form-control"
            type="text"
            placeholder="Privatecode"
            value={authStore.privatecode}            
            onChange={(e) => {
              authStore.privatecode = e.target.value;
              authStore.error = [];
            }}/>
        </div>
        <div className="form-group">
          <input className="form-control"
            type="password"
            placeholder="Password"
            value={authStore.password}
            required
            onChange={(e) => {
              authStore.password = e.target.value;
              authStore.error = [];
            }}/>
        </div>
      </form>
    </div>
  );
}

export default observer(RegistationForm);
