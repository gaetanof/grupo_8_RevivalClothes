const express = require('express')

const usercontroller = require('../controllers/userController')

const router = express.Router();

router.get('/login', usercontroller.getLogin) // Se evita poner products
router.get('/signin', usercontroller.getSigin) // Se evita poner products

module.exports = router