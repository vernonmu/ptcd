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
  console.log(req.body.gender);
  let date = Date.now()

  db.createAthlete([
    req.body.athlete_first,
    req.body.athlete_last,
    req.body.dob,
    req.body.gender,
    req.body.school,
    req.body.parent_first,
    req.body.parent_last,
    req.body.street,
    req.body.city,
    req.body.zip,
    req.body.role,
    req.body.telephone,
    req.body.email,
    req.body.emergency_one_first, req.body.emergency_one_last, req.body.emergency_one_relationship,
    req.body.emergency_one_phone,
    req.body.emergency_two_first,
    req.body.emergency_two_last,
    req.body.emergency_two_relationship,
    req.body.emergency_two_phone,
    req.body.medications,
    req.body.emergency_choice,
    date], (err, data) => {
      if (err) {next(err)}
      return res.status(200).json(data)
  })
})

app.post('/ptcd/message', (req,res,next) => {
  console.log(req.body);
  let tempDate = Date.now()
  let date = moment(tempDate).format('dddd, MMMM DD, YYYY h:mm:ss')

  db.createMessage([
    req.body.first_name,
    req.body.last_name,
    req.body.message,
    date
  ], (err, message) => {
    if (err) {next(err)}
    else {return res.status(200).json(message)}
  })
})

const port = 2224

app.listen(port, () => {
  console.log(`slowly listen to ${port}`);
})
