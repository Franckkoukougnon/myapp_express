// Description: Model for vehicule.
class VehiculeModel {
  constructor(marque, modele, annee, prix) {
    this.marque = marque;
    this.modele = modele;
    this.annee = annee;
    this.prix = prix;
  }

  isValid() {
    return this.marque && this.modele && this.annee && this.prix;
  }
}

module.exports = new VehiculeModel();
