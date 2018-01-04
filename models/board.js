var mongoose = require("mongoose");

var boardSchema = new mongoose.Schema({
  title: String,
  background: String,
  image: String
});

module.exports = mongoose.model("Board", boardSchema);
