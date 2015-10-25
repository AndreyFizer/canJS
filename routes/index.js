"use strict"

var express = require('express');
var router = express.Router();

module.exports = function (app) {
  var usersRouter;

  app.get('/', function (req, res, next) {
    res.sendfile('index.html');
  });

  //usersRouter = require('./users')(db);
  //app.use('/users', usersRouter);

};