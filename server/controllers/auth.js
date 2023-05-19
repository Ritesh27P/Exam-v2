const jwt = require('jsonwebtoken');
const Admin = require('../models/admin.js')
const bcrypt = require('bcrypt');
const Student = require('../models/student.js');

exports.RegisterAdmin = async (req, res)=> {
    const {name, email, password} = req.body;
    
    if(!name || !email || !password) return res.status(422).json({message: "Fill the fields properly!"})

    try {

        const alreadyAdmin = await Admin.findOne({email: email})
        if (alreadyAdmin) return res.status(422).json({message: "Already exist try login"})

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newAdmin = await new Admin(
            {name, email, password: passwordHash, assign_student_list: [], created_exam: [], questionSet: []}
        )

        await newAdmin.save()
        res.status(200).json({message: newAdmin})

    } catch (err) {
        res.status(500).json({message: err})
    }
}

exports.LoginAdmin = async (req, res) => {
    const {email, password} = req.body;
    if (!email || !password) return res.status(422).json({message: "Fill the fields properly"})

    try {

        const admin = await Admin.findOne({email: email})
        if (!admin) return res.status(422).json({message: "Invalid Crudentials"});

        const isMatch = bcrypt.compare(password, admin.password);
        if (!isMatch) return res.status(422).json({message: "Invalid Crudentials"})

        const token = await jwt.sign({_id: admin._id}, process.env.JWT_SECRET)

        res.cookie('webToken', token, {
            httpOnly: true,
        })
        res.cookie('user', admin, {
            httpOnly: true
        })

        res.status(200).json({message: admin, token: token})

    } catch (err) {
        return res.status(500).json({message: err})
    }
}

exports.LoginStudent = async (req, res) => {
    const {student_id, password} = req.body;
    if (!student_id || !password) return res.status(422).json({message: "Fill the fields properly"})

    try {

        const student = await Student.findOne({student_id: student_id})
        if (!student) return res.status(422).json({message: "Invalid Crudentials"});

        const isMatch = bcrypt.compare(password, student.password);
        if (!isMatch) return res.status(422).json({message: "Invalid Crudentials"})

        const token = await jwt.sign({_id: student._id}, process.env.JWT_SECRET)

        res.cookie('webToken', token, {
            httpOnly: true,
        })
        res.cookie('user', student, {
            httpOnly: true
        })

        res.status(200).json({message: student, token: token})

    } catch (err) {
        return res.status(500).json({message: err})
    }
}
