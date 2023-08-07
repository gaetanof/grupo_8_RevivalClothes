const express = require('express')
const usercontroller = require('../controllers/userController');
const { User } = require('../database/models');
const multer = require('multer');
const validations = require('../middlewares/userValidations');
const authMiddleware = require('../middlewares/authMiddleware')

const router = express.Router();


const storage = multer.diskStorage({
    destination: async (req, file, cb) => {
        cb(null, './public/images/fotosUsuario');
    },
    filename: async (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });


// @GET /user/login 
router.get('/user/login', authMiddleware.allowUnsignedIn, usercontroller.getLogin)

// @POST /user/login 
router.post('/user/login', validations.validateLogin, usercontroller.processLogin)

// @GET /user/signin
router.get('/user/signin', authMiddleware.allowUnsignedIn, usercontroller.getSigin)

// @POST /user/signin
router.post('/user/signin', [upload.single('userImg'), validations.validateCreateUser, authMiddleware.allowCreate], usercontroller.createUser)

// @GET /user/:idUser/detalle
router.get('/user/:idUser/detalle', usercontroller.getUserDetail)

// @POST /user/:idUser/detalle
router.post('/user/:idUser/detalle', usercontroller.logOut)

// @GET /user/:idUser/edit
router.get('/user/:idUser/edit', usercontroller.editUser)

// @PUT /user/:idUser/edit
router.put('/user/:idUser/edit', upload.single('userImg'), usercontroller.editedUser)

// @GET /user/:idUser/changepassword
router.get('/user/:idUser/changepassword', usercontroller.getChangePassword)

// @PUT /user/:idUser/changepassword
router.put('/user/:idUser/changepassword', validations.validateChangePassword, usercontroller.changePassword)

// @GET /user/userList
router.get('/user/userlist', authMiddleware.allowAdmin, usercontroller.getUserList)

// @GET /user/userList
router.post('/user/:idUser/userlist', authMiddleware.allowAdmin, usercontroller.putAdmin)

// @DELETE /user/:idUser/delete
router.delete('/user/:idUser/delete', usercontroller.deleteUser)

// @GET /user/search
router.get('/user/search', usercontroller.getUserList)


module.exports = router