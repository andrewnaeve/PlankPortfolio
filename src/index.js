import React from 'react';
import { render } from 'react-dom';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
// import registerServiceWorker from './registerServiceWorker';
import { unregister } from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import ScrollToTop from './components/Utilities/ScrollToTop';

render(
	<Provider store={store}>
		<BrowserRouter>
			<ScrollToTop>
				<App />
			</ScrollToTop>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
// registerServiceWorker();
unregister();
