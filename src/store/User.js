const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  contactPhone: {
    type: String,
  },
});

userSchema.plugin(passportLocalMongoose);

const User = model('User', userSchema);

module.exports = User;
