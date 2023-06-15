const express = require('express')
const usercontroller = require('../controllers/userController')



const router = express.Router();

router.get('/user/login', usercontroller.getLogin) // Se evita poner products
router.get('/signin', usercontroller.getSigin) // Se evita poner products
router.get('/userResults', usercontroller.getUserList) // Se evita poner products
router.get('/search', usercontroller.getUserList) // Se evita poner products
router.get('/edit:idUser', usercontroller.edit)

module.exports = router