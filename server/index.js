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

mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(app.listen(PORT, ()=> {console.log('The server is running on localhost:' + PORT)}))
    .catch(err => console.log(err))
