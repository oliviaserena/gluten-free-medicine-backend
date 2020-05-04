const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  firstname: String,
  lastname: String,
  isMedicalProfessional: Boolean,
  bio: String
});

const User = mongoose.model('user', userSchema); 

module.exports = {
  User
};