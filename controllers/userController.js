const path = require('path')

const controllers = {
    getLogin: (req, res) => {
        res.render('login');
    },
    getSigin: (req, res) => {
        res.render('signin');
    },
    getUserList: (req, res) => {
        let users = [
            { id: 1, name: 'Juan Román Riquelme' },
            { id: 2, name: 'Martín Palermo' },
            { id: 3, name: 'Carlos Tevez' },
        ];
        
        let usersResults = [];
        for (let i = 0; i < users.length; i++) {
            if (users[i].name.includes(loQueBuscoElUsuario)) {
                usersResults.push(users[i]);
            }
        }

        res.render('userResults', { 'users': users });
    },
    edit: function (req, res) {
        let idUser = req.params.idUser;

        let users = [
            { id: 1, name: 'Juan Román Riquelme' },
            { id: 2, name: 'Martín Palermo' },
            { id: 3, name: 'Carlos Tevez' },
        ];
        let userToEdit = users[idUser];


        res.render("idUser", {userToEdit:userToEdit});
    },

}

module.exports = controllers;