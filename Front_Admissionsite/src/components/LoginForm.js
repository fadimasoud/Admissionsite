import React from 'react';
import {observer} from 'mobx-react';

function LoginForm(props) {
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
            placeholder="username_or_email"
            value={authStore.username_or_email}
            required
            onChange={(e) => {
              console.log(authStore.username_or_email)
              authStore.username_or_email = e.target.value;
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

export default observer(LoginForm);
