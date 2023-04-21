const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const messageSchema = new Schema({
  author: {
    type: ObjectId,
    required: true,
  },
  sentAt: {
    type: Date,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  readAt: {
    type: String,
  },
});

const Message = model('Message', messageSchema);

const chatSchema = new Schema({
  users: {
    type: [ObjectId, ObjectId],
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  messages: [{ type: Schema.ObjectId, ref: 'Message' }],
});

const Chat = model('Chat', chatSchema);

module.exports = Chat;
