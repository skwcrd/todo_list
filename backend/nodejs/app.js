import createError from 'http-errors';
import express from 'express';
import cors from 'cors';
import { join, resolve } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import { connection } from './services/db/mongo.js';
// import { connection } from './services/db/mysql.js';

import indexRouter from './routes/index.js';
import apiRouter from './routes/api.js';

const app = express();
const __dirname = resolve();

// view engine setup
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(logger('dev'));
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, 'public')));

connection();

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

export default app;