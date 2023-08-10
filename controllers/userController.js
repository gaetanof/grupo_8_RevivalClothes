const path = require('path')
const uuid = require('uuid')
const fs = require('fs');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const userModel = require('../models/user');
const { User, Cart } = require('../database/models');

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
            res.send(error)
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
                res.send(error)
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
            res.send(error)
        }
    },
    getUserList: async (req, res) => {
        try {
            const users = await User.findAll({ raw: true })
            res.render('userList', { users: users });
        } catch (error) {
            console.log(error);
            res.send(error)
        }

    },
    putAdmin: async (req, res) => {
        const idUser = req.params.idUser;

        try {
            await User.update({
                type: 'Admin'
            }, {where: {id: idUser}})
            res.redirect('userList')
        } catch (error) {
            console.log(error)
            res.send(error)
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

            const cart = await Cart.findOne({
                where: { id_user: user.id },
                raw: true
            });
            user.idCart = cart.id;

            delete user.password;

            req.session.user = user;
            res.redirect('/')

        } else {
            return res.render('login', { errors: [{ msg: 'Email o contraseña incorrecta', path: 'credenciales' }] });
        }
    },
    createUser: async (req, res) => {
        const users = await User.findAll({ raw: true })
        let errors = validationResult(req)

        if (errors.isEmpty()) {
            if (req.file) {
                const password = bcrypt.hashSync(req.body.password, 12);
                delete req.body.password;

                const idUser = uuid.v4();
                await User.create({
                    id: idUser,
                    ...req.body,
                    password,
                    type: "User",
                    image: req.file.filename,
                    delete: 0
                });

                await Cart.create({
                    id_user: idUser,
                    total: 0
                });

                res.redirect('/');

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
            res.send(error)
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
            where: { id: idUser }
        })

        res.redirect('/user/userlist')
    }
}

module.exports = controllers;