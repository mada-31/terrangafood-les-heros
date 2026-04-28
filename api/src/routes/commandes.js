const express = require('express');
const router = express.Router();
const commandeController = require('../controllers/commandeController');

// GET    /api/commandes          — Liste de toutes les commandes
router.get('/', commandeController.getAll);

// GET    /api/commandes/:id      — Détail d'une commande
router.get('/:id', commandeController.getById);

// POST   /api/commandes          — Créer une commande
router.post('/', commandeController.create);

// PUT    /api/commandes/:id      — Modifier une commande
router.put('/:id', commandeController.update);

// DELETE /api/commandes/:id      — Supprimer une commande
router.delete('/:id', commandeController.delete);

module.exports = router;