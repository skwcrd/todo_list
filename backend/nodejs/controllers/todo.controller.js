import { get, insert } from '../services/db/mongo.js';
// import { get, insert } from '../services/db/mysql.js';

export const getTodo = (req, res) => {
    var id = req.params.id ?? req.query.id ?? req.body.id;

    get(id, (err, data) => {
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
};

export const insertTodo = (req, res) => {
    var name = req.body.name;
    var details = req.body.details;

    insert(name, details, (err) => {
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