const userModel = require('../models/user');

const middleware = {
    allowUnsignedIn: (req, res, next) => {
        if(!req.session.user){
            next();
        } else {
            res.redirect('/');
        }
    },

    allowSignedIn: (req, res, next) => {
        if(req.session.user){
            next();
        } else {
            res.redirect('/users/login');
        }
    },

    allowAdmin: (req, res, next) => {
        if(req.session.user && req.session.user.type === 'Admin'){
            next();
        } else {
            res.redirect('/');
        }
    }
}

module.exports = middleware;