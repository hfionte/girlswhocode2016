// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
 app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/map", function (request, response) {
  response.sendFile(__dirname + '/views/map.html');
});

app.get("/About-Us", function (request, response) {
  response.sendFile(__dirname + '/views/About-Us.html');
});

app.get("/spider-monkey", function (request, response) {
  response.sendFile(__dirname + '/views/spider-monkey.html');
});

app.get("/template-top", function (request, response) {
  response.sendFile(__dirname + '/views/template-top.html');  
});

app.get("/mexican-wolf", function (request, response) {
  response.sendFile(__dirname + '/views/mexican-wolf.html');  
});

app.get("/bengal-tiger", function (request, response) {
  response.sendFile(__dirname + '/views/bengal-tiger.html');  
});
  
app.get("/snow-leopard", function (request, response) {
  response.sendFile(__dirname + '/views/snow-leopard.html'); 
});

app.get("/asiatic-lion", function (request, response) {
  response.sendFile(__dirname + '/views/asiatic-lion.html'); 
});

app.get("/black-buck", function (request, response) {
  response.sendFile(__dirname + '/views/black-buck.html'); 
});

app.get("/white-orca", function (request, response) {
  response.sendFile(__dirname + '/views/white-orca.html'); 
});

app.get("/red-panda", function (request, response) {
  response.sendFile(__dirname + '/views/red-panda.html'); 
});

app.get("/nerpa-seal", function (request, response) {
  response.sendFile(__dirname + '/views/nerpa-seal.html'); 
});
// app.get("/dreams", function (request, response) {
//   response.send(dreams);
// });

// // could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
// app.post("/dreams", function (request, response) {
//   dreams.push(request.query.dream);
//   response.sendStatus(200);
// });

// // Simple in-memory store for now
// var dreams = [
//   "Find and count some sheep",
//   "Climb a really tall mountain",
//   "Wash the dishes"
// ];

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
