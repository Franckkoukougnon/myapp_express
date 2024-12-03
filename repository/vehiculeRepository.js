const db = require("../config/db");
const VehiculeModel = require("../model/vehiculeModel");

class vehiculeRepository {
  async getAll() {
    const [rows] = await db.query("SELECT * FROM vehicules");
    return rows;
  }
  async getById(id) {
    const [rows] = await db.query("SELECT * FROM vehicules WHERE id = ?", [id]);
    return rows;
  }
  async create(vehicule) {
    const [rows] = await db.query(
      "INSERT INTO vehicules (marque, modele, annee,prix) VALUES (?, ?, ?, ?)",
      [vehicule.marque, vehicule.modele, vehicule.annee, vehicule.prix]
    );
    return rows;
  }
  async update(id, vehicule) {
    const [rows] = await db.query(
      "UPDATE vehicules SET marque = ?, modele = ?, annee = ?, prix= ? WHERE id = ?",
      [vehicule.marque, vehicule.modele, vehicule.annee, vehicule.prix, id]
    );
    return rows;
  }
  async delete(id) {
    const [rows] = await db.query("DELETE FROM vehicules WHERE id = ?", [id]);
    return rows;
  }

  async getByCretaria(marque, prix, modele, annee) {
    const [rows] = await db.query(
      "SELECT * FROM vehicules WHERE marque = ? AND modele = ? AND annee = ? AND prix = ?",
      [marque, modele, annee, prix]
    );
    return rows;
  }
}

module.exports = new vehiculeRepository();
