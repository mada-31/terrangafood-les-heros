// === Fonctions d'appel à l'API TerrangaFood ===

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

// --- RESTAURANTS & PLATS ---

export async function getRestaurants() {
  const res = await fetch(`${API_URL}/restaurants`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Impossible de récupérer les restaurants');
  return res.json();
}

export async function getRestaurant(id) {
  const res = await fetch(`${API_URL}/restaurants/${id}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Restaurant non trouvé');
  return res.json();
}

export async function getPlatsByRestaurant(restaurantId) {
  const res = await fetch(`${API_URL}/plats/restaurant/${restaurantId}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Impossible de récupérer les plats');
  return res.json();
}

// --- COMMANDES ---

// Créer une commande
export async function creerCommande(commande) {
  const res = await fetch(`${API_URL}/commandes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(commande),
  });

  if (!res.ok) {
    const erreur = await res.json();
    throw new Error(
      erreur.erreurs?.join(', ') || erreur.message || 'Erreur lors de la commande'
    );
  }
  return res.json();
}

// Récupérer toutes les commandes
export async function getCommandes() {
  const res = await fetch(`${API_URL}/commandes`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Impossible de récupérer les commandes');
  return res.json();
}

<<<<<<< HEAD
// Récupérer une commande par ID
export async function getCommande(id) {
  const res = await fetch(`${API_URL}/commandes/${id}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Commande non trouvée');
  return res.json();
}

// Mettre à jour le statut d’une commande
=======
// === COMMANDES ===

// Créer une commande
export async function creerCommande(commande) {
  const res = await fetch(`${API_URL}/commandes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(commande),
  });

  if (!res.ok) {
    const erreur = await res.json();
    throw new Error(
      erreur.erreurs?.join(', ') ||
      erreur.message ||
      'Erreur lors de la commande'
    );
  }

  return res.json();
}

// Récupérer toutes les commandes
export async function getCommandes() {
  const res = await fetch(`${API_URL}/commandes`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Impossible de récupérer les commandes');
  }
  return res.json();
}

// Récupérer une commande par ID
export async function getCommande(id) {
  const res = await fetch(`${API_URL}/commandes/${id}`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Commande non trouvée');
  }
  return res.json();
}

// Mettre à jour le statut d'une commande
>>>>>>> 39fb601bc3696ba75e75873924e9339d07410ff3
export async function updateStatutCommande(id, statut) {
  const res = await fetch(`${API_URL}/commandes/${id}/statut`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ statut }),
  });
<<<<<<< HEAD

=======
>>>>>>> 39fb601bc3696ba75e75873924e9339d07410ff3
  if (!res.ok) {
    const erreur = await res.json();
    throw new Error(erreur.message || 'Erreur de mise à jour');
  }
  return res.json();
<<<<<<< HEAD
}
=======
}
>>>>>>> 39fb601bc3696ba75e75873924e9339d07410ff3
