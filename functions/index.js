const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
const firestore = firebase.firestore();
const settings = { /* your settings... */ timestampsInSnapshots: true };
firestore.settings(settings);
