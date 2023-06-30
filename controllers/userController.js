const path = require('path')
const uuid = require('uuid')
const fs = require('fs');
const { validationResult } = require('express-validator')
const userModel = require('../models/user');

const controllers = {
    getLogin: (req, res) => {
        res.render('login');
    },
    getSigin: (req, res) => {
        res.render('signin');
    },
    getUserDetail: (req, res) => {
        const idUser = req.params.idUser
        const userDetail = userModel.findById(idUser)

        res.render('userDetail', { userDetail })
    },
    getUserList: (req, res) => {
        const users = userModel.findAll();

        res.render('userList', { users });
    },
    createUser: (req, res) => {
        const users = userModel.findAll();
        let errors = validationResult(req)

        if(errors.isEmpty()) {
            if(req.file) {
                let newUser = {
                    id: uuid.v4(),
                    fullname: req.body.fullname,
                    email: req.body.email,
                    username: req.body.username,
                    password: req.body.password,
                    imagen: req.file.filename,
                    delete: 0
                };
        
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
        const userToEdit = userModel.findById(idUser)

        res.render('userEdit', {userToEdit});
    },
    editedUser: (req, res) => {
        let idUser = req.params.idUser;
        const newData = req.body;
        
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