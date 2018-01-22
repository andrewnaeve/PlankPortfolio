import React from 'react';
import { render } from 'react-dom';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
import { unregister } from './registerServiceWorker';
import ScrollToTop from './utilities/ScrollToTop';
import './utilities/global-styles';
import { BasketProvider } from './pages/Basket/BasketProvider';
render(
	<BrowserRouter>
		<BasketProvider>
			<ScrollToTop>
				<App />
			</ScrollToTop>
		</BasketProvider>
	</BrowserRouter>,
	document.getElementById('root')
);

unregister();
