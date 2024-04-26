//encryption
require('dotenv').config()

//importing dependencies
const express = require('express')
const app = express()
const cors = require('cors')

//setting middleware
// header('Access-Control-Allow-Origin : *')
// header('Access-Control-Allow-Origin : POST, GET, OPTIONS, PUT, DELETE')
// header('Access-Control-Allow-Origin : Content-type, X-Auth-Token, Origin, Authorisation')

app.use(cors({
    origin:["https://recipe-app-2be3.onrender.com"]
}))
app.use(express.json())
app.use(require('./router/auth'))

const PORT = process.env.PORT || 8000

app.listen(PORT,()=>{
    console.log("Server running on port:",PORT)
    console.log("Listening from the server side...")
})

