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

        let searched = users.find(user => user.id === id);

        if (!searched) {
            searched = null;
        }

        return searched;
    },
    // Eliminar un producto
    deleteById: function (id) {
        let users = this.findAll();

        users = users.filter(user => user.id !== id);

        const usersJSON = JSON.stringify(users);

        fs.writeFileSync(path.join(__dirname, this.route), usersJSON);

        return users;
    },
}

module.exports = model;