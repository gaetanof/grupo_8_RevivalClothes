const express = require('express')
const usercontroller = require('../controllers/userController');
const controllers = require('../controllers/mainController');
const multer = require('multer');

const router = express.Router();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/fotosUsuario');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const cargarImg = multer ({ storage })

// @GET /user/login 
router.get('/user/login', usercontroller.getLogin) 

// @GET /user/signin
router.get('/user/signin', usercontroller.getSigin) 

// @POST /user/signin
router.post('/user/signin', cargarImg.single('userImg'), usercontroller.createUser) 

// @GET /user/:idUser/edit
router.get('/user/:idUser/edit', usercontroller.editUser)

// @PUT /user/:idUser/edit
router.put('/user/:idUser/edit', usercontroller.editedUser)

// @GET /user/userList
router.get('/user/userlist', usercontroller.getUserList) 

// @DELETE /user/:idUser/delete
router.delete('/user/:idUser/delete', usercontroller.deleteUser)

// @GET /user/search
router.get('/user/search', usercontroller.getUserList) 


module.exports = router