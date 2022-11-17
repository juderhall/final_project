require('dotenv').config()

const express = require("express")
const cors = require("cors")

const {getProfile, newProfile} = require('./controller.js')
// const Sequelize = require("sequelize")

//Imported while following a MERN guide- cannot uninstall
//const mongoose = require("mongoose")

const app = express()
app.use(cors())
app.use(express.json())
const port = process.env.PORT

app.get('/profile', getProfile)

app.post('/profile', newProfile)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})