const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const session = require('express-session')
const massive = require('massive')
const fs = require('fs')
const readline = require('readline')
const googleAuth = require('google-auth-library')
const axios = require('axios')
const moment = require('moment')
require('dotenv').config()

const db = require('./db.js')

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use(express.static(__dirname + '/public'))

app.get('/ptcd/cal', (req,res,next) => {
  axios.get(`https://www.googleapis.com/calendar/v3/calendars/${process.env.calendarid}/events?key=${process.env.mykey}`)
  .then((response) => {
      let items = response.data.items.map( (val, idx) => {
        if (val.start) {
          val.date = moment(val.start.dateTime).format('dddd, MMMM DD, YYYY')
          // console.log(val.date);
        }
      })
    res.status(200).json(response.data)
  })
  .catch( error => {
    return console.log(error);
  })
})

app.post('/ptcd/', (req,res,next) => {
  console.log(req.body);
})


const port = 2224

app.listen(port, () => {
  console.log(`slowly listen to ${port}`);
})
