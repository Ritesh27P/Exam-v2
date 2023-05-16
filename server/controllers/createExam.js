const Exam = require('../models/exam.js');
const Admin = require('../models/admin.js');
const Student = require('../models/student.js');
const ExamResponse = require('../models/examResponse.js')

const exam = async (req, res) => {
    const {adminId, setName, description, course, className, questionSet, questionCount, shuffle, startTime, endTime, examTime} = req.body;
    if(!adminId) return res.status(405).json({message: "Access denied"})

    if (!setName || !questionSet || !course || !className || !shuffle || !startTime || !endTime || !examTime) return res.status(422).json({message: "Please Fill the non-optional fields!"})

    try {
        const adminUser = await Admin.findById(adminId)
        const newResponse = await new ExamResponse({adminId, setName, class: className, course, questionSet, response: []})
        console.log(newResponse)
        const newExam = await new Exam({setName, description, course, class: className, questionSet, questionCount, shuffle, startTime, endTime, examTime, examResponse: newResponse._id});
        await newResponse.save();
        await newExam.save();

        await adminUser.created_exam.push(newResponse._id)
        await adminUser.save();

        const studentMatch = await Student.updateMany({class: className, course: course}, {$push: {assign_exam: newExam._id}})

        return res.status(200).json({message: newExam})
    } catch (error) {
        return res.status(500).json({message: error})
    }

}

module.exports = exam;