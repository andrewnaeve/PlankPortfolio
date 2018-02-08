import React from 'react';
import { render } from 'react-dom';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
import { unregister } from './registerServiceWorker';
import ScrollToTop from './utilities/ScrollToTop';
import './utilities/global-styles';
import { BasketProvider } from './pages/Store/Basket/BasketProvider';
import { ModalProvider } from './pages/Modal/ModalProvider';
import { OrderFormProvider } from './pages/Store/Shipping/Form/OrderFormProvider';
render(
	<BrowserRouter>
		<BasketProvider>
			<ModalProvider>
				<OrderFormProvider>
					<ScrollToTop>
						<App />
					</ScrollToTop>
				</OrderFormProvider>
			</ModalProvider>
		</BasketProvider>
	</BrowserRouter>,
	document.getElementById('root')
);

// const preloadImages = url => {
// 	const img = new Image();
// 	img.onload = () => {
// 		console.log('i am loaded');
// 	};
// 	img.src = url;
// };

// preloadImages(
// 	ImageProperties.forEach(image => {
// 		return preloadImages(image.firebaseUrl);
// 	})
// );

unregister();
