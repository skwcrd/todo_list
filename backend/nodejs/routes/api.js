var createError = require('http-errors');
var express = require('express');
var router = express.Router();

var todoRouter = require('./api/todo');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Backend API' });
});
router.use('/todo', todoRouter);

module.exports = router;