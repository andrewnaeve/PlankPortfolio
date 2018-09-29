const firebase = require('firebase');
const { config } = require('../src/secrets');
firebase.initializeApp(config);

const db = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};

db.settings(settings);

module.exports = db;
