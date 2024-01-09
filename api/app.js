const express = require('express');

// Créez l'application Express
const app = express();

// Définissez la route d'inscription
app.post('/inscription', (req, res) => {
  // Récupérez les informations d'inscription du corps de la requête
  const nom = req.body.nom;
  const prenom = req.body.prenom;
  const anneeEtude = req.body.anneeEtude;
  const domaineEtudes = req.body.domaineEtudes;
  const stagesSouhaites = req.body.stagesSouhaites;

  // Créez un nouvel objet Stage
  const stage = new Stage({
    nom,
    prenom,
    anneeEtude,
    domaineEtudes,
    stagesSouhaites,
  });

  // Enregistrez le stage dans la base de données
  stageService.createStage(stage);

  // Renvoyez un message de confirmation
  res.send('Inscription réussie !');
});

// Définissez le port d'écoute
const port = 3000;

// Démarrez le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});