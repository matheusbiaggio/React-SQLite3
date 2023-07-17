const express = require('express');
const UserController = require('../controllers/UserController');
const verifyData = require('../middleware/verifyData');

const router = express.Router();

router.get('/', UserController.getAllUsers);
router.post('/', verifyData, UserController.createUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;
