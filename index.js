const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const session = require('express-session')
const massive = require('massive')
const fs = require('fs')
const readline = require('readline')
const googleAuth = require('google-auth-library')
const axios = require('axios')
require('dotenv').config()
// const google = require('googleapis');
// const OAuth2 = google.auth.OAuth2;
// var plus = google.plus('v1');

const db = require('./db.js')

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use(express.static(__dirname + '/public'))


// var oauth2Client = new OAuth2(
//   process.env.CLIENT_ID,
//   process.env.CLIENT_SECRET,
//   process.env.REDIRECT_URL
// );

// set auth as a global default
// google.options({
//   auth: oauth2Client
// });

// generate a url that asks permissions for Google+ and Google Calendar scopes
// var scopes = [
//   'https://www.googleapis.com/auth/plus.me',
//   'https://www.googleapis.com/auth/calendar'
// ];

// var url = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  // access_type: 'offline',

  // If you only need one scope you can pass it as a string
  // scope: scopes,

  // Optional property that passes state parameters to redirect URI
  // state: { foo: 'bar' }
// });

app.get('/ptcd/cal', (req,res,next) => {
  axios.get(`https://www.googleapis.com/calendar/v3/calendars/${process.env.calendarid}/events?key=${process.env.mykey}`)
  .then((response) => {
    // console.log(response.data);
    res.status(200).json(response.data)
  })
  .catch( error => {
    return console.log(error);
  })
})



const port = 2224

app.listen(port, () => {
  console.log(`slowly listen to ${port}`);
})
