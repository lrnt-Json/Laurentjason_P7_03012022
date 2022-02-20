const express = require('express');
const bodyParser = require('body-parser')
const controller = require('../controllers/main');
const auth = require('../middleware/auth');
const router = express();
router.use(bodyParser.json())

router.post('/post', auth, controller.AddPost)
router.post('/post/addcomment', auth, controller.AddComment)
router.post('/post/comment', auth, controller.OnePost)
router.post('/post/allcomment', auth, controller.AllComment)
router.get('/post', auth, controller.AllPost)
router.get('/profil', auth, controller.Profil)
router.delete('/profil', auth, controller.DeleteProfil)
module.exports = router;