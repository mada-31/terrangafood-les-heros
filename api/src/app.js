const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const helmet = require('helmet');

// 1. Import des routes (Assure-toi que ces fichiers existent dans ./routes/)
const restaurantRoutes = require('./routes/restaurants');
const platRoutes = require('./routes/plats');

// 2. Import du middleware de gestion d'erreurs
const errorHandler = require('./middleware/errorHandler');

// Charger les variables d'environnement
dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 3001;

// --- 3. Middlewares Globaux ---
app.use(helmet()); // Sécurise les headers HTTP
app.use(cors()); // Autorise les requêtes cross-origin
app.use(express.json()); // Parse le JSON dans req.body
app.use(morgan('dev')); // Log les requêtes dans la console

// --- 4. Routes de base ---
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Bienvenue sur l\'API TerrangaFood 🍛',
    version: '1.0.0',
    endpoints: {
      restaurants: '/api/restaurants',
      plats: '/api/plats'
    }
  });
});

// Branchement des routes spécifiques
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/plats', platRoutes);

// --- 5. Gestion des erreurs (Toujours après les routes) ---
app.use(errorHandler);

// --- 6. Connexion MongoDB et Démarrage du serveur ---
mongoose.set('strictQuery', false); // Prépare les futures versions de Mongoose

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ Connexion à MongoDB réussie !');
    app.listen(PORT, () => {
      console.log(`🚀 Serveur opérationnel sur : http://localhost:${PORT}`);
      console.log('Faites chauffer les fourneaux ! 👨‍🍳');
    });
  })
  .catch((err) => {
    console.error('❌ Échec de la connexion à MongoDB :', err.message);
    process.exit(1); // Arrête le processus en cas d'échec critique
  });

// Export pour les tests ou d'autres modules
module.exports = app;