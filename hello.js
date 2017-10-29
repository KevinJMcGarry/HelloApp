#!/usr/bin/env node

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Modern software projects start here.');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Modern software projects start here. http://%s:%s', host, port);
});