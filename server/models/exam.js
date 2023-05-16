const mongoose = require('mongoose')

const ExamSchema = mongoose.Schema({
    setName: {
        type: String
    },
    description: {
        type: String
    },
    course: {
        type: String
    },
    class: {
        type: String
    },
    questionSet: {
        type: String,
    },
    questionCount: {
        type: Number
    },
    shuffle: {
        type: Boolean
    },
    startTime: {
        type: String
    },
    endTime: {
        type: String
    },
    examTime: {
        type: String
    },
    examResponse: {
        type: String
    }
})

const Exam = mongoose.model('Exam', ExamSchema)

module.exports = Exam;