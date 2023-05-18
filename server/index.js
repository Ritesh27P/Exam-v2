const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const dotenv = require('dotenv')

const PORT = process.env.PORT || 5000

// configure
const app = express();
app.use(express.json())
dotenv.config()

// routes
app.use(require('./routes/auth.js'))
app.use(require('./routes/addStudent.js'))
app.use(require('./routes/uploadQuestion.js'))
app.use(require('./routes/createExam.js'))
app.use(require('./routes/examResponse.js'))

app.get('/', (req, res)=> {
    res.send('hello from exam backend');
})

//mongoose setup
mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(app.listen(PORT, ()=> {console.log('The server is running on localhost:' + PORT)}))
    .catch(err => console.log(err))
