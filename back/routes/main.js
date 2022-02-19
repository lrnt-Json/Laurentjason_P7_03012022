const express = require('express');
const bodyParser = require('body-parser')
const controller = require('../controllers/main');
const auth = require('../middleware/auth');
const router = express();
router.use(bodyParser.json())

router.post('/post', auth, controller.AddPost)
router.get('/post', auth, controller.AllPost)
router.get('/post/:id', auth, controller.OnePost)
router.get('/post/:id/comment', auth, controller.Commentary)
router.get('/profile', auth, controller.Profile)
router.delete('/profile', auth, controller.DeleteProfile)
module.exports = router;