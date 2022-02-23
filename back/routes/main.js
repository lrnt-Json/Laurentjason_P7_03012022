const express = require('express');
const bodyParser = require('body-parser')
const controller = require('../controllers/main');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config')

const router = express();

router.use(bodyParser.json())

router.post('/post', auth, multer, controller.AddPost)
router.post('/post/addfeedback', auth, controller.AddFeedback)
router.post('/post/feedback', auth, controller.OnePost)
router.post('/post/allfeedback', auth, controller.AllFeedback)
router.get('/post', auth, controller.AllPost)
router.get('/profil', auth, controller.Profil)
router.get('/profil/admin', auth, controller.IsAdmin)
router.delete('/post', auth, controller.DeletePost)
router.delete('/post/feedback', auth, controller.DeleteFeedback)
router.delete('/profil', auth, controller.DeleteProfil)
module.exports = router;