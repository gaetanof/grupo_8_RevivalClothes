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

        
        let usersResults = [];
        for (let i = 0; i < users.length; i++) {
            if (users[i].name.includes(loQueBuscoElUsuario)) {
                usersResults.push(users[i]);
            }
        }

        res.render('userResults', { 'users': users });
    },

}

module.exports = controllers;