const express = require("express"); // Importer Express
const bodyParser = require("body-parser"); // Importer body-parser
const vehiculeRoutes = require("./routes/vehiculeRoutes"); // Importer tes routes
const app = express(); // Créer une application Express
const port = 3000; // Port du serveur
const swaggerUi = require("swagger-ui-express"); // Correctement importer Swagger UI
const swaggerDocs = require("./swagger/swagger"); // Importer vos spécifications Swagger

// Configurer body-parser pour parser le JSON
app.use(bodyParser.json());

// Route pour Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Importer et tester la connexion à la base de données
const db = require("./config/db");

// Tester la connexion à la base de données
db.getConnection((err) => {
  if (err) {
    console.error("Erreur de connexion à la base de données :", err);
  } else {
    console.log("Connexion réussie à la base de données.");
  }
});

// Utiliser les routes de véhicule
app.use("/api/vehicules", vehiculeRoutes);

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Swagger UI disponible sur http://localhost:${port}/api-docs`);
});
