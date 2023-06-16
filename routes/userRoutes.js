const express = require('express')
const usercontroller = require('../controllers/userController');
const controllers = require('../controllers/mainController');


const router = express.Router();


router.get('/login', usercontroller.getLogin) 

router.get('/signin', usercontroller.getSigin) 

router.post('/signin', usercontroller.createUser) 

router.get('/:idUser/edit', usercontroller.editUser)

router.put('/:idUser/edit', usercontroller.editedUser)

router.get('/userlist', usercontroller.getUserList) 

router.delete('/:idUser/delete', usercontroller.deleteUser)

router.get('/search', usercontroller.getUserList) 


module.exports = router