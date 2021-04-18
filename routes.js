const express = require('express');
const router = express.Router();


var perfumeController = require('./perfume-controller');

router.get('/perfumes', perfumeController.getPerfumes);
router.post('/perfumes', perfumeController.createPerfume);


module.exports = router;


