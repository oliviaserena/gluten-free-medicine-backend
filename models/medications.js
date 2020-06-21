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
  statusNumber: Number,
  approved: Boolean,
  isSoyFree: Boolean,
  isLactoseFree: Boolean,
  containsPotatoStarch: Boolean,
  containsCornStarch: Boolean,
  comments: [commentSchema],
  fields: {type: [String], text: true}
});

const Comment = mongoose.model('comment', commentSchema); 
const Medication = mongoose.model('medication', medicationSchema); 

module.exports = {
    Medication,
    Comment
};