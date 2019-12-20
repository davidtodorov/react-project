const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const carSchema = new Schema({
  manufactuer: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  platteNumber: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  thumbnailImageUrl: String,
  imageUrls: [String],
  startDate: {type: Date, default: null},
  endDate: {type: Date, default: null},
  user: {
    type: ObjectId,
    ref: "User"
  },
  price: { type: Number, required: true, default: 0 },
  available: {
    type: Boolean,
    default: true
  }
});

module.exports = new Model('Car', carSchema);