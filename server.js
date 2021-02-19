//Dependencies
const express = require('express')
const dotenv = require('dotenv')



// Config
const app = express()
dotenv.config()
const PORT = process.env.PORT


// Listening
app.listen(PORT, ()=>{
    console.log('listening on port: ', PORT)
})