var express = require('express');
var router = express.Router();

var controller = require('../../controllers/todo.controller');

// var TodoModel = require('../../models/todo.model');

router
    .route('/')
    .get(controller.get)
    .post(controller.insert);

router
    .route('/:id')
    .get(controller.get)
    .delete(function(req, res) {});

module.exports = router;