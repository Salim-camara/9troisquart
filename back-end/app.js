// Importation des indispensables
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const devisRoute = require('./routes/devis');
const Sequelize = require('./models/bdd');

// autorisation de toutes du CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Ajout du bodyParser
app.use(bodyParser.json());

// Ajout des différentes routes
app.use('', devisRoute);

// sequelize
Sequelize.sync({ alter: true });


// Exportation de app
module.exports = app;