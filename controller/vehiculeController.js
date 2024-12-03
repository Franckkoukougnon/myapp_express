const vehiculeRepository = require("../repository/vehiculeRepository.js");

//Methode pour afficher les vehicules
const getAll = async (req, res) => {
  try {
    const vehicules = await vehiculeRepository.getAll();
    res.json(vehicules);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Methode pour afficher un vehicule
const getById = async (req, res) => {
  try {
    const vehicule = await vehiculeRepository.getById(req.params.id);
    res.json(vehicule);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Methode pour creer un vehicule
const create = async (req, res) => {
  try {
    const result = await vehiculeRepository.create(req.body);

    // Vérifier si une ligne a été insérée
    if (result.affectedRows > 0) {
      res.status(201).json({
        message: "Le véhicule a bien été enregistré en base de données.",
        data: req.body, // Inclure les données du véhicule
      });
    } else {
      res.status(400).json({
        message: "Le véhicule n'a pas pu être enregistré en base de données.",
      });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Methode pour modifier un vehicule
const update = async (req, res) => {
  try {
    const result = await vehiculeRepository.update(req.params.id, req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Methode pour supprimer un vehicule
const deleteVehicule = async (req, res) => {
  try {
    const result = await vehiculeRepository.delete(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteVehicule,
};
