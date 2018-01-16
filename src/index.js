import React from 'react';
import { render } from 'react-dom';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
// import registerServiceWorker from './registerServiceWorker';
import { unregister } from './registerServiceWorker';
import ScrollToTop from './utilities/ScrollToTop';
import './utilities/global-styles';

render(
	<BrowserRouter>
		<ScrollToTop>
			<App />
		</ScrollToTop>
	</BrowserRouter>,

	document.getElementById('root')
);
// registerServiceWorker();
unregister();
