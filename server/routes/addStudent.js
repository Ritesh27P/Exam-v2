const express = require('express')
const AddStudent = require('../controllers/addStudent.js')
const router = express.Router();

router.post('/add-student', AddStudent);

module.exports = router;
