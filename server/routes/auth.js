const express = require('express');
const {LoginAdmin, RegisterAdmin} = require('../controllers/auth.js')

const router = express.Router();

router.post('/auth/register/admin', RegisterAdmin)
router.post('/auth/login/admin', LoginAdmin)

module.exports = router;