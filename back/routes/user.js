const express = require('express');
const bodyParser = require('body-parser')
const controller = require('../controllers/user');
const router = express();
router.use(bodyParser.json())

router.post('/signup', controller.createUser)
router.post('/login', controller.logUser)

module.exports = router;