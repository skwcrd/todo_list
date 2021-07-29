import mongoose from 'mongoose';
import TodoModel from '../../models/todo.model.js';

const DB_URL = 'mongodb://127.0.0.1:27017/todo_list?retryWrites=true&gssapiServiceName=mongodb';

export const connection = () => {
    mongoose.connect(DB_URL, {
        ssl: false,
        writeConcern: {
          w: 'majority'
        },
        readPreference: 'primary',
        useUnifiedTopology: true,
        useNewUrlParser: true
      })
      // On successful connection
      .then(() => {
        console.log("Connected to database:", DB_URL);
      })
      // On connection error
      .catch((error) => {
        console.log("Connected to database error:", error);
      });

    mongoose.Promise = global.Promise;
};

export const get = (id, callback) => {
  if ( id ) {
    TodoModel.findById(id, null, null, (err, data) => {
      callback(err, [ data ]);
    });
  } else {
    TodoModel.find(callback);
  }
};

export const insert = (name, details, callback) => {
  var model = new TodoModel({
      name: name,
      details: details
  });

  model.save(callback);
};