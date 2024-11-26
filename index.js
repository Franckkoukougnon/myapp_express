const express = require("express");
// npm install express
const app = express();

// nommé le port
const port = 3000;

// parser le Json
const bodyParser = require("body-parser");

// utiliser le body-parser
app.use(bodyParser.json());

const db = require("./config/db");

// créer une route
app.post("/koukougnon/:id", (req, res) => {
  console.log(req.params);
  res.send(req.params);
});

app.post("/koukougnon", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.get("/koukougnon", async (req, res) => {
  const [rows] = await db.query("SELECT * FROM vehicules");
  res.send(rows);
});

// démarrer le serveur
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// lancer le serveur
// node index.js
