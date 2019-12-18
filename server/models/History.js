const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const historySchema = new Schema({
  user: {
    type: ObjectId,
    ref: "User"
  },
  car: {
    type: ObjectId,
    ref: "Car"
  }
});

module.exports = new Model('History', historySchema);