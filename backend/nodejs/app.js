var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require("mongoose");

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const uri = 'mongodb://127.0.0.1:27017/todo_list?retryWrites=true&gssapiServiceName=mongodb';

mongoose.connect(uri, {
  ssl: false,
  writeConcern: {
    w: 'majority'
  },
  readPreference: 'primary',
  useUnifiedTopology: true,
  useNewUrlParser: true
});

mongoose.Promise = global.Promise;

// On connection error
mongoose.connection.on('error', (error) => {
  console.log("Database error: ", error);
});

// On successful connection
mongoose.connection.on('connected', () => {
  console.log("Connected to database: ", uri);
});

app.use('/', indexRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'dev' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;