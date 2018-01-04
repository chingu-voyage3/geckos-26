var mongoose = require("mongoose");
var Board = require("./models/board");

var data = [
  {
    title: "Board 1",
    background: "3F51B5"
  },
  {
    title: "Board 2",
    background: "00BCD4"
  },
  {
    title: "Board 3",
    background: "FF5722"
  }
];

function seedDB(){
  // Remove all boards
  Board.remove({}, function(err){
    if(err){
      console.log("Error removing boards.");
      console.log(err)
    } else {
      console.log("Removed boards!")
      // Add a few boards
      data.forEach(function(seed){
        Board.create(seed, function(err, board){
          if(err){
            console.log("Error while seeding.");
            console.log(err);
          } else {
            console.log("Added board!");
          }
        });
      });
    }
  });
}

module.exports = seedDB;
