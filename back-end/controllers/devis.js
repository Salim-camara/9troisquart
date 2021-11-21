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
exports.allDevis = (req, res) => {

    Devis.findAll()
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(500).json({ message: 'Erreur récupération BDD ' + err }));
}
