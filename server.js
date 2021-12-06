require('dotenv').config()

const express = require('express')
const router = require('./router')
// const path = require('path')
const { serverPort } = require('./consts')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
// app.use(express.static(path.join(__dirname, '../frontend/dist')))
app.use('/', router)

app.listen(serverPort, () => {
  console.log(`Server listening on the port::${serverPort}`)
})
