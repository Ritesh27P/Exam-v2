const Student = require('../models/student.js')
const Admin = require('../models/admin.js')
const Exam = require('../models/exam.js')

exports.getStudent = async (req, res)=> {
    const {studentId} = req.body;
    if (!studentId) return res.status(422).json({message: "Fill the fields properly"})

    try {
        const student = await Student.findById(studentId);
        if (!student) return res.status(422).json({message: "Student not register with this Id, kindly contact your organization"})

        return res.status(200).json({message: student})
        
    } catch (error) {
        return res.status(500).json({error: error})
    }
}

exports.getAdmin = async (req, res)=> {
    const {adminId} = req.body;
    if (!adminId) return res.status(422).json({message: "Fill the fields properly"})

    try {
        const admin = await Admin.findById(adminId);
        if (!admin) return res.status(422).json({message: "admin not register with this Id, kindly contact your organization"})

        return res.status(200).json({message: admin})
        
    } catch (error) {
        return res.status(500).json({error: error})
    }
}

exports.getAssignExam = async (req, res) => {
    const {studentId} = req.body;
    if (!studentId) return res.status(422).json({message: "Fill the fields properly"})

    try {
        const student = await Student.findById(studentId);
        if (!student) return res.status(422).json({message: "Student not register with this Id, kindly contact your organization"})

        const assign_exam_arr = student.assign_exam;
        if (assign_exam_arr.length === 0) return res.status(200).json({message: []})
        const arr = []
        assign_exam_arr.array.forEach(async element => {
            arr.push(await Exam.findById(element))
        });

        return res.status(200).json({message: arr})

    } catch (error) {
        return res.status(500).json({error: error})
    }
}