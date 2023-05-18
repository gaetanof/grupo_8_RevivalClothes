const path = require('path')

const controllers = {
    getIndex: (req, res) => {
        res.sendFile(path.join(__dirname,'../views/main/home.ejs'));
    }
}

module.exports = controllers;