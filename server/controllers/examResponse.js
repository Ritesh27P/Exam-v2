const ExamResponse = require('../models/examResponse.js')

exports.examResponse = async (req, res) => {
    const {studentId, studentName, studentMarks, examResponseId} = req.body;
    const studentResponseObj = {studentId, studentName, studentMarks}
    try {
        await ExamResponse.updateOne({_id: examResponseId}, {$push: {response: studentResponseObj}})
        return res.status(200).json({message: "Updated Succesfully"})
    } catch (error) {
        return res.status(500).json({error: error})
    }
}

exports.getExamResponse = async (req, res) => {
    const {adminId, examResponseId} = req.body;
    try {
        const examResponse = await ExamResponse.findById(examResponseId);
        if (examResponse.adminId !== adminId) return res.status(405).json({message: "Access Denied"})

        return res.status(200).json({message: examResponse.response})
        
    } catch (error) {
        return res.status(500).json({error: error})
    }
}