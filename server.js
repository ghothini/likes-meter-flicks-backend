//REST API demo in Node.js
var express = require('express'); // requre the express framework
var app = express();
const routes = require('./Routes/routes.cjs')
const cors = require('cors');
const functions = require('firebase-functions');

const corsOptions = {
  origin: 'https://likes-meter-flicks.web.app',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// Middlwares
app.use(cors(corsOptions))
app.use(express.json())
app.use(routes);

// Create a server to listen at port 8080
var server = app.listen(8081, function () {
  console.log('App running on port localhost/8081');
})

exports.api = functions.https.onRequest(app);