const Devis = require('../models/devis');
const express = require('express');


// Middleware POST
exports.newDevis = (req, res) => {

    const devis = new Devis({
        name: req.body.project,
        features: req.body.features.features
    });
    devis.save()
        .then(() => res.status(203).json({ message: "Devis correctement sauvegardé" }) )
        .catch((err) => res.status(500).json({ message: "Erreur sauvegarde Devis " + err}))
}


// Middleware GET
