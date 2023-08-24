function recuerdame (req, res, next) {
    if (req.cookies.email) {
        const userModel = require('../models/user');

        const user = userModel.findByEmail(req.cookies.email);

        delete user.password;

        req.session.user = user;
    }
    next();
}

module.exports = recuerdame;