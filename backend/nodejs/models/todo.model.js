var mongoose = require('mongoose');

var schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    details: {
      type: String,
      required: true
    },
    isDone: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
    versionKey: false
  });

module.exports = mongoose.model('todo', schema, 'todos');