const { User } = require('../database/models');

const middleware = {
    allowUnsignedIn: (req, res, next) => {
        if (!req.session.user) {
            next();
        } else {
            res.redirect('/');
        }
    },

    allowSignedIn: (req, res, next) => {
        if (req.session.user) {
            next();
        } else {
            res.redirect('/user/login');
        }
    },

    allowSignedInId: (req, res, next) => {
        if (req.session.user && req.session.user.id === req.params.idUser) {
            next();
        } else {
            res.render('hacker');
        }
    },

    allowAdmin: (req, res, next) => {
        if (req.session.user && req.session.user.type === 'Admin') {
            next();
        } else {
            res.redirect('/');
        }
    },

    allowCreate: async (req, res, next) => {
        const equal_email = await User.findAll({ where: { email: req.body.email } })
        equal_email.length > 0 ? res.redirect('/user/signin') : next()
    }
}

module.exports = middleware;