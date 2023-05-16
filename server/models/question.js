const mongoose = require('mongoose')

const QuestionSchema = mongoose.Schema({
    setName: {
        type: String
    },
    description: {
        type: String
    },
    questionSet: {
        type: Array,
    }

})

const Question = mongoose.model('Question', QuestionSchema)

module.exports = Question;