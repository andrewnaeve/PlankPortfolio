import axios from 'axios';

export const paymentRequest = (nonce, customerInfo) => {
	axios
		.post('https://us-central1-nancyplank-ff678.cloudfunctions.net/paymentReq', {
			nonce: nonce,
			customerInfo: customerInfo
		})
		.then(function(response) {
			console.log('inda', response);
		})
		.catch(function(error) {
			console.log(error);
		});
};
