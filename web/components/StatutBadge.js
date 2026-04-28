// Mapping statut → classe CSS (nettoyé des espaces pour correspondre au CSS standard)
const statutClasses = {
  'en attente': 'statut-en-attente',
  'confirmée': 'statut-confirmee',
  'en livraison': 'statut-en-livraison',
  'livrée': 'statut-livree',
  'annulée': 'statut-annulee',
};

// Mapping statut → emoji (complété avec des emojis suggérés)
const statutEmojis = {
  'en attente': '⏳',
  'confirmée': '✅',
  'en livraison': '🛵',
  'livrée': '🥡',
  'annulée': '❌',
};

export default function StatutBadge({ statut }) {
  // On récupère la classe et l'emoji, sinon on met une valeur vide par défaut
  const classe = statutClasses[statut] || '';
  const emoji = statutEmojis[statut] || '';

  return (
    <span className={`statut-badge ${classe}`}>
      {emoji} {statut}
    </span>
  );
}