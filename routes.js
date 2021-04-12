const express = require('express');
const router = express.Router();


var perfumeController = require('./perfume-controller');

router.post('/perfumes', perfumeController.createPerfume);

// router.get('/hello', itemCtrl.getWorld);

// router.get('/hello/:foo/:bar', itemCtrl.getWorldParams);

// router.post('/hello', itemCtrl.postWorld);


module.exports = router;


