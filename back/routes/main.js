const express = require('express');
const bodyParser = require('body-parser')
const controller = require('../controllers/main');
const { default: Auth } = require('../middleware/auth');
const router = express();
router.use(bodyParser.json())

router.post('/post', Auth, controller.AddPost)
router.get('/post', Auth, controller.AllPost)
router.get('/post/:id', Auth, controller.OnePost)
router.get('/post/:id/comment', Auth, controller.Commentary)
router.get('/profile', Auth, controller.Profile)
router.delete('/profile', Auth, controller.DeleteProfile)
module.exports = router;