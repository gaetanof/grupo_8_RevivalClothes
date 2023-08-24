const fs = require('fs')

function logDBMiddleware(req, res, next) {
    fs.appendFileSync('logDB.txt', 'se creo un registro al ingresar en la pagina' + req.url + '\n')

    next()
}

module.exports = logDBMiddleware 