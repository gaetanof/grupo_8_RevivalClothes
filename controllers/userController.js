const path = require('path')
const uuid = require('uuid')
const fs = require('fs');

const controllers = {
    getLogin: (req, res) => {
        res.render('user/login');
    },
    getSigin: (req, res) => {
        res.render('user/signin');
    },
    getUserList: (req, res) => {
        const usersJSON = fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf-8');
        const users = JSON.parse(usersJSON);


        res.render('user/userList', { users });
    },
    createUser: (req, res) => {
        let usersJSON = fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf-8');
        const users = JSON.parse(usersJSON);

        let newUser = {
            fullname: req.body.fullname,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            delete: 0
        };

        // Le damos el ID al producto nuevo
        newUser.id = users[users.length - 1].id + 1;

        // Agregamos el producto nuevo al array original
        users.push(newUser);

        // Convertimos a JSON el array
        usersJSON = JSON.stringify(users);

        // Sobreescribimos el JSON
        fs.writeFileSync(path.join(__dirname, '../data/users.json'), usersJSON);

        res.redirect('/')
    },
    editUser: (req, res) => {
        let idUser = req.params.idUser;

        const usersJSON = fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf-8');
        
        const users = JSON.parse(usersJSON);
        
        let userToEdit = users[idUser - 1];

        res.render('user/userEdit', {userToEdit});
    },
    editedUser: (req, res) => {
        let idUser = Number(req.params.idUser);
        const newData = req.body;

        let usersJSON = fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf-8');
        
        const users = JSON.parse(usersJSON);

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

        res.render('user/userList', {users})
    },
    deleteUser: (req, res) => {
        let idUser = Number(req.params.idUser);

        let usersJSON = fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf-8');
        
        let users = JSON.parse(usersJSON);

        users = users.map(el => {
            if(el.id === idUser) {
                el.delete = 1;
            }
            return el;
        });

        usersJSON = JSON.stringify(users);

        fs.writeFileSync(path.join(__dirname, '../data/users.json'), usersJSON);

        res.render('user/userList', {users})
    }
}

module.exports = controllers;