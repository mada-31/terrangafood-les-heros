const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  adresse: { type: String, required: true },
  specialite: { type: String },
  note: { type: Number, default: 0 },
  image: { type: String },
  telephone: { type: String }
}, { timestamps: true });

// ✅ On exporte uniquement le modèle
module.exports = mongoose.model('Restaurant', restaurantSchema);