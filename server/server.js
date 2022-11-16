const express = require("express")
const cors = require("cors")
const Sequelize = require("sequelize")

//Imported while following a MERN guide- cannot uninstall
//const mongoose = require("mongoose")

const app = express()
app.use(cors())
app.use(express.json())

require('dotenv').config()
const port = process.env.PORT
const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnathorized: false
        }
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

const profileRoutes=require('./routers/profile')

app.use('/',profileRoutes)