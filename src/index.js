import React from 'react';
import { render } from 'react-dom';
import './normalize.css';
import './index.css';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
);
registerServiceWorker();
