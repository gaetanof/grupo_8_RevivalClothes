const path = require('path')

const controllers = {
    getIndex: (req, res) => {
        res.sendFile(path.join(__dirname,'../views/home.html'));
    }
}

module.exports = controllers;