import React from 'react';

import {observer} from 'mobx-react';
// Components
// import SideNav from './SideNav';
import AuthButton from './AuthButton';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
// import CreateChannel from './CreateChannel';

function NavBar(props) {
	return (
		<nav className="navbar navbar-expand-lg  navbar-light fixed-top" id="mainNav" >
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="http://www.joincoded.com/">Coded</a>
            <span className="nav-Text">
            {props.authStore.currentUser}
            </span>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i className="fa fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/#page-top">Top</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/#Applicant">Bootcamps</a>
                </li>
                <AuthButton authStore={props.authStore} />  
              </ul>
            </div>
          </div>
        </nav>
    );
}
export default withRouter(observer(NavBar));