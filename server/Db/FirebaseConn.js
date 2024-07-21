const admin = require('firebase-admin')
const serviceAccount = require('../Firebase /serviceAccountKey.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://treeplantation-af494 .firebaseio.com'
  });

  const db = admin.firestore() ; // For Firestore, or admin.database() for Realtime Database


  module.exports = db