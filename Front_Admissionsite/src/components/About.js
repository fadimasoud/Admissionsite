import React from 'react';
import {observer} from 'mobx-react';
// import font from '../font.css';
// Components
// import SideNav from './SideNav';
// import AuthButton from './AuthButton';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
// import CreateChannel from './CreateChannel';

function About(props) {
	return (
		<section id="about" className="content-section text-center Imag ">
      <div className="container">
      <div className="row">
      <div className="col-sm-7">
       <div className="x-container max width offset">
        <div className="x-main full" role="main">              
          <article id="post-173" className="post-173 page type-page status-publish hentry no-post-thumbnail">
          <div className="entry-content content">
            <div className="x-column x-sm x-1-1 last" className="">
              <div className="x-container max width">
                
                <h2 className="h-custom-headline tt-upper man center-text h3 accent">
                  <span><a className="x-btn x-btn-square x-btn-large" href="/#Applicant" title="Click here to apply" data-options="thumbnail: ''"
                  className="color:#cc533e">Start your application</a>
                  </span>                
                </h2>
                <hr className="x-gap" className="margin: 25px 0 0 0;"/>
              </div>
            </div>
            <div className="x-column x-sm x-2-3" className="">
              <div className="x-container max width">
                <h2 className="h-feature-headline h5">
                  <span className="ba"><i className="x-icon-check-square-o ba2" data-x-icon="" ></i>Step One: Complete the Application</span></h2>
                <hr className="x-gap" className="margin: 3px 0 0 0;"/>
                <p className="man">Click on start your application above and complete a basic application.</p>
                <h2 className="h-feature-headline h5">
                  <span className="ba"><i className="x-icon-calendar ba2" data-x-icon="" ></i>Step Two: Receive Interview Scheduling Call</span></h2>
                <hr className="x-gap" className="margin: 3px 0 0 0;"/>
                <p className="man">Within one working day of submitting your application, you will receive a confirmation call from our team with your admissions interview appointment time and date.</p>
                <h2 className="h-feature-headline h5">
                  <span className="ba"><i className="x-icon-code ba2" data-x-icon="" ></i>Step Three: study the pre-interview packet</span></h2>
                <hr className="x-gap" className="margin: 3px 0 0 0;"/>
                <p className="man">Before attending the interview, prepare by studying the Coded Pre-interview Packet sent in the confirmation email. Allow yourself at least 3 days to study all the required material. The packet is designed for complete beginners.</p>
                <h2 className="h-feature-headline h5">
                  <span className="ba"><i className="x-icon-comments ba2" data-x-icon="" ></i>Step Four: attend the admissions interview</span></h2>
                <hr className="x-gap" className="margin: 3px 0 0 0;"/>
                <p className="man">Attend your admissions interview at the scheduled time. The interview will be 20 minutes, and will consist of questions about your background, interest in coding, and goals. We’ll also ask you a few general technical questions related to the Pre-interview Packet.</p>
                <h2 className="h-feature-headline h5">
                  <span className="ba"><i className="x-icon-envelope-o ba2" data-x-icon="" ></i>Step Five: Receive the final decision</span></h2>
                <hr className="x-gap" className="margin: 3px 0 0 0;"/>
                <p className="man">After completing the interview, we’ll email you the final admission decision.<br/>
                Good luck!
                </p>
                <hr className="x-gap" className="margin: 30px 0 0 0;"/>
              </div>
            </div>
          </div>
        </article> 
        </div>
        </div>
        </div>           
          <div className="col-sm-5">
            <div className="x-column x-sm x-1-3 last" className="">
              <div className="x-container max width"/>
                <hr className="x-gap" className="margin: 55px 0 0 0;"/>
                <div className="x-pricing-table cf one-column">
                  <div className="x-pricing-column featured">
                    <h2 className="man">Course Tuition <br/>
                      <span className="x-featured-sub"><small>14 Weeks, Part-time</small></span></h2>
                  <div className="x-pricing-column-info">
                    <h3 className="x-price">K.D. 2,450</h3>
                    <span className="x-interval"></span>
                    <ul className="x-ul-icons">
                      <strong>Pay Upfront</strong><br/>
                      <strong>OR</strong><br/>
                      <a href="http://www.joincoded.com/boubyanbank/">
                        <strong>Boubyan Bank Education Financing</strong>
                      </a><br/>
                      <li className="x-li-icon">
                        <i className="x-icon-check" data-x-icon="" aria-hidden="true"></i>Monthly Installments</li>
                      <li className="x-li-icon">
                        <i className="x-icon-check" data-x-icon="" aria-hidden="true"></i>Up To Two Years</li>
                      <li className="x-li-icon">
                        <i className="x-icon-check" data-x-icon="" aria-hidden="true"></i>0% Interest</li>
                    </ul>
                    <p>For payment details,<br/>
                    please <a href="http://www.joincoded.com/contact-us">contact us</a></p>
                  </div>
                  </div>
                </div>
                <hr className="x-gap" className="margin: 130px 0 0 0;"/>
            </div>
          </div>                                  
            
        </div>
      </div>
            
    </section>
    );
}
export default withRouter(observer(About));