const express = require('express')
const exam = require('../controllers/createExam');

const router = express.Router();

router.post('/create-exam', exam);

module.exports = router;
