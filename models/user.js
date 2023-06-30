const fs = require('fs');
const path = require('path');

const model = {
    // Ruta del archivo JSON
    route: '../data/users.json',

    // Traer todos los productos
    findAll: function () {
        const userJSON = fs.readFileSync(path.join(__dirname, this.route), 'utf-8');

        const users = JSON.parse(userJSON);

        return users;
    },
    // Traer un producto según su ID
    findById: function (id) {
        const users = this.findAll();

        // let searched = users.find(user => user.id === id);
        const indice = users.findIndex(el => el.id === id);

        let userToEdit = users[indice];

        if (!userToEdit) {
            userToEdit = null;
        }

        return userToEdit;
    },
    editUserById: function(id, newData) {
        let users = this.findAll()

        const indice = users.findIndex(el => el.id === id);
        

        // Actualizamos los datos del producto que corresponda, con los datos que nos pasaron por parámetros
        users[indice].fullname = newData.fullname;
        users[indice].email = newData.email;
        users[indice].username = newData.username;
        users[indice].password = newData.password;
        users[indice].imagen = newData.imagen ? newData.imagen : users[indice].imagen;
        users[indice].delete = 0;

        // Convertimos nuestro array de JS a un array de JSON
        usersJSON = JSON.stringify(users);

        // Guardamos este nuevo array de JSON en el archivo correspondiente
        fs.writeFileSync(path.join(__dirname, '../data/users.json'), usersJSON);

        return users;
    },
    // Eliminar un producto
    deleteById: function (id) {
        let users = this.findAll();

        users = users.map(el => {
            if(el.id === id) {
                el.delete = 1;
            }
            return el;
        });

        const usersJSON = JSON.stringify(users);

        fs.writeFileSync(path.join(__dirname, this.route), usersJSON);

        return users;
    },
}

module.exports = model;