const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const session = require('express-session')
const massive = require('massive')

const db = require('./db.js')

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use(express.static(__dirname + '/public'))

const port = 1234

app.listen(port, () => {
  console.log(`slowly listen to ${port}`);
})
