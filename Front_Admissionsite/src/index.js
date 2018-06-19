import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import authStore from './stores/authStore';
import formStore from './stores/formStore';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
	<BrowserRouter>
		<App authStore={authStore} formStore={formStore}/>
	</BrowserRouter>,
	document.getElementById('root')
);
registerServiceWorker();
