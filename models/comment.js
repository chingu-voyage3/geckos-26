var mongoose = require('mongoose');

// Create comment schema & model
var commentSchema = new mongoose.Schema({
  text: {
    type: String
  },
  author: {
    type: String
  },
  created_date: {
      type:Date,
      default:Date.now()
  }
});

module.exports = mongoose.model('Comment', commentSchema);
