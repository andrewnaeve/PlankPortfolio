import React from 'react';
import { render } from 'react-dom';
import './normalize.css';
import './index.css';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
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
registerServiceWorker();
