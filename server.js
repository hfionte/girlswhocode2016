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

app.get("/logo", function (request, response) {
  response.sendFile(__dirname + '/views/logo.html');
});

app.get("/navigation", function (request, response) {
  response.sendFile(__dirname + '/views/navigation.html');
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

app.get("/mountain-zebra", function (request, response) {
  response.sendFile(__dirname + '/views/mountain-zebra.html');  
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

app.get("/african-elephant", function (request, response) {
  response.sendFile(__dirname + '/views/african-elephant.html'); 
});

app.get("/antelope", function (request, response) {
  response.sendFile(__dirname + '/views/antelope.html'); 
});

app.get("/black-faced-lion-tamarin", function (request, response) {
  response.sendFile(__dirname + '/views/black-faced-lion-tamarin.html'); 
});

app.get("/european-bison", function (request, response) {
  response.sendFile(__dirname + '/views/european-bison.html'); 
});

app.get("/kemp-ridley-turtle", function (request, response) {
  response.sendFile(__dirname + '/views/kemp-ridley-turtle.html'); 
});

app.get("/south-china-tiger", function (request, response) {
  response.sendFile(__dirname + '/views/south-china-tiger.html'); 
});

app.get("/sumatran-rhino", function (request, response) {
  response.sendFile(__dirname + '/views/sumatran-rhino.html'); 
});

app.get("/penguingame", function (request, response) {
  response.sendFile(__dirname + '/views/penguingame.html'); 
});

app.get("/churchill-polar-bear", function (request, response) {
  response.sendFile(__dirname + '/views/churchill-polar-bear.html'); 
});

app.get("/dugong", function (request, response) {
  response.sendFile(__dirname + '/views/dugong.html'); 
});

app.get("/margay", function (request, response) {
  response.sendFile(__dirname + '/views/margay.html'); 
});

app.get("/yellow-tailed-wooly-monkey", function (request, response) {
  response.sendFile(__dirname + '/views/yellow-tailed-wooly-monkey.html'); 
});

app.get("/sea-eagle", function (request, response) {
  response.sendFile(__dirname + '/views/sea-eagle.html'); 
});

app.get("/Helpful-Websites", function (request, response) {
  response.sendFile(__dirname + '/views/helpful-websites.html'); 
});

app.get("/addax", function (request, response) {
  response.sendFile(__dirname + '/views/addax.html'); 
});

app.get("/amsterdam-albatross", function (request, response) {
  response.sendFile(__dirname + '/views/amsterdam-albatross.html'); 
});

app.get("/how-to-help", function (request, response) {
  response.sendFile(__dirname + '/views/how-to-help.html');
});

app.get("/external-navigation", function (request, response) {
  response.sendFile(__dirname + '/views/external-navigation.html');
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
