const express = require('express')
const router = express.Router();
const userController = require('../controllers/user.controller')

router.post('/addUser',userController.add_user);
router.get('/getAllUser',userController.findAll);

module.exports = router;