const express = require('express');
const router = express.Router();
const devisControl = require('../controllers/devis');


// route création d'un nouveau devis
router.post('/devis', devisControl.newDevis)
// route récupération de tous les devis
router.get('/devis', devisControl.allDevis)

module.exports = router;