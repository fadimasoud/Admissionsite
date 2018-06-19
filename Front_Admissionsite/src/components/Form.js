
import React from 'react';
import {observer} from 'mobx-react';
// import './font2.css';
// Components
// import SideNav from './SideNav';
// import AuthButton from './AuthButton';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
// import CreateChannel from './CreateChannel';

function Form(props) {

	return (
		<div className="container">
		<div className="x-container max width " id="offset">
		    <div className="x-main full" role="main">		      
		        <article id="post-456" className="post-456 page type-page status-publish hentry no-post-thumbnail"> 
					<div className="entry-content content">
		                <div className='gf_browser_gecko gform_wrapper' id='gform_wrapper_17' >
		                	<form method='post' encType='multipart/form-data'  id='gform_17'  action='/application-form/'>
		                        <div className='gform_heading'>
		                            <h3 className='gform_title'>Coded Summer2018 Part-Time Bootcamp Application</h3>
		                            <span className='gform_description'>Please fill out the required information below.</span>
		                        </div>
		                        <div className='gform_body'>
		               			<ul id='gform_fields_17' className='gform_fields top_label form_sublabel_below description_below'>
			                        <li id='field_17_4' className='gfield gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible' >
			                        <label className='gfield_label gfield_label_before_complex' htmlFor='input_17_4_3' >Name
			                        <span className='gfield_required' >*</span>
			                        </label>
			                        <div className='ginput_complex ginput_container no_prefix has_first_name no_middle_name has_last_name no_suffix gf_name_has_2 ginput_container_name gfield_trigger_change' id='input_17_4'>
			                            <span id='input_17_4_3_container' className='name_first' >
	                                        <input type='text' name='input_4.3' id='input_17_4_3' value='' aria-label='First name' tabIndex='2'  aria-required="true" aria-invalid="false" />
	                                        <label htmlFor='input_17_4_3' >First</label>
	                                    </span>		                            
			                            <span id='input_17_4_6_container' className='name_last' >
	                                        <input type='text' name='input_4.6' id='input_17_4_6' value='' aria-label='Last name' tabIndex='4'  aria-required="true" aria-invalid="false" />
	                                        <label htmlFor='input_17_4_6' >Last</label>
	                                    </span>		                            
			                        </div>
			                        </li>
			                        <li id='field_17_3' className='gfield gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible' >
				                        <label className='gfield_label' htmlFor='input_17_3' >Email Address:
				                        	<span className='gfield_required'>*</span>
				                        </label>
			                        <div className='ginput_container ginput_container_email'>
			                            <input name='input_3' id='input_17_3' type='text' value='' className='medium' tabIndex='6'    aria-required="true" aria-invalid="false"/>
			                        </div>
			                        </li>
			                        <li id='field_17_5' className='gfield gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible' >
			                        <label className='gfield_label' htmlFor='input_17_5' >Mobile Phone:
			                        <span className='gfield_required'>*</span>
			                        </label>
			                        <div className='ginput_container ginput_container_phone'>
			                        <input name='input_5' id='input_17_5' type='text' value='' className='medium' tabIndex='7'   aria-required="true" aria-invalid="false" />
			                        </div>
			                        <div className='gfield_description'>Ex: 55123456
			                        </div>
			                        </li>
			                        <li id='field_17_6' className='gfield gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible' >
				                        <label className='gfield_label gfield_label_before_complex' htmlFor='input_17_6_1' >Date of Birth:
				                        <span className='gfield_required'>*</span>
				                        </label>
				                        <div id='input_17_6' className='ginput_container ginput_container_date'>
				                        	<div className='clear-multi'>
		                                        <div className='gfield_date_day ginput_container ginput_container_date' id='input_17_6_2_container'>
		                                            <input type='text' maxLength='2' name='input_6[]' id='input_17_6_2' value='' tabIndex='8'   />
		                                            <label htmlFor='input_17_6_2' >DD</label>
				                                </div>
				                                <div className='gfield_date_month ginput_container ginput_container_date' id='input_17_6_1_container'>
			                                        <input type='text' maxLength='2' name='input_6[]' id='input_17_6_1' value='' tabIndex='9'   />
			                                        <label htmlFor='input_17_6_1' >MM</label>
				                                </div>
				                                <div className='gfield_date_year ginput_container ginput_container_date' id='input_17_6_3_container'>
			                                        <input type='text' maxLength='4' name='input_6[]' id='input_17_6_3' value='' tabIndex='10'     />
			                                        <label htmlFor='input_17_6_3' >YYYY</label>
				                                </div>
				                                </div>
				                            </div>
			                        </li>
			                        <li id='field_17_7' className='gfield gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible' >
				                        <label className='gfield_label' htmlFor='input_17_7' >Gender:
				                        	<span className='gfield_required'>*</span>
				                        </label>
				                        <div className='ginput_container ginput_container_select'>
				                        	<select name='input_7' id='input_17_7'  className='medium gfield_select' tabIndex='11'  aria-required="true" aria-invalid="false">
					                        	<option value='' selected='selected' className='gf_placeholder'>------</option>
					                        	<option value='Male' >Male</option>
					                        	<option value='Female' >Female</option>
				                        	</select>
				                        </div>
			                        </li>
			                        <li id='field_17_21' className='gfield gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible' >
				                        <label className='gfield_label' htmlFor='input_17_21' >T-Shirt Size (You&#039;ll be given a Coded T-Shirt on the day of graduation)
				                        	<span className='gfield_required'>*</span>
				                        </label>
				                        <div className='ginput_container ginput_container_select'>
				                        	<select name='input_21' id='input_17_21'  className='medium gfield_select' tabIndex='12'  aria-required="true" aria-invalid="false">
				                        	<option value='XS' >XS</option>
				                        	<option value='S' >S</option>
				                        	<option value='M' >M</option>
				                        	<option value='L' >L</option>
				                        	<option value='XL' >XL</option>
				                        	<option value='XXL' >XXL</option>
				                        	<option value='3XL' >3XL</option></select>
				                        </div>
				                    </li>
			                        <li id='field_17_8' className='gfield gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible' >
				                        <label className='gfield_label gfield_label_before_complex' htmlFor='input_17_8_1' >Address:
				                        	<span className='gfield_required'>*</span>
			                        	</label>    
				                    	<div className='ginput_complex ginput_container has_street has_street2 has_city has_country ginput_container_address gfield_trigger_change' id='input_17_8' >
				                         	<span className='ginput_full address_line_1' id='input_17_8_1_container' >
		                                        <input type='text' name='input_8.1' id='input_17_8_1' value='' tabIndex='13'  placeholder='Ex: Block 1, Street 2, House 3'/>
		                                        <label htmlFor='input_17_8_1' id='input_17_8_1_label' >Street Address</label>
		                                    </span><span className='ginput_full address_line_2' id='input_17_8_2_container' >
		                                        <input type='text' name='input_8.2' id='input_17_8_2' value='' tabIndex='14'  placeholder='Ex: First Floor, Apt 1'/>
		                                        <label htmlFor='input_17_8_2' id='input_17_8_2_label' >Address Line 2</label>
		                                    </span>
		                                    <span className='ginput_left address_city' id='input_17_8_3_container' >
		                                    	<input type='text' name='input_8.3' id='input_17_8_3' value='' tabIndex='15'  placeholder='Ex: Sharq'/>
		                                    	<label htmlFor='input_17_8_3' id='input_17_8_3_label' >City</label>
		                                 	</span>
		                                 	<input type='hidden' className='gform_hidden' name='input_8.4' id='input_17_8_4' value=''/>
		                                 	<span className='ginput_left address_country' id='input_17_8_6_container' >
		                                        <select name='input_8.6' id='input_17_8_6' tabIndex='17' >
			                                        <option value='' ></option>
			                                        <option value='Afghanistan' >Afghanistan</option>
			                                        <option value='Albania' >Albania</option>
			                                        <option value='Algeria' >Algeria</option>
			                                        <option value='American Samoa' >American Samoa</option>
			                                        <option value='Andorra' >Andorra</option>
			                                        <option value='Angola' >Angola</option>
			                                        <option value='Antigua and Barbuda' >Antigua and Barbuda</option>
			                                        <option value='Argentina' >Argentina</option>
			                                        <option value='Armenia' >Armenia</option>
			                                        <option value='Australia' >Australia</option>
			                                        <option value='Austria' >Austria</option>
			                                        <option value='Azerbaijan' >Azerbaijan</option>
			                                        <option value='Bahamas' >Bahamas</option>
			                                        <option value='Bahrain' >Bahrain</option>
			                                        <option value='Bangladesh' >Bangladesh</option>
			                                        <option value='Barbados' >Barbados</option>
			                                        <option value='Belarus' >Belarus</option>
			                                        <option value='Belgium' >Belgium</option>
			                                        <option value='Belize' >Belize</option>
			                                        <option value='Benin' >Benin</option>
			                                        <option value='Bermuda' >Bermuda</option>
			                                        <option value='Bhutan' >Bhutan</option>
			                                        <option value='Bolivia' >Bolivia</option>
			                                        <option value='Bosnia and Herzegovina' >Bosnia and Herzegovina</option>
			                                        <option value='Botswana' >Botswana</option>
			                                        <option value='Brazil' >Brazil</option>
			                                        <option value='Brunei' >Brunei</option>
			                                        <option value='Bulgaria' >Bulgaria</option>
			                                        <option value='Burkina Faso' >Burkina Faso</option>
			                                        <option value='Burundi' >Burundi</option>
			                                        <option value='Cambodia' >Cambodia</option>
			                                        <option value='Cameroon' >Cameroon</option>
			                                        <option value='Canada' >Canada</option>
			                                        <option value='Cape Verde' >Cape Verde</option>
			                                        <option value='Cayman Islands' >Cayman Islands</option>
			                                        <option value='Central African Republic' >Central African Republic</option>
			                                        <option value='Chad' >Chad</option>
			                                        <option value='Chile' >Chile</option>
			                                        <option value='China' >China</option>
			                                        <option value='Colombia' >Colombia</option>
			                                        <option value='Comoros' >Comoros</option>
			                                        <option value='Congo, Democratic Republic of the' >Congo, Democratic Republic of the</option>
			                                        <option value='Congo, Republic of the' >Congo, Republic of the</option>
			                                        <option value='Costa Rica' >Costa Rica</option>
			                                        <option value='Côte d&#039;Ivoire' >Côte d&#039;Ivoire</option>
			                                        <option value='Croatia' >Croatia</option>
			                                        <option value='Cuba' >Cuba</option>
			                                        <option value='Curaçao' >Curaçao</option>
			                                        <option value='Cyprus' >Cyprus</option>
			                                        <option value='Czech Republic' >Czech Republic</option>
			                                        <option value='Denmark' >Denmark</option>
			                                        <option value='Djibouti' >Djibouti</option>
			                                        <option value='Dominica' >Dominica</option>
			                                        <option value='Dominican Republic' >Dominican Republic</option>
			                                        <option value='East Timor' >East Timor</option>
			                                        <option value='Ecuador' >Ecuador</option>
			                                        <option value='Egypt' >Egypt</option>
			                                        <option value='El Salvador' >El Salvador</option>
			                                        <option value='Equatorial Guinea' >Equatorial Guinea</option>
			                                        <option value='Eritrea' >Eritrea</option>
			                                        <option value='Estonia' >Estonia</option>
			                                        <option value='Ethiopia' >Ethiopia</option>
			                                        <option value='Faroe Islands' >Faroe Islands</option>
			                                        <option value='Fiji' >Fiji</option>
			                                        <option value='Finland' >Finland</option>
			                                        <option value='France' >France</option>
			                                        <option value='French Polynesia' >French Polynesia</option>
			                                        <option value='Gabon' >Gabon</option>
			                                        <option value='Gambia' >Gambia</option>
			                                        <option value='Georgia' >Georgia</option>
			                                        <option value='Germany' >Germany</option>
			                                        <option value='Ghana' >Ghana</option>
			                                        <option value='Greece' >Greece</option>
			                                        <option value='Greenland' >Greenland</option>
			                                        <option value='Grenada' >Grenada</option>
			                                        <option value='Guam' >Guam</option>
			                                        <option value='Guatemala' >Guatemala</option>
			                                        <option value='Guinea' >Guinea</option>
			                                        <option value='Guinea-Bissau' >Guinea-Bissau</option>
			                                        <option value='Guyana' >Guyana</option>
			                                        <option value='Haiti' >Haiti</option>
			                                        <option value='Honduras' >Honduras</option>
			                                        <option value='Hong Kong' >Hong Kong</option>
			                                        <option value='Hungary' >Hungary</option>
			                                        <option value='Iceland' >Iceland</option>
			                                        <option value='India' >India</option>
			                                        <option value='Indonesia' >Indonesia</option>
			                                        <option value='Iran' >Iran</option>
			                                        <option value='Iraq' >Iraq</option>
			                                        <option value='Ireland' >Ireland</option>
			                                        <option value='Israel' >Israel</option>
			                                        <option value='Italy' >Italy</option>
			                                        <option value='Jamaica' >Jamaica</option>
			                                        <option value='Japan' >Japan</option>
			                                        <option value='Jordan' >Jordan</option>
			                                        <option value='Kazakhstan' >Kazakhstan</option>
			                                        <option value='Kenya' >Kenya</option>
			                                        <option value='Kiribati' >Kiribati</option>
			                                        <option value='North Korea' >North Korea</option>
			                                        <option value='South Korea' >South Korea</option>
			                                        <option value='Kosovo' >Kosovo</option>
			                                        <option value='Kuwait' selected='selected'>Kuwait</option>
			                                        <option value='Kyrgyzstan' >Kyrgyzstan</option>
			                                        <option value='Laos' >Laos</option>
			                                        <option value='Latvia' >Latvia</option>
			                                        <option value='Lebanon' >Lebanon</option>
			                                        <option value='Lesotho' >Lesotho</option>
			                                        <option value='Liberia' >Liberia</option>
			                                        <option value='Libya' >Libya</option>
			                                        <option value='Liechtenstein' >Liechtenstein</option>
			                                        <option value='Lithuania' >Lithuania</option>
			                                        <option value='Luxembourg' >Luxembourg</option>
			                                        <option value='Macedonia' >Macedonia</option>
			                                        <option value='Madagascar' >Madagascar</option>
			                                        <option value='Malawi' >Malawi</option>
			                                        <option value='Malaysia' >Malaysia</option>
			                                        <option value='Maldives' >Maldives</option>
			                                        <option value='Mali' >Mali</option>
			                                        <option value='Malta' >Malta</option>
			                                        <option value='Marshall Islands' >Marshall Islands</option>
			                                        <option value='Mauritania' >Mauritania</option>
			                                        <option value='Mauritius' >Mauritius</option>
			                                        <option value='Mexico' >Mexico</option>
			                                        <option value='Micronesia' >Micronesia</option>
			                                        <option value='Moldova' >Moldova</option>
			                                        <option value='Monaco' >Monaco</option>
			                                        <option value='Mongolia' >Mongolia</option>
			                                        <option value='Montenegro' >Montenegro</option>
			                                        <option value='Morocco' >Morocco</option>
			                                        <option value='Mozambique' >Mozambique</option>
			                                        <option value='Myanmar' >Myanmar</option>
			                                        <option value='Namibia' >Namibia</option>
			                                        <option value='Nauru' >Nauru</option>
			                                        <option value='Nepal' >Nepal</option>
			                                        <option value='Netherlands' >Netherlands</option>
			                                        <option value='New Zealand' >New Zealand</option>
			                                        <option value='Nicaragua' >Nicaragua</option>
			                                        <option value='Niger' >Niger</option>
			                                        <option value='Nigeria' >Nigeria</option>
			                                        <option value='Northern Mariana Islands' >Northern Mariana Islands</option>
			                                        <option value='Norway' >Norway</option>
			                                        <option value='Oman' >Oman</option>
			                                        <option value='Pakistan' >Pakistan</option>
			                                        <option value='Palau' >Palau</option>
			                                        <option value='Palestine, State of' >Palestine, State of</option>
			                                        <option value='Panama' >Panama</option>
			                                        <option value='Papua New Guinea' >Papua New Guinea</option>
			                                        <option value='Paraguay' >Paraguay</option>
			                                        <option value='Peru' >Peru</option>
			                                        <option value='Philippines' >Philippines</option>
			                                        <option value='Poland' >Poland</option>
			                                        <option value='Portugal' >Portugal</option>
			                                        <option value='Puerto Rico' >Puerto Rico</option>
			                                        <option value='Qatar' >Qatar</option>
			                                        <option value='Romania' >Romania</option>
			                                        <option value='Russia' >Russia</option>
			                                        <option value='Rwanda' >Rwanda</option>
			                                        <option value='Saint Kitts and Nevis' >Saint Kitts and Nevis</option>
			                                        <option value='Saint Lucia' >Saint Lucia</option>
			                                        <option value='Saint Vincent and the Grenadines' >Saint Vincent and the Grenadines</option>
			                                        <option value='Samoa' >Samoa</option>
			                                        <option value='San Marino' >San Marino</option>
			                                        <option value='Sao Tome and Principe' >Sao Tome and Principe</option>
			                                        <option value='Saudi Arabia' >Saudi Arabia</option>
			                                        <option value='Senegal' >Senegal</option>
			                                        <option value='Serbia' >Serbia</option>
			                                        <option value='Seychelles' >Seychelles</option>
			                                        <option value='Sierra Leone' >Sierra Leone</option>
			                                        <option value='Singapore' >Singapore</option>
			                                        <option value='Sint Maarten' >Sint Maarten</option>
			                                        <option value='Slovakia' >Slovakia</option>
			                                        <option value='Slovenia' >Slovenia</option>
			                                        <option value='Solomon Islands' >Solomon Islands</option>
			                                        <option value='Somalia' >Somalia</option>
			                                        <option value='South Africa' >South Africa</option>
			                                        <option value='Spain' >Spain</option>
			                                        <option value='Sri Lanka' >Sri Lanka</option>
			                                        <option value='Sudan' >Sudan</option>
			                                        <option value='Sudan, South' >Sudan, South</option>
			                                        <option value='Suriname' >Suriname</option>
			                                        <option value='Swaziland' >Swaziland</option>
			                                        <option value='Sweden' >Sweden</option>
			                                        <option value='Switzerland' >Switzerland</option>
			                                        <option value='Syria' >Syria</option>
			                                        <option value='Taiwan' >Taiwan</option>
			                                        <option value='Tajikistan' >Tajikistan</option>
			                                        <option value='Tanzania' >Tanzania</option>
			                                        <option value='Thailand' >Thailand</option>
			                                        <option value='Togo' >Togo</option>
			                                        <option value='Tonga' >Tonga</option>
			                                        <option value='Trinidad and Tobago' >Trinidad and Tobago</option>
			                                        <option value='Tunisia' >Tunisia</option>
			                                        <option value='Turkey' >Turkey</option>
			                                        <option value='Turkmenistan' >Turkmenistan</option>
			                                        <option value='Tuvalu' >Tuvalu</option>
			                                        <option value='Uganda' >Uganda</option>
			                                        <option value='Ukraine' >Ukraine</option>
			                                        <option value='United Arab Emirates' >United Arab Emirates</option>
			                                        <option value='United Kingdom' >United Kingdom</option>
			                                        <option value='United States' >United States</option>
			                                        <option value='Uruguay' >Uruguay</option>
			                                        <option value='Uzbekistan' >Uzbekistan</option>
			                                        <option value='Vanuatu' >Vanuatu</option>
			                                        <option value='Vatican City' >Vatican City</option>
			                                        <option value='Venezuela' >Venezuela</option>
			                                        <option value='Vietnam' >Vietnam</option>
			                                        <option value='Virgin Islands, British' >Virgin Islands, British</option>
			                                        <option value='Virgin Islands, U.S.' >Virgin Islands, U.S.</option>
			                                        <option value='Yemen' >Yemen</option>
			                                        <option value='Zambia' >Zambia</option>
			                                        <option value='Zimbabwe' >Zimbabwe</option>
			                                    </select>
			                                <label htmlFor='input_17_8_6' id='input_17_8_6_label' >Country
			                                </label>
	                                		</span>
	                    					<div className='gf_clear gf_clear_complex'></div>
		                				</div>
				                	</li>
				                	<li id='field_17_15' className='gfield gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible' >
					                	<label className='gfield_label' htmlFor='input_17_15' >Education Level:
					                	<span className='gfield_required'>*</span>
				                		</label>
					                	<div className='ginput_container ginput_container_select'>
						                	<select name='input_15' id='input_17_15'  className='medium gfield_select' tabIndex='18'  aria-required="true" aria-invalid="false">
								                <option value='' selected='selected' className='gf_placeholder'>Choose current education level</option>
								                <option value='High School' >High School</option>
								                <option value='University: First Year' >University: First Year</option>
								                <option value='University: Second Year' >University: Second Year</option>
								                <option value='University: Third Year' >University: Third Year</option>
								                <option value='University: Fourth Year' >University: Fourth Year</option>
								                <option value='Completed a Two-Year Diploma' >Completed a Two-Year Diploma</option>
								                <option value='Completed a Bachelors Degree' >Completed a Bachelors Degree</option>
					                			<option value='Post Graduate Studies (Masters &amp; PHD)' >Post Graduate Studies (Masters &amp; PHD)</option>
					                		</select>
					                	</div>
				                	</li>
				                	<li id='field_17_20' className='gfield gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible' >
					                	<label className='gfield_label' htmlFor='input_17_20' >Name of University / Highschool:
					                	<span className='gfield_required'>*</span>
				                	</label>
				                	<div className='ginput_container ginput_container_text'>
				                		<input name='input_20' id='input_17_20' type='text' value='' className='medium'  tabIndex='19'   aria-required="true" aria-invalid="false" />
				                	</div>
				                	</li>
				                	<li id='field_17_11' className='gfield gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible' >
					                	<label className='gfield_label' htmlFor='input_17_11' >Major:
					                	<span className='gfield_required'>*</span>
				                	</label>
				                	<div className='ginput_container ginput_container_text'>
				                		<input name='input_11' id='input_17_11' type='text' value='' className='medium'  tabIndex='20'   aria-required="true" aria-invalid="false" />
				                	</div>
				                	</li>
				                	<li id='field_17_17' className='gfield field_sublabel_below field_description_below gfield_visibility_visible' >
				                		<label className='gfield_label' htmlFor='input_17_17' >Describe any work experience: (including freelance, part time, internships, full-time work, etc..)
				                		</label>
				                	<div className='ginput_container ginput_container_textarea'>
				                		<textarea name='input_17' id='input_17_17' className='textarea medium' tabIndex='21'    aria-invalid="false"   rows='10' cols='50'>
				                		</textarea>
				                	</div>
				                	</li>
				                	<li id='field_17_16' className='gfield field_sublabel_below field_description_below gfield_visibility_visible' >
				                		<label className='gfield_label' htmlFor='input_17_16' >Website / Link to Personal Portfolio:</label>
				                	<div className='ginput_container ginput_container_text'>
				                		<input name='input_16' id='input_17_16' type='text' value='' className='medium'  tabIndex='22'    aria-invalid="false" />
				                	</div>
				                	</li>
				                	<li id='field_17_18' className='gfield field_sublabel_below field_description_below gfield_visibility_visible' >
				                		<label className='gfield_label'  >How did you hear about us?
				                		</label>
				                	<div className='ginput_container ginput_container_checkbox'>
				                		<ul className='gfield_checkbox' id='input_17_18'>
				                			<li className='gchoice_17_18_1'>
												<input name='input_18.1' type='radio'  value='Presentation we did'  id='choice_17_18_1' tabIndex='23'  />
													<label htmlFor='choice_17_18_1' id='label_17_18_1'>Presentation we did</label>
											</li>
											<li className='gchoice_17_18_2'>
												<input name='input_18.2' type='radio'  value='Friend'  id='choice_17_18_2' tabIndex='24'  />
												<label htmlFor='choice_17_18_2' id='label_17_18_2'>Friend</label>
											</li>
											<li className='gchoice_17_18_3'>
												<input name='input_18.3' type='radio'  value='Your Computer Science professor'  id='choice_17_18_3' tabIndex='25'  />
												<label htmlFor='choice_17_18_3' id='label_17_18_3'>Your Computer Science professor</label>
											</li>
											<li className='gchoice_17_18_4'>
												<input name='input_18.4' type='radio'  value='From a Blog'  id='choice_17_18_4' tabIndex='26'  />
												<label htmlFor='choice_17_18_4' id='label_17_18_4'>From a Blog</label>
											</li>
											<li className='gchoice_17_18_5'>
												<input name='input_18.5' type='radio'  value='Instagram'  id='choice_17_18_5' tabIndex='27'  />
												<label htmlFor='choice_17_18_5' id='label_17_18_5'>Instagram</label>
											</li>
											<li className='gchoice_17_18_6'>
												<input name='input_18.6' type='radio'  value='Facebook'  id='choice_17_18_6' tabIndex='28'  />
												<label htmlFor='choice_17_18_6' id='label_17_18_6'>Facebook</label>
											</li>
											<li className='gchoice_17_18_7'>
												<input name='input_18.7' type='radio'  value='Twitter'  id='choice_17_18_7' tabIndex='29'  />
												<label htmlFor='choice_17_18_7' id='label_17_18_7'>Twitter</label>
											</li>
											<li className='gchoice_17_18_8'>
												<input name='input_18.8' type='radio'  value='Snapchat'  id='choice_17_18_8' tabIndex='30'  />
												<label htmlFor='choice_17_18_8' id='label_17_18_8'>Snapchat</label>
											</li>
											<li className='gchoice_17_18_9'>
												<input name='input_18.9' type='radio'  value='Sirdablab (Member)'  id='choice_17_18_9' tabIndex='31'  />
												<label htmlFor='choice_17_18_9' id='label_17_18_9'>Sirdablab (Member)</label>
											</li>
											<li className='gchoice_17_18_11'>
												<input name='input_18.11' type='radio'  value='From a former or current Coded student'  id='choice_17_18_11' tabIndex='32'  />
												<label htmlFor='choice_17_18_11' id='label_17_18_11'>From a former or current Coded student</label>
											</li>
											<li className='gchoice_17_18_12'>
												<input name='input_18.12' type='radio'  value='LinkedIn'  id='choice_17_18_12' tabIndex='33'  />
												<label htmlFor='choice_17_18_12' id='label_17_18_12'>LinkedIn</label>
											</li>
											<li className='gchoice_17_18_13'>
												<input name='input_18.13' type='radio'  value='Google'  id='choice_17_18_13' tabIndex='34'  />
												<label htmlFor='choice_17_18_13' id='label_17_18_13'>Google</label>
											</li>
											<li className='gchoice_17_18_14'>
												<input name='input_18.14' type='radio'  value='Other'  id='choice_17_18_14' tabIndex='35'  />
												<label htmlFor='choice_17_18_14' id='label_17_18_14'>Other</label>
											</li>
										</ul>
									</div>
									</li>
									<li id='field_17_13' className='gfield gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible' >
										<label className='gfield_label' htmlFor='input_17_13' >Why would you like to learn Code?
											<span className='gfield_required'>*</span>
										</label>
									<div className='ginput_container ginput_container_textarea'>
										<textarea name='input_13' id='input_17_13' className='textarea medium' tabIndex='36'   aria-required="true" aria-invalid="false"   rows='10' cols='50'>
										</textarea>
										</div>
									</li>
									<li id='field_17_12' className='gfield gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible' >
										<label className='gfield_label' htmlFor='input_17_12' >Describe your programming background:
										<span className='gfield_required'>*</span>
										</label>
									<div className='ginput_container ginput_container_textarea'>
										<textarea name='input_12' id='input_17_12' className='textarea medium' tabIndex='37'   aria-required="true" aria-invalid="false"   rows='10' cols='50'>
										</textarea>
									</div>
									</li>
									<li id='field_17_19' className='gfield field_sublabel_below field_description_below gfield_visibility_visible' >
										<label className='gfield_label'  >Upload your portfolio:
										</label>
										<div className='ginput_container ginput_container_fileupload'>
											<div id='gform_multifile_upload_17_19' data-settings='{&quot;runtimes&quot;:&quot;html5,flash,html4&quot;,&quot;browse_button&quot;:&quot;gform_browse_button_17_19&quot;,&quot;container&quot;:&quot;gform_multifile_upload_17_19&quot;,&quot;drop_element&quot;:&quot;gform_drag_drop_area_17_19&quot;,&quot;filelist&quot;:&quot;gform_preview_17_19&quot;,&quot;unique_names&quot;:true,&quot;file_data_name&quot;:&quot;file&quot;,&quot;url&quot;:&quot;http:\/\/www.joincoded.com\/?gf_page=ab6f485d25ddf8f&quot;,&quot;flash_swf_url&quot;:&quot;http:\/\/www.joincoded.com\/wp-includes\/js\/plupload\/plupload.flash.swf&quot;,&quot;silverlight_xap_url&quot;:&quot;http:\/\/www.joincoded.com\/wp-includes\/js\/plupload\/plupload.silverlight.xap&quot;,&quot;filters&quot;:{&quot;mime_types&quot;:[{&quot;title&quot;:&quot;Allowed Files&quot;,&quot;extensions&quot;:&quot;jpg,png,jpeg,pdf&quot;}],&quot;max_file_size&quot;:&quot;4194304b&quot;},&quot;multipart&quot;:true,&quot;urlstream_upload&quot;:false,&quot;multipart_params&quot;:{&quot;form_id&quot;:17,&quot;field_id&quot;:19},&quot;gf_vars&quot;:{&quot;max_files&quot;:&quot;3&quot;,&quot;message_id&quot;:&quot;gform_multifile_messages_17_19&quot;,&quot;disallowed_extensions&quot;:[&quot;php&quot;,&quot;asp&quot;,&quot;aspx&quot;,&quot;cmd&quot;,&quot;csh&quot;,&quot;bat&quot;,&quot;html&quot;,&quot;htm&quot;,&quot;hta&quot;,&quot;jar&quot;,&quot;exe&quot;,&quot;com&quot;,&quot;js&quot;,&quot;lnk&quot;,&quot;htaccess&quot;,&quot;phtml&quot;,&quot;ps1&quot;,&quot;ps2&quot;,&quot;php3&quot;,&quot;php4&quot;,&quot;php5&quot;,&quot;php6&quot;,&quot;py&quot;,&quot;rb&quot;,&quot;tmp&quot;]}}' className='gform_fileupload_multifile'>
												<div id='gform_drag_drop_area_17_19' className='gform_drop_area'>
													<span className='gform_drop_instructions'>Drop files here or </span>
													<input id='gform_browse_button_17_19' type='button' value='Select files' className='button gform_button_select_files' aria-describedby='extensions_message_17_19' tabIndex='38' />
												</div>
											</div>
											<span id='extensions_message_17_19' className='screen-reader-text'>Accepted file types: jpg, png, jpeg, pdf.
											</span>
											<div className='validation_message'>
												<ul id='gform_multifile_messages_17_19'>
												</ul>
											</div>
										</div>
										<div id='gform_preview_17_19'>
										</div>
										<div className='gfield_description'>You may upload up to 3 files (8MB max. each) to show us your previous work.
										</div>
									</li>
									<li id='field_17_14' className='gfield field_sublabel_below field_description_below gfield_visibility_visible' >
										<label className='gfield_label' htmlFor='input_17_14' >Please upload your CV if available:
										</label>
										<div className='ginput_container ginput_container_fileupload'>
											<input type='hidden' name='MAX_FILE_SIZE' value='8388608' />
											<input name='input_14' id='input_17_14' type='file' className='medium' aria-describedby='extensions_message_17_14' onChange='javascript:gformValidateFileSize( this, 8388608 );' tabIndex='39' />
												<span id='extensions_message_17_14' className='screen-reader-text'>Accepted file types: pdf, doc, docx.</span>
											<div className='validation_message'>
											</div>
										</div>
										<div className='gfield_description'>Formats allowed: pdf, doc, and docx. The maximum filesize is 8MB.
										</div>
									</li>
		                    	</ul>
		                    	</div>
						        <div className='gform_footer top_label'> <input type='submit' id='gform_submit_button_17' className='gform_button button' value='Submit' tabIndex='40' onClick='if(window["gf_submitting_17"]){return false;}  window["gf_submitting_17"]=true;  ' onKeyPress='if( event.keyCode == 13 ){ if(window["gf_submitting_17"]){return false;} window["gf_submitting_17"]=true;  jQuery("#gform_17").trigger("submit",[true]); }' /> 
						            <input type='hidden' className='gform_hidden' name='is_submit_17' value='1' />
						            <input type='hidden' className='gform_hidden' name='gform_submit' value='17' />
						            
						            <input type='hidden' className='gform_hidden' name='gform_unique_id' value='' />
						            <input type='hidden' className='gform_hidden' name='state_17' value='WyJbXSIsIjg5M2NiYmU3NGZkZGVjMjNlNjI4MGU2N2VmMTIwYzE3Il0=' />
						            <input type='hidden' className='gform_hidden' name='gform_target_page_number_17' id='gform_target_page_number_17' value='0' />
						            <input type='hidden' className='gform_hidden' name='gform_source_page_number_17' id='gform_source_page_number_17' value='1' />
						            <input type='hidden' name='gform_field_values' value='' />
						            <input type='hidden' name='gform_uploaded_files' id='gform_uploaded_files_17' value='' />
						        </div>
		                    </form>
		                </div>		            
		           	</div>
		        </article>
		    </div>
		</div>
		</div>
	);
}
export default withRouter(observer(Form));

