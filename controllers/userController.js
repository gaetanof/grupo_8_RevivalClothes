const path = require('path')

const controllers = {
    getLogin: (req, res) => {
        res.render('login');
    },
    getSigin: (req, res) => {
        res.render('signin');
    }
}

module.exports = controllers;