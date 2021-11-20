const Devis = require('../models/devis');
const express = require('express');


// Middleware POST
exports.newDevis = (req, res) => {

    const devis = new Devis({
        name: "hello",
        features: "salut"
    });
    devis.save()
        .then(() => res.status(200).json({ message: "hello" }) )
        .catch((err) => res.status(500).json({ message: "err " + err}))
}