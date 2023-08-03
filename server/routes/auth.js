const router = require('express').Router();
const handle = require('../handler');

router.post('/register',handle.register);
router.post('/login',handle.login);

module.exports = router;