const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
  text: String,
  posted: Date,
  approved: Boolean, 
  author_id: String
});

const Comment = mongoose.model('comment', commentSchema); 

module.exports = {
    Comment
};