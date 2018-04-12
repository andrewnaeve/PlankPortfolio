const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((req, res) => {
	res.send('Hello from Firebase!');
});

exports.paymentReq = functions.https.onRequest((req, res) => {
	console.log('req', req);
	console.log('req.query', req.query);
	console.log('req.query.custo', req.query.customerInfo);
	console.log('reqparams', req.params);
	res.send('hi');
});
