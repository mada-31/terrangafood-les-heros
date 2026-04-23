# Rapport de tests -- Lab 1

## Equipe : Les Heros
## Testeur : Gourbalissakh (QA)

| # | Test | Resultat | Notes |
| --- | --- | --- | --- |
| 1 | POST commande valide | Non execute | Endpoint implemente, verification manuelle a faire avec MongoDB configuree |
| 2 | POST commande sans client | Non execute | La validation Mongoose est en place dans `Commande.js` et `commandeController.js` |
| 3 | GET toutes les commandes | Non execute | Route `GET /api/commandes` ajoutee |
| 4 | GET commande par ID | Non execute | Route `GET /api/commandes/:id` ajoutee |
| 5 | GET commande ID inexistant | Non execute | Reponse 404 prevue |
| 6 | PATCH en attente -> confirmee | Non execute | Transition autorisee prevue |
| 7 | PATCH confirmee -> en livraison | Non execute | Transition autorisee prevue |
| 8 | PATCH en livraison -> livree | Non execute | Transition autorisee prevue |
| 9 | PATCH transition interdite | Non execute | Reponse 400 detaillee prevue |
| 10 | PATCH commande livree | Non execute | Changement bloque apres livraison |
| 11 | DELETE commande | Non execute | Route `DELETE /api/commandes/:id` ajoutee |
| 12 | Populate restaurant visible | Non execute | `populate('restaurant', 'nom adresse')` en place |
| 13 | Populate plats visible | Non execute | `populate('plats', 'nom prix')` / `categorie` en place |
