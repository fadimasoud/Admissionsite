import React from 'react';
import './font2.css';
import {observer} from 'mobx-react';
// Components
// import SideNav from './SideNav';
// import AuthButton from './AuthButton';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
// import CreateChannel from './CreateChannel';

function NavBar(props) {
	return (
		
		  <div class="x-navbar-wrap">
		    <div class="x-navbar">
		      <div class="x-navbar-inner">
		        <div class="x-container max width">          
					<h1 class="visually-hidden">Coded.</h1>
					<a href="http://www.joincoded.com/" class="x-brand img" title="Code Education">
					  <img src="//www.joincoded.com/wp-content/uploads/2017/10/codedlogo.png" alt="Code Education"/>
					  </a>           
					<a href="#" id="x-btn-navbar" class="x-btn-navbar collapsed" data-x-toggle="collapse-b" data-x-toggleable="x-nav-wrap-mobile" aria-selected="false" aria-expanded="false" aria-controls="x-widgetbar">
					  <i class="x-icon-bars" data-x-icon="&#xf0c9;"></i>
					  <span class="visually-hidden">Navigation</span>
					</a>

					<nav class="x-nav-wrap desktop" role="navigation">
					  <ul id="menu-menu" class="x-nav">
					  <li id="menu-item-170" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-170">
					  <a href="http://www.joincoded.com/">
					  <span>Home</span></a></li>
					<li id="menu-item-3874" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3874">
					<a><span>Bootcamps</span></a>
					<ul class="sub-menu">
						<li id="menu-item-3907" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3907">
						<a href="http://www.joincoded.com/full-stack-bootcamp/">
						<span>Full-Stack Bootcamp</span></a></li>
					</ul>
					</li>
					<li id="menu-item-3503" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3503">
					<a href="http://www.joincoded.com/student-stories/">
					<span>Student Stories</span></a></li>
					<li id="menu-item-3965" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3965">
					<a href="#">
					<span>Apply</span></a>
					<ul class="sub-menu">
						<li id="menu-item-2191" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2191">
						<a href="http://www.joincoded.com/apply/">
						<span>Apply for the Full-Stack Bootcamp</span></a></li>
					</ul>
					</li>
					<li id="menu-item-529" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-529">
					<a href="http://www.joincoded.com/contact-us/">
					<span>Contact Us</span></a></li>
					<li id="menu-item-1193" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1193">
					<a href="http://www.joincoded.com/blog/">
					<span>Blog</span></a>
					<ul class="sub-menu">
						<li id="menu-item-1195" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1195 tax-item tax-item-71">
						<a href="http://www.joincoded.com/category/news/">
						<span>News</span></a></li>
						<li id="menu-item-1194" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1194 tax-item tax-item-69">
						<a href="http://www.joincoded.com/category/the-student-experience/">
						<span>The Student Experience</span></a></li>
						<li id="menu-item-1817" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1817 tax-item tax-item-127">
						<a href="http://www.joincoded.com/category/resources/">
						<span>Coding Resources</span></a></li>
					</ul>
					</li>
					</ul>
					</nav>

					
		        </div>
		      </div>
		    </div>
		  </div>

  );
}
export default withRouter(observer(NavBar));