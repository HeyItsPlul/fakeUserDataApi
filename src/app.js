const cors = require('cors')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()

// MiddleWare
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

//Routes
const userRoute = require('./Routes/user')
app.use('/user', userRoute)

// Connect To DataBase
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Api Online Using Port: ${PORT}`))
mongoose.connect(process.env.DATABASE_VAR, console.log('Connected To MongoDB...'))