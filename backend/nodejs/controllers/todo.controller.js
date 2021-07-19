var TodoModel = require('../models/todo.model');

exports.get = function(req, res) {
    var id = req.params.id ?? req.query.id ?? req.body.id;

    if ( id != null ) {
        TodoModel.findById(id, function(err, data) {
            if ( err ) {
                res.status(400).json({
                    status: "error",
                    message: err
                });
            } else {
                res.status(200).json({
                    status: "success",
                    message: "get data success",
                    data: data
                });
            }
        });
    } else {
        TodoModel.find(function(err, data) {
            if ( err ) {
                res.status(400).json({
                    status: "error",
                    message: err
                });
            } else {
                res.status(200).json({
                    status: "success",
                    message: "get data success",
                    length: data.length,
                    data: data
                });
            }
        });
    }
};

exports.insert = function(req, res) {
    var name = req.body.name;
    var details = req.body.details;

    var model = new TodoModel({
        name: name,
        details: details
    });

    model.save(function (err) {
        if (err) {
            res.status(400).json({
                status: "error",
                error: err
            });
        } else {
            res.status(200).json({
                status: "success",
                message: "add data success",
                data: model
            });
        }
    });
};