const mongoose = require('mongoose')

const ExamResponseSchema = mongoose.Schema({
    adminId: String,
    setName: String,
    class: String,
    course: String,
    questionSet: String,
    response: Array
})

const ExamResponse = mongoose.model('ExamResponse', ExamResponseSchema)

module.exports = ExamResponse;

// {studentId, studentName, student_marks, examResponseId}