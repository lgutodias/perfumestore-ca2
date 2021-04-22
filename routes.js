const express = require('express');
const router = express.Router();


var perfumeCtrl = require('./perfume-controller');

router.get('/perfumes', perfumeCtrl.getPerfumes);
router.post('/perfumes', perfumeCtrl.createPerfume);
router.delete('/perfumes', perfumeCtrl.deletePerfume);

module.exports = router;


