const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
    text: String,
    posted: Date,
    approved: Boolean, 
    author_id: String,
  });
  
const medicationSchema = new Schema({
  name: String,
  manufacturer: String, 
  photoUrl: String,
  dosage: String,
  approved: Boolean,
  comments: [commentSchema]
});

const Medication = mongoose.model('medication', medicationSchema); 

module.exports = {
    Medication
};