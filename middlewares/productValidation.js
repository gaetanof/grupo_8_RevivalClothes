const { body } = require("express-validator");

const validations = {
    validateCreateProduct: [
        body('title').notEmpty().withMessage('Campo de título obligatorio'),
        body('genre').notEmpty().withMessage('Campo de género obligatorio')
            .isIn(['hombre', 'mujer', 'unisex']).withMessage('Género inválido'),
        body('size').notEmpty().withMessage('Campo de talle obligatorio')
            .isIn(['XS', 'S', 'M', 'L', 'XL', 'XXL']).withMessage('Talle inválido'),
        body('price').notEmpty().withMessage('Campo de precio obligatorio')
            .isFloat({ min: 1, max: 1000 }).withMessage('Precio debe estar entre 1 y 1000'),
        body('description').isLength({ max: 200 }).withMessage('Campo de descripción obligatorio'),
    ]
};

module.exports = validations;