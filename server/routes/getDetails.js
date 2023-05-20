const express = require('express')
const {getStudent, getAdmin, getAssignExam} = require('../controllers/getDetail.js')
const router = express.Router();

router.post('/get-admin-detail', getAdmin)
router.post('/get-student-detail', getStudent)
router.post('/get-assign-exam', getAssignExam)

module.exports = router;
