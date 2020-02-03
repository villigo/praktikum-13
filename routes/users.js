const router = require('express').Router();
const { createUser, getUsers, getUsersId } = require('../controllers/users');

router.post('/users', createUser);
router.get('/users', getUsers);
router.get('/users/:userId', getUsersId);

module.exports = router;
