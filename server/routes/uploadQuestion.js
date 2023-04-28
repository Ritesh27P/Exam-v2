const uploadQuestions = require('../controllers/uploadQuestion.js')
const express = require('express')

const router = express.Router()

router.post('/upload-questions', uploadQuestions)

module.exports = router;