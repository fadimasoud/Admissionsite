import React from 'react';
import {observer} from 'mobx-react';
// Components
// import SideNav from './SideNav';
// import AuthButton from './AuthButton';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
// import CreateChannel from './CreateChannel';

function Applicant(props) {
	return (
		<section id="Applicant" className="download-section content-section text-center">
	      	<div className="container">
	      		<div className="row">
			        <div className="col-lg-3 mx-auto">          
			          <a href="/bootcampdetail" className="btn btn-default btn-lg">Start your application FOR<br/> Summer 18 Full Stack</a>        
			        </div>
			        <div className="col-lg-3 mx-auto"> 
			          <a href="/bootcampdetail" className="btn btn-default btn-lg">Start your application FOR<br/> Fall 18 Full Stack</a>        
			        </div>
      			</div>
    		</div>
    	</section>
     );
}
export default withRouter(observer(Applicant));