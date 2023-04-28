const Admin = require('../models/admin.js');
const Question = require('../models/question.js')

const uploadQuestions = async (req, res)=> {
    const {admin_id, setName, description, questionSet} = req.body;
    if (!admin_id) return res.status(422).json({message: "Access Denied"})
    if (!questionSet) return res.status(422).json({message: 'Upload the file properly'})

    try {
        const admin = await Admin.findOne({_id: admin_id})
        const newQuestionSet = await new Question({setName, description, questionSet})
        await newQuestionSet.save()

        await admin.questionSet.push(newQuestionSet._id);
        await admin.save()

        res.status(200).json({message: admin})
        
    } catch (error) {
        return res.status(500).json({message: error})
        
    }
}

module.exports = uploadQuestions;