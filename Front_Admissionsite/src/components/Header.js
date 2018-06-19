import React from 'react';
import {observer} from 'mobx-react';
// Components
// import SideNav from './SideNav';
// import AuthButton from './AuthButton';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
// import CreateChannel from './CreateChannel';

function Header2(props) {
	return (
		<header id="page-top" className="masthead">
      <div className="intro-body">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h1 className="brand-heading">FullStack Bootcamp</h1>
              <p className="intro-text">Everything you need to learn to build a tech startup</p>
              <a href="#about" className="btn btn-circle js-scroll-trigger" >
                <i className="fa fa-angle-double-down animated"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    );
}
export default withRouter(observer(Header2));