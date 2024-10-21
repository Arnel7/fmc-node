// firebaseAdmin.js

const admin = require("firebase-admin");

// Chemin vers votre fichier de clé privée JSON de service
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
