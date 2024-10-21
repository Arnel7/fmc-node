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
  "fYtEkIKKgrLN8erMrr7Fzf:APA91bHmk3SdnC1oo6kac9frtDO1qydn758M1qp2bNcUEOKrwl6q5Qv7A3195PVm05VZSBkCmEK5Db-AnAdglNIBznvcZ6c826pnDBh8C-jXACIV5RYX0shVEj5000gWwGYGyHoKD45F"; // Remplacez par le token du client
sendNotification(token, "Coding TEAM", "Exemple de notification ");
