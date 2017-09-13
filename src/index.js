import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
import { unregister } from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
unregister();
