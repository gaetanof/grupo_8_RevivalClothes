const path = require('path')
const uuid = require('uuid')
const fs = require('fs');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const userModel = require('../models/user');

const controllers = {
    logOut: (req, res) => {
        res.clearCookie('email');

        delete req.session.user;

        res.redirect('/user/login');
    },
    getLogin: (req, res) => {
        res.render('login');
    },
    getSigin: (req, res) => {
        res.render('signin');
    },
    getChangePassword: (req, res) => {
        const idUser = req.params.idUser;
        let user = userModel.findById(idUser);

        res.render('changePassword', { user });
    },
    changePassword: (req, res) => {
        const idUser = req.params.idUser;
        let users = userModel.findAll();
        const user = userModel.findById(idUser);
        const errors = validationResult(req);

        if (errors.isEmpty()) {
            const indice = users.findIndex(el => el.id === idUser);
            // Actualizamos los datos del producto que corresponda, con los datos que nos pasaron por parámetros
            users[indice].password = bcrypt.hashSync(req.body.password, 12);
            
            console.log(users[indice]);
             // Convertimos nuestro array de JS a un array de JSON
             usersJSON = JSON.stringify(users);
    
             // Guardamos este nuevo array de JSON en el archivo correspondiente
             fs.writeFileSync(path.join(__dirname, '../data/users.json'), usersJSON);
    
            res.redirect('/');
        } else {
            res.render('changePassword', {
                errors: errors.array(),
                user
			});
        }
    },
    getUserDetail: (req, res) => {
        const idUser = req.params.idUser
        const user = userModel.findById(idUser)

        res.render('userDetail', { user })
    },
    getUserList: (req, res) => {
        const users = userModel.findAll();

        res.render('userList', { users });
    },
    processLogin: (req, res) => {
        const user = userModel.findByEmail(req.body.email);
        const errors = validationResult(req);

        if(!user){
            return res.render('login', {errors: [{msg: 'Email o contraseña incorrecta', path: 'credenciales'}]});
        }

        const {password: hashedPw} = user;
        const isCorrect = bcrypt.compareSync(req.body.password, hashedPw);
        
        if (isCorrect) {
            if (!!req.body.recuerdame) {
                res.cookie('emai', user.email, { maxAge: 1000 * 60 * 60 * 24 * 360 * 9999 })
            }

            delete user.password;
            // delete user.id;

            req.session.user = user;
            res.redirect('/')

        } else {
            return res.render('login', {errors: [{msg: 'Email o contraseña incorrecta', path: 'credenciales'}]});
        }
    },
    createUser: (req, res) => {
        const users = userModel.findAll();
        let errors = validationResult(req)
            
        if(errors.isEmpty()) {
            if(req.file) {
                let newUser = {
                    id: uuid.v4(),
                    ...req.body,
                    type: "User",
                    imagen: req.file.filename,
                    delete: 0
                };

                const newPassword = bcrypt.hashSync(newUser.password, 12);
                newUser.password = newPassword;

                // Agregamos el producto nuevo al array original
                users.push(newUser);
        
                // Convertimos a JSON el array
                usersJSON = JSON.stringify(users);
        
                // Sobreescribimos el JSON
                fs.writeFileSync(path.join(__dirname, '../data/users.json'), usersJSON);
        
                res.redirect('/')
            } else {
                res.render('signin', {
				old: req.body,
                img: req.file || ''
			});
            }
        } else {
            res.render('signin', {
				errors: errors.array(),
				old: req.body,
                img: req.file || ''
			});
        }

        

    },
    editUser: (req, res) => {
        let idUser = req.params.idUser;
        
        // Con el findIndex, buscamos en qué indice del array de productos, está guardado el elemento buscado
        const user = userModel.findById(idUser)

        res.render('userEdit', {user});
    },
    editedUser: (req, res) => {
        let idUser = req.params.idUser;
        const newData = req.body;
        
        const newPassword = bcrypt.hashSync(newData.password, 12);
        newData.password = newPassword;

        delete newData.old_userImg;
        newData.imagen = req.file ? req.file.filename : req.body.old_userImg;

        let users = userModel.editUserById(idUser, newData)

        res.render('userList', {users})
    },
    deleteUser: (req, res) => {
        let idUser = req.params.idUser;

        let users = userModel.deleteById(idUser)
        
        res.render('userList', {users})
    }
}

module.exports = controllers;