const express = require('express');
const apiControllers = require('../../controllers/api/userController');

const router = express.Router();

// @GET - /api/users
router.get('/api/users', apiControllers.getAll);

// @GET - /api/:id/users
router.get('/api/:id/users', apiControllers.getById);

// @GET - /api/users/pages
router.get('/api/users/pages', apiControllers.getUsersPages);

module.exports = router;