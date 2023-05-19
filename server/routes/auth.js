const express = require('express');
const {LoginAdmin, RegisterAdmin, LoginStudent} = require('../controllers/auth.js')

const router = express.Router();

router.post('/auth/register/admin', RegisterAdmin)
router.post('/auth/login/admin', LoginAdmin)
router.post('/auth/login/student', LoginStudent)

module.exports = router;