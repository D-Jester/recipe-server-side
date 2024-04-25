//encryption
require('dotenv').config()

//importing dependencies
const express = require('express')
const app = express()

//setting middleware
app.use(express.json())
app.use(require('./router/auth'))

const PORT = process.env.PORT || 8000

app.listen(PORT,()=>{
    console.log("Server running on port:",PORT)
    console.log("Listening from the server side...")
})

