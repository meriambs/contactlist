const express = require('express')
const ContactRouter = require("./routes/contact")
const app = express()

const port = 5000
const connectddb = require('./config /connectdb')


connectddb()
app.use(express.json())
app.use('/api/user',ContactRouter)



app.listen(port,err=>{
    err?console.log(err):console.log(`you did it ${port}`)
})