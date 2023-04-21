const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const advertisementSchema = new Schema({
  shortText: {
    type: String,
    default: '',
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  images: {
    type: [String],
    default: [],
  },
  userId: {
    type: ObjectId,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  updatedAt: {
    type: Date,
    required: true,
  },
  tags: [String],
  isDeleted: {
    type: Boolean,
    required: true,
  },
});

const Advertisement = model('Advertisement', advertisementSchema);
module.exports = Advertisement;
