//  Node modules
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

//  Middleware functions
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//  Router for favorites
var favorites = require('./routes/favorites');

//  Set up route
app.use('/favorites', favorites);

//  Handle most requests at index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

//  Listen at port 3000
app.listen(3000);
console.log('Listening on port 3000');
