const { body } = require("express-validator");

const validations = {
    validateCreateProduct:[
    body('title').notEmpty().withMessage('Campo de titulo obligatorio'),
    body('genre').notEmpty().withMessage('Campo de genero obligatorio'),
    body('size').notEmpty().withMessage('Campo de talle obligatorio'),
    body('price').notEmpty().withMessage('Campo de precio obligatorio'),
    body('description').isLength({max:200}).withMessage('Campo de descripcion obligatorio'),
]
}
module.exports = validations