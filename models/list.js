var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ListSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title field is required']
  },
});

var List = mongoose.model('list', ListSchema);

module.exports = List;
