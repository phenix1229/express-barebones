const express = require('express');
const router = express.Router();
const users = require('../models/users')
const controller = require('../controllers/userController');

router.get('/', controller.getAllUsers);
router.get('/:id', controller.getUserById);
router.post('/', controller.createUser);

module.exports = router;