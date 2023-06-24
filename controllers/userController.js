const path = require('path')
const uuid = require('uuid')
const fs = require('fs');
const userModel = require('../models/user');

const controllers = {
    getLogin: (req, res) => {
        res.render('login');
    },
    getSigin: (req, res) => {
        res.render('signin');
    },
    getUserList: (req, res) => {
        const users = userModel.findAll();

        res.render('userList', { users });
    },
    createUser: (req, res) => {
        const users = userModel.findAll();

        if(req.file){
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
            res.render('signin')
        }

    },
    editUser: (req, res) => {
        let idUser = req.params.idUser;

        const usersJSON = fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf-8');
        
        const users = JSON.parse(usersJSON);
        
        // Con el findIndex, buscamos en qué indice del array de productos, está guardado el elemento buscado
        const indice = users.findIndex(el => el.id === idUser);

        let userToEdit = users[indice];

        res.render('userEdit', {userToEdit});
    },
    editedUser: (req, res) => {
        let idUser = req.params.idUser;
        const newData = req.body;

        let users = userModel.findAll()

        // Con el findIndex, buscamos en qué indice del array de productos, está guardado el elemento buscado
        const indice = users.findIndex(el => el.id === idUser);

        // Actualizamos los datos del producto que corresponda, con los datos que nos pasaron por parámetros
        users[indice].nombre = newData.fullname;
        users[indice].mail = newData.email;
        users[indice].username = newData.username;
        users[indice].contrasena = newData.password;
        users[indice].delete = 0;

        // Convertimos nuestro array de JS a un array de JSON
        usersJSON = JSON.stringify(users);

        // Guardamos este nuevo array de JSON en el archivo correspondiente
        fs.writeFileSync(path.join(__dirname, '../data/users.json'), usersJSON);

        res.render('userList', {users})
    },
    deleteUser: (req, res) => {
        let idUser = req.params.idUser;

        let users = userModel.findAll();

        users = users.map(el => {
            if(el.id === idUser) {
                el.delete = 1;
            }
            return el;
        });

        usersJSON = JSON.stringify(users);

        fs.writeFileSync(path.join(__dirname, '../data/users.json'), usersJSON);

        res.render('userList', {users})
    }
}

module.exports = controllers;