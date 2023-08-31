const path = require('path');
const fs = require('fs');
const axios = require('axios');

const controllers = {
    getIndex: async (req, res) => {
        let products = await axios.get('http://localhost:5001/api/products/n?count=3');

        const user = req.session.user;
        products = products.data.data
        res.render('home', { products, user });
    },
    getAboutUs: (req, res) => {
        const user = req.session.user;
        res.render('aboutus', { user })
    }
};

module.exports = controllers;
