
const Admin = require('../models/admin.js')
const Student = require('../models/student.js')
const bcrypt = require('bcrypt')

const AddStudent = async (req, res)=> {
    const {admin_id, studentList} = req.body;
    if(!admin_id || !studentList) return res.status(422).json({message: 'Fill the fields properly'})

    try {
        const admin = await Admin.findOne({_id: admin_id})
        if (!admin) return res.status(422).json({message: "Access Denied"})

        const salt = await bcrypt.genSalt()
        const student_list = studentList.map(async student=> {
            const passwordHash = await bcrypt.hash(student.student_id, salt);
            const newStudent = await new Student({
                name: student.name,
                class: student.class,
                course: student.course,
                roll_number: student.roll_number,
                assign_exam: [],
                student_id: student.student_id,
                password: passwordHash
            })
            await newStudent.save()
            return await newStudent._id
        })
        for(let student of student_list) {
            await admin.assign_student_list.push(await student)
        }
        await admin.save()
        res.status(200).json({message: admin})

    } catch (error) {
        res.status(500).status({message: error})
    }
}

module.exports = AddStudent