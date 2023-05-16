const express = require('express')
const {examResponse, getExamResponse} = require('../controllers/examResponse.js')

const router = express.Router();

router.post('/exam-response', examResponse);
router.post('/get-exam-response', getExamResponse);

module.exports = router;