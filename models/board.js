var mongoose = require("mongoose");

var BoardSchema = mongoose.Schema({
  title: String,
  background: String,
  image: String
});


module.exports = mongoose.Schema("Board", BoardSchema);
