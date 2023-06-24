const express = require('express')
const usercontroller = require('../controllers/userController');
const controllers = require('../controllers/mainController');


const router = express.Router();


router.get('/user/login', usercontroller.getLogin) 

router.get('/user/signin', usercontroller.getSigin) 

router.post('/user/signin', usercontroller.createUser) 

router.get('/user/:idUser/edit', usercontroller.editUser)

router.put('/user/:idUser/edit', usercontroller.editedUser)

router.get('/user/userlist', usercontroller.getUserList) 

router.delete('/user/:idUser/delete', usercontroller.deleteUser)

router.get('/user/search', usercontroller.getUserList) 


module.exports = router