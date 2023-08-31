const express = require('express');
const router = express.Router();
const maincontroller = require('../controllers/mainController');


router.get('/', maincontroller.getIndex);

router.get('/aboutus', maincontroller.getAboutUs);

module.exports = router