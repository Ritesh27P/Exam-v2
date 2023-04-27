const mongoose = require('mongoose')

const AdminSchema = mongoose.Schema({
    name: {
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
    assign_student_list: {
        required: true,
        type: Array
    },
    created_exam: {
        required: true,
        type: Array
    },
})

const Admin = mongoose.model('Admin', AdminSchema)

module.exports = Admin;