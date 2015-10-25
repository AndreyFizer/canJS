var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var port = 3030;

//var routes = require('./routes/index');
//var users = require('./routes/users');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json({strict: false, inflate: false, limit: 1024 * 1024 * 5}));
app.use(bodyParser.urlencoded({extended: false, limit: 1024 * 1024 * 5}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', routes);
//app.use('/users', users);

// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//  var err = new Error('Not Found');
//  err.status = 404;
//  next(err);
//});

require('./routes/index')(app);

app.listen(port, function () {
  console.log('>>>>>    Server start successfully on port [' +port+ ']');
});

//module.exports = app;
