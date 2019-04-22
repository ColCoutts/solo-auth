const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  passwordHash: {
    type: String,
    required: false
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;