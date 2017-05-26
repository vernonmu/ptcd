const massive = require('massive')
const connectionString = process.env.DBlink;
const massiveInstance = massive.connectSync({connectionString : connectionString})
module.exports = massiveInstance
