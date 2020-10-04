const express = require ("express");
const router = express.Router();
const listeCtrl = require('../controllers/listeController');


router.post('/',listeCtrl.createListe);
router.get('/',listeCtrl.getAllListes);
router.delete('/:id', listeCtrl.deleteListe)
module.exports = router;