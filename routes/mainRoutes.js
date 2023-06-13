const express = require('express');
const router = express.Router();
const maincontroller = require('../controllers/mainController');

router.get('/', maincontroller.getIndex); // Se evita poner products

module.exports = router