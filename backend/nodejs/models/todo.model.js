import mongoose from "mongoose";

const schema = mongoose.Schema({
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

export default mongoose.model('todo', schema, 'todos');