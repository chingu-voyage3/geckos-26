var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ListSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title field is required']
  },
  cards: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Card"
    }
  ]
});

module.exports = mongoose.model('List', ListSchema);
