import React from 'react';
import { render } from 'react-dom';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
// import registerServiceWorker from './registerServiceWorker';
import { unregister } from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import ScrollToTop from './components/Utilities/ScrollToTop';
import { injectGlobal } from 'styled-components';
import Abel from './fonts/Abel-Regular.ttf';
import FontAwesome from './fonts/fontawesome-webfont.woff2?v=4.7.0';

injectGlobal`
	@font-face {
		font-family: 'Abel';
		src: url('${Abel}');
		format('ttf');
	}
	@font-face {
		font-family: 'FontAwesome';
		src: url('${FontAwesome}');
		format('woff2');
	}
`;

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
