const admin = require("./firebaseAdmin");

function sendNotification(token, title, body) {
  const message = {
    notification: {
      title: title,
      body: body,
    },
    token: token,
  };

  admin
    .messaging()
    .send(message)
    
    .then((response) => {
      console.log("Notification envoyée avec succès:", response);
    })
    .catch((error) => {
      console.error("Erreur lors de l'envoi de la notification:", error);
    });
}

// Exemple d'utilisation
const token =
  ""; // Remplace par le token du client
sendNotification(token, "Coding TEAM", "Exemple de notification ");
