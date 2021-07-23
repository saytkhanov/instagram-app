const {Router} = require('express');
const router = Router();
const {addPost, getOnePost, getAllPost, addLikeInPost, savePost} = require('../controllers/post.controller')

router.get('/post/:id', getOnePost)
router.post('/post/:id', addPost)
router.get('/post', getAllPost)
router.post('/post/:id/like', addLikeInPost)
router.post('/post/:id/save', savePost)


module.exports = router