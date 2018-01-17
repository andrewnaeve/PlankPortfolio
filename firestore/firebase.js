const firebase = require('firebase');
const { config } = require('../secrets');
firebase.initializeApp(config);
require('firebase/firestore');

exports.db = firebase.firestore();
