const mongoose = require('mongoose')

const StudentSchema = mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    class: {
        required: true,
        type: String
    },
    course: {
        required: true,
        type: String
    },
    roll_number: {
        required: true,
        type: String
    },
    assign_exam: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
})

const Student = mongoose.model('Student', StudentSchema)

module.exports = Student;
