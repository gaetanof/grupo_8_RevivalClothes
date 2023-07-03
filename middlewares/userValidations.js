const { body } = require("express-validator");

const validations = {
    validateCreateUser: [
        body('fullname')
        .notEmpty()
        .withMessage('El nombre no debe de estar vacío'),
        body('email')
        .isEmail()
        .withMessage('Ingrese un email válido'),
        body('username')
        .notEmpty()
        .withMessage('El Username no debe de estar vacío'),
        body('password')
        .isLength({min: 8})
        .withMessage('La contraseña debe contener por lo menos 8 digitos')
    ],
    validateLogin: [
        body('email')
        .isEmail()
        .withMessage('Ingrese un email válido'),
    ],
    validateChangePassword: [
        body('password')
        .isLength({min: 8})
        .withMessage('La contraseña debe contener por lo menos 8 digitos')
    ]
}

module.exports = validations;