import React from 'react';
import {observer} from 'mobx-react';
import font2 from './font2.css';
// Components
// import SideNav from './SideNav';
// import AuthButton from './AuthButton';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
// import CreateChannel from './CreateChannel';

function BootCampDetail(props) {
	return (
<div id="x-root" className="x-root" >
<div id="top" className="site">  

<div className="x-main full" role="main">
<div className="entry-content content">
<div id="x-content-band-1" className="x-content-band man" className="background-color: #14243f; padding-top: 15px; padding-bottom: 0;">

<div  className="x-column x-sm x-1-1 last" className="" >
<hr className="margin: 20px 0 0 0;"/>
<img className="aligncenter" src="/wp-content/uploads/2015/05/FullStack-Bootcamp.png" alt="Full-Stack Bootcamp" width="600" height="216"/><br />
<hr className="margin: 20px 0 0 0;"/>
</div>
</div>
<div id="x-content-band-2" className="x-content-band man" className="background-color: #f8f8f8; padding-top: 65px; padding-bottom: 0;">
<hr className="margin: 55px 0 0 0;"/>
<h2  className="h-custom-headline tt-upper man center-text h3 accent ba " >
<span><a  className="x-btn x-btn-square x-btn-large"  href="/form" title="Click here to apply"    data-options="thumbnail: ''" className="">Apply Now!</a>
</span></h2>
<hr className="margin: 200px 0 0 0;"/>
<div  className="x-column x-sm x-1-1 last" className="" >
<h2  className="h-custom-headline tt-upper man h3 accent b ba"><span>Course Snapshot</span></h2>
</div>
</div>
<hr className="margin: 100px 0 0 0;"/>
<div id="x-content-band-3" className="x-content-band man" className="background-color: #f8f8f8; padding-top: 45px; padding-bottom: 65px;">
<hr className="margin: 100px 0 0 0;"/>
<div className="row offset-sm-1">
<div className="col-sm-6">
<h3  className="h-custom-headline man h5 ba2" ><span>Languages/Frameworks taught:</span></h3>
<p>Python, Django, HTML5, CSS3, JavaScript, ReactJS, and React Native.</p>
<hr className="margin: 35px 0 0 0;"/>
<h3  className="h-custom-headline man h5 ba2" ><span>Pre-requisites</span></h3>
<p>This course is designed for complete beginners.<br />
Basic computer science background is preferred, but not required.</p>
<hr className="margin: 35px 0 0 0;"/>
<h3  className="h-custom-headline man h5 ba2" ><span>Dates:</span></h3>
<p>July 1st &#8211; October 4th, 2018.</p>
<hr className="margin: 35px 0 0 0;"/>
<h3  className="h-custom-headline man h5 ba2" ><span>Location:</span></h3>
<p className="man"><a href="https://goo.gl/maps/WH4gMZs9D4A2" target="_blank" rel="noopener">Argan Business Park, Building 7 (First Floor).<br />
Free Trade Zone, Kuwait.</a></p>
<hr className="margin: 35px 0 0 0;"/>
<h3  className="h-custom-headline man h5 ba2" ><span>ClassName Size:</span></h3>
<p>15 to 20 Students.</p>
<hr className="margin: 35px 0 0 0;"/>
<h3  className="h-custom-headline man h5 ba2" ><span>Application Deadline:</span></h3>
<p className="man">May 10 2018</p>
<hr className="margin: 35px 0 0 0;"/>
</div>
<div className="col-sm-6">
<h3  className="h-custom-headline man h5 ba2" ><span>Duration:</span></h3>
<p>The duration of the course is 14 Weeks.</p>
<hr className="margin: 35px 0 0 0;"/>
<h3  className="h-custom-headline man h5 ba2" ><span>Format:</span></h3>
<p>Part-time, 5 pm to 9 pm, Weekdays.<br />
Optional lab on Saturdays.</p>
<hr className="margin: 35px 0 0 0;"/>
<h3  className="h-custom-headline man h5 ba2" ><span>Tuition:</span></h3>
<p>The tuition costs KWD 2,450.<br />
Total amount upfront or monthly installments through<br />
<a href="http://www.joincoded.com/boubyanbank">Boubyan Bank Education Financing</a>.</p>
<hr className="margin: 35px 0 0 0;"/>
<h3  className="h-custom-headline man h5 ba2" ><span>Scholarships:</span></h3>
<p className="man">Announcing scholarships soon.</p>
<hr className="margin: 35px 0 0 0;"/>
<h3  className="h-custom-headline man h5 ba2" ><span>Device Requirements (Minimum):</span></h3>
<p className="man">MacBook 2015 (or after).<br />
Intel Core i5 (Dual-Core), 8GB RAM.</p>
<hr className="margin: 100px 0 0 0;"/>
</div>
<hr className="margin: 100px 0 0 0;"/>
</div>
<h2  className="h-custom-headline tt-upper man center-text h3 accent ba" ><span>Who This Course is For</span></h2>
<hr className="margin: 200px 0 0 0;"/>
<div className="row offset-sm-1">
<hr className="margin: 100px 0 0 0;"/>
<div className="col-sm-6">
<h3  className="h-custom-headline man h5 ba2" ><span>You&#8217;re a Beginner</span></h3>
<p>You have no coding background and want to become a professional coder.</p>
<hr className="margin: 35px 0 0 0;"/>
<h3  className="h-custom-headline man h5 ba2" ><span>You Have Big Ideas</span></h3>
<p>You want to build websites or apps but don’t have the necessary coding skills.</p>
</div>
<hr className="margin: 35px 0 0 0;"/>
<div className="col-sm-6">
<h3  className="h-custom-headline man h5 ba2" ><span>You Want to Improve</span></h3>
<p>You’re a computer science student who wants to gain experience and training in new programming languages.</p>
<hr className="margin: 35px 0 0 0;"/>
<h3  className="h-custom-headline man h5 ba2" ><span>You Want to Reinvent Your Career</span></h3>
<p>You want to learn coding as a new skill that makes you valuable in any industry.</p>
</div>
<hr className="margin: 100px 0 0 0;"/>
</div>
<h2  className="h-custom-headline tt-upper man center-text h3 accent ba" ><span>Course Curriculum</span></h2>
<hr className="margin: 100px 0 0 0;"/>
<div className="row offset-sm-1">
<hr className="margin: 100px 0 0 0;"/>
<div className="col-sm-6">
<h3  className="h-custom-headline man h5 ba2" ><span>Python:</span></h3>
<p className="man">Python is our core programming language. It&#8217;s simple and easy to program in but it&#8217;s extremely powerful. It&#8217;s used by companies like Google, YouTube, DropBox and many more. The course will cover all the basics of Python programming. By the end students will be able to write very complex programs quickly and efficiently.</p>
<hr className="margin: 35px 0 0 0;"/>
<h3  className="h-custom-headline man h5 ba2" ><span>DJANGO:</span></h3>
<p className="man">Django is a high-level Python web framework that encourages rapid development and clean design. It takes the hassle out of setting up webservers, managing and interacting with databases, handling user authentication and interaction and much much more. Django allows for the creation of everything from pure data APIs to rich dynamic web applications. Django is used by companies like Pinterest and Instagram and it is CODED&#8217;s framework of choice.</p>
<hr className="margin: 35px 0 0 0;"/>
<h3  className="h-custom-headline man h5 ba2" ><span>Software Project Management:</span></h3>
<p className="man">Throughout the course students will be continuously exposed to the latest software development methodologies used by major companies. Students will be working in a test-driven development environment, pair-programming and using Agile workflows, and all projects will be versioned and managed using Git and Github.</p>
<hr className="margin: 35px 0 0 0;"/>
<h3  className="h-custom-headline man h5 ba2" ><span>Deliverables:</span></h3>
<p className="man">CODED&#8217;s curriculum is project-driven. This means that throughout the course students will be working on multiple projects. During the instructional phase, students will work on different aspects of real web applications of increasing difficulty and complexity, culminating in a final project phase where they can propose their own original ideas and turn them into real working applications.</p>
</div>
<div className="col-sm-6">
<h3  className="h-custom-headline man h5 ba2" ><span>Web Design:</span></h3>
<p className="man">Build stunning responsive web applications by leveraging the power of HTML5, CSS3 and Bootstrap 3 for rapid prototyping and design of your user interfaces.</p>
<hr className="margin: 35px 0 0 0;"/>
<h3  className="h-custom-headline man h5 ba2" ><span>JavaScript:</span></h3>
<p className="man">CODED&#8217;s secondary programming language, JavaScript was born on the web and built for the web. JavaScript allows you to manipulate elements on your pages, create animations and interact with APIs and servers using AJAX. JavaScript breathes life into any website by making it dynamic and interactive.</p>
<hr className="margin: 35px 0 0 0;"/>
<h3  className="h-custom-headline man h5 ba2" ><span>ReactJS and React Native:</span></h3>
<p className="man">ReactJS (or just React) is a cutting-edge frontend library for building rich, interactive user interfaces. It uses a component-based development approach that allows programmers to build large web applications that constantly update their interface as their data changes without reloading the page. React was created by and for Facebook and Instagram and used by other major companies like Netflix and Airbnb.<br />
React Native is an even newer bleeding-edge library built on top of React. It allows for the rapid development of native mobile applications for both iOS and Android devices using a single React codebase. With React Native our students get to see their app ideas come to life quickly on all mobile platforms.</p>
<hr className="margin: 35px 0 0 0;"/>
<h3  className="h-custom-headline man h5 ba2" ><span>SYSTEM ADMINISTRATION:</span></h3>
<p className="man">Students will get the chance to deploy their applications into a production environment that they set up, run and manage themselves. The course will cover deployment using DigitalOcean.</p>
</div>
</div>
<div  className="x-column x-sm x-1-1 last" className="" >
<div  className="x-container max width" >
<hr className="margin: 55px 0 0 0;"/>
<h2  className="h-custom-headline tt-upper man center-text h3 accent ba " >
<span><a  className="x-btn x-btn-square x-btn-large"  href="/form" title="Click here to apply"    data-options="thumbnail: ''" className="offset-sm-3">Apply Now!</a>
</span></h2>
<hr className="margin: 55px 0 0 0;"/>
</div>
</div> 
</div>    
  </div>
    </div> 
  </div>
  </div>
 );
}
export default withRouter(observer(BootCampDetail));