const express = require("express");
const vehiculeController = require("../controller/vehiculeController.js");

const router = express.Router();

/**
 * @swagger
 * /api/vehicules:
 *   get:
 *     summary: Récupérer la liste des véhicules
 *     tags: [Véhicules]
 *     responses:
 *       200:
 *         description: Liste des véhicules récupérée avec succès
 */
router.get("/", vehiculeController.getAll);

/**
 * @swagger
 * /api/vehicules/{id}:
 *   get:
 *     summary: Récupérer un véhicule par ID
 *     tags: [Véhicules]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du véhicule
 *     responses:
 *       200:
 *         description: Détails du véhicule
 */
router.get("/:id", vehiculeController.getById);

/**
 * @swagger
 * /api/vehicules:
 *   post:
 *     summary: Ajouter un nouveau véhicule
 *     tags: [Véhicules]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               marque:
 *                 type: string
 *                 example: Renault
 *               modele:
 *                 type: string
 *                 example: Clio
 *               annee:
 *                 type: integer
 *                 example: 2020
 *               prix:
 *                 type: number
 *                 example: 15000.5
 *     responses:
 *       201:
 *         description: Véhicule créé avec succès
 */
router.post("/", vehiculeController.create);

/**
 * @swagger
 * /api/vehicules/{id}:
 *   put:
 *     summary: Modifier un véhicule
 *     tags: [Véhicules]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du véhicule
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               marque:
 *                 type: string
 *               modele:
 *                 type: string
 *               annee:
 *                 type: integer
 *               prix:
 *                 type: number
 *     responses:
 *       200:
 *         description: Véhicule mis à jour avec succès
 */
router.put("/:id", vehiculeController.update);

/**
 * @swagger
 * /api/vehicules/{id}:
 *   delete:
 *     summary: Supprimer un véhicule
 *     tags: [Véhicules]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du véhicule
 *     responses:
 *       200:
 *         description: Véhicule supprimé avec succès
 */
router.delete("/:id", vehiculeController.deleteVehicule);

module.exports = router;
