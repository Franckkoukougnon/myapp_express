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
      "INSERT INTO vehicules (marque, modele, annee) VALUES (?, ?, ?)",
      [vehicule.marque, vehicule.modele, vehicule.annee]
    );
    return rows;
  }
  async update(id, vehicule) {
    const [rows] = await db.query(
      "UPDATE vehicules SET marque = ?, modele = ?, annee = ? WHERE id = ?",
      [vehicule.marque, vehicule.modele, vehicule.annee, id]
    );
    return rows;
  }
  async delete(id) {
    const [rows] = await db.query("DELETE FROM vehicules WHERE id = ?", [id]);
    return rows;
  }
}
