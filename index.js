var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mailService = require('./sendMail.js');

app.use(express.json());
app.use(express.urlencoded());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/send-mail', function (req, res) {
  // save user details to your database.
  const mailResponse = mailService(req.body);
  res.send(mailResponse);
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Mail Server: Listening on port 3000!');
});
