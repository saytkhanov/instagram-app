const {Router} = require('express');
const router = Router();

router.use(require('./user.route'))
router.use(require('./post.route'))
router.use(require('./comment.route'))


module.exports = router