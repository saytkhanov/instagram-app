const {Router} = require('express');
const router = Router();
const {addComment, getComments} = require('../controllers/comment.controller')

router.post('/comment/:id', addComment )
router.get('/comment/:id', getComments )


module.exports = router