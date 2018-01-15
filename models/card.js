var mongoose = require('mongoose');

// Create card schema & model
var cardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title field is required']
  },
  description: {
    type: String
  },
  author: {
    type: String
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

module.exports = mongoose.model("Card", cardSchema);
