const express = require('express')

const maincontroller = require('../controllers/mainController')

const router = express.Router();

router.get('/', maincontroller.getIndex) // Se evita poner products

module.exports = router