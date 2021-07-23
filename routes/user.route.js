const {Router} = require('express');
const router = Router();
const {addUser, getUsers}  = require('../controllers/user.controller');

router.post("/", addUser)
router.get('/', getUsers)

module.exports = router