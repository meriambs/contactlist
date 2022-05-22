const express = require('express')

const ContactRouter = require("./routes/contact")

const app = express()

const port = 5000

const connectddb = require('./config /connectdb')

require('dotenv').config()

connectddb()

app.use(express.json())

app.use('/api/user',ContactRouter)



app.listen(process.env.port,err=>{
    err?console.log(err):console.log(`you did it ${process.env.port}`)
})