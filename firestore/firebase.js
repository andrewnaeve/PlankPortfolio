const firebase = require('firebase');
const { config } = require('../src/secrets');
firebase.initializeApp(config);
require('firebase/firestore');

exports.db = firebase.firestore();
