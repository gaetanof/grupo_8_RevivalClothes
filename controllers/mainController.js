const path = require('path')

const controllers = {
    getIndex: (req, res) => {
        res.render('home');
    }
}

module.exports = controllers;