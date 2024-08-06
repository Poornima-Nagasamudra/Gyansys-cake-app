const express = require('express')
const app = express()
const port = 3555
const cors = require('cors')
const dotenv = require('dotenv')

const configureDB = require('./config/database')
const router= require('./config/routes')

app.use(express.json())
app.use(cors())
app.use(router)

configureDB()
dotenv.config()

app.listen(port, function(){
    console.log('server runs on', port)
})