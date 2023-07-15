const path = require('path')
const uuid = require('uuid')
const fs = require('fs');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const userModel = require('../models/user');
const { User } = require('../database/models');

const controllers = {
    logOut: (req, res) => {
        res.clearCookie('email');

        delete req.session.user;

        res.redirect('/user/login');
    },
    getLogin: (req, res) => {
        res.render('login');
    },
    getSigin: (req, res) => {
        res.render('signin');
    },
    getChangePassword: async (req, res) => {
        const idUser = req.params.idUser;
        try {
            const user = await User.findByPk(idUser);
            res.render('changePassword', { user });
        } catch (error) {
            console.log(error);
            res.redirect('/')
        }
    },
    changePassword: async (req, res) => {
        const idUser = req.params.idUser;
        const errors = validationResult(req);

        if (errors.isEmpty()) {
            const hashedPw = bcrypt.hashSync(req.body.password, 12);
            try {
                await User.update({
                    password: hashedPw
                }, {
                    where: { id: idUser },
                    raw: true
                });
                res.redirect('/')
            } catch (error) {
                console.log(error);
                res.redirect('/')
            }
        } else {
            res.render('changePassword', {
                errors: errors.array(),
                user: await User.findByPk(idUser)
            })
        }
    },
    getUserDetail: async (req, res) => {
        const idUser = req.params.idUser
        try {
            const user = await User.findByPk(idUser)
            res.render('userDetail', { user })
        } catch (error) {
            console.log(error);
            res.redirect('/')
        }
    },
    getUserList: async (req, res) => {
        try {
            const users = await User.findAll({ raw: true })
            res.render('userList', { users: users });
        } catch (error) {
            console.log(error);
            res.redirect('/')
        }

    },
    processLogin: async (req, res) => {
        const user = await User.findOne({
            where: { email: req.body.email },
            raw: true
        });

        if (!user) {
            return res.render('login', { errors: [{ msg: 'Email o contraseña incorrecta', path: 'credenciales' }] });
        }

        const { password: hashedPw } = user;
        const isCorrect = bcrypt.compareSync(req.body.password, hashedPw);

        if (isCorrect) {
            if (!!req.body.recuerdame) {
                res.cookie('emai', user.email, { maxAge: 1000 * 60 * 60 * 24 * 360 * 9999 })
            }

            delete user.password;

            req.session.user = user;
            res.redirect('/')

        } else {
            return res.render('login', { errors: [{ msg: 'Email o contraseña incorrecta', path: 'credenciales' }] });
        }
    },
    createUser: (req, res) => {
        const users = userModel.findAll();
        let errors = validationResult(req)

        if (errors.isEmpty()) {
            if (req.file) {
                let newUser = {
                    id: uuid.v4(),
                    ...req.body,
                    type: "User",
                    imagen: req.file.filename,
                    delete: 0
                };

                const newPassword = bcrypt.hashSync(newUser.password, 12);
                newUser.password = newPassword;

                // Agregamos el producto nuevo al array original
                users.push(newUser);

                // Convertimos a JSON el array
                usersJSON = JSON.stringify(users);

                // Sobreescribimos el JSON
                fs.writeFileSync(path.join(__dirname, '../data/users.json'), usersJSON);

                res.redirect('/')
            } else {
                res.render('signin', {
                    old: req.body,
                    img: req.file || ''
                });
            }
        } else {
            res.render('signin', {
                errors: errors.array(),
                old: req.body,
                img: req.file || ''
            });
        }



    },
    editUser: async (req, res) => {
        let idUser = req.params.idUser;

        try {
            const user = await User.findByPk(idUser, { raw: true })
            res.render('userEdit', { user });
        } catch (error) {
            console.log(error)
            res.redirect('/')
        }
    },
    editedUser: async (req, res) => {
        let idUser = req.params.idUser;
        const newData = req.body;

        delete newData.old_userImg;
        newData.image = req.file ? req.file.filename : req.body.old_userImg;

        await User.update({
            full_name: newData.full_name,
            email: newData.email,
            user_name: newData.user_name,
            image: newData.image
        }, { where: { id: idUser } })

        res.redirect('detalle')
    },

    deleteUser: async (req, res) => {
        let idUser = req.params.idUser;

        await User.destroy({
            where: {id: idUser}
        })

        res.redirect('/user/userlist')
    }
}

module.exports = controllers;