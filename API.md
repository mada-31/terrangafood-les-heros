# API TerrangaFood -- Documentation

## Base URL

`http://localhost:3001/api`

## Restaurants

| Methode | Endpoint | Description |
| --- | --- | --- |
| GET | `/restaurants` | Lister les restaurants |
| GET | `/restaurants/:id` | Detail d'un restaurant |
| POST | `/restaurants` | Creer un restaurant |
| PUT | `/restaurants/:id` | Modifier un restaurant |
| DELETE | `/restaurants/:id` | Supprimer un restaurant |

## Plats

| Methode | Endpoint | Description |
| --- | --- | --- |
| GET | `/plats` | Lister les plats |
| GET | `/plats/:id` | Detail d'un plat |
| GET | `/plats/restaurant/:restaurantId` | Lister les plats d'un restaurant |
| POST | `/plats` | Creer un plat |
| PUT | `/plats/:id` | Modifier un plat |
| DELETE | `/plats/:id` | Supprimer un plat |

## Commandes

| Methode | Endpoint | Description |
| --- | --- | --- |
| POST | `/commandes` | Creer une commande |
| GET | `/commandes` | Lister les commandes |
| GET | `/commandes/:id` | Detail d'une commande |
| PATCH | `/commandes/:id/statut` | Changer le statut d'une commande |
| DELETE | `/commandes/:id` | Supprimer une commande |

### Exemple de creation de commande

```json
{
  "client": "Moussa Diop",
  "telephone": "+221 77 123 45 67",
  "adresseLivraison": "Cite Keur Gorgui, Villa 12, Dakar",
  "restaurant": "ID_RESTAURANT",
  "plats": ["ID_PLAT_1", "ID_PLAT_2"],
  "montantTotal": 4500,
  "commentaire": "Sans piment svp"
}
```

### Transitions de statut autorisees

- `en attente -> confirmée -> en livraison -> livrée`
- `en attente -> annulée`
- `confirmée -> annulée`

### Codes HTTP

- `200` : succes
- `201` : ressource creee
- `400` : donnees invalides ou transition interdite
- `404` : ressource non trouvee
- `500` : erreur interne du serveur
