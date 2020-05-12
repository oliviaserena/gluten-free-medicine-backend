const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  email:  { type : String , unique : true, required : true, dropDups: true },
  password: String,
  firstname: String,
  lastname: String,
  isMedicalProfessional: Boolean,
  bio: String
});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('user', userSchema); 

module.exports = {
  User
};