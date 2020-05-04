const mongoose = require('mongoose');
const { Schema } = mongoose;

const medicationSchema = new Schema({
  name: String,
  manufacturer: String, 
  photoUrl: String,
  dosage: String,
  approved: Boolean
});

const Medication = mongoose.model('medication', medicationSchema); 

module.exports = {
    Medication
};