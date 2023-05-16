const path = require('path')

const controllers = {
    getLogin: (req, res) => {
        res.sendFile(path.join(__dirname,'../views/login.html'));
    },
    getSigin: (req, res) => {
        res.sendFile(path.join(__dirname,'../views/signin.html'));
    }
}

module.exports = controllers;