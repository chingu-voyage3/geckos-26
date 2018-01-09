var mongoose = require("mongoose");
var List = require("../models/list");

var data = [
  {
    title: 'item 1'
  },
  {
    title: 'item 1'
  },
  {
    title: 'item 1'
  },
];

function seedDB(){
  // Remove all lists
  List.remove({}, function(err){
    if(err){
      console.log("Error removing lists.");
      console.log(err)
    } else {
      console.log("Removed lists!")
      // Add a few lists
      data.forEach(function(seed){
        List.create(seed, function(err, list){
          if(err){
            console.log("Error while seeding.");
            console.log(err);
          } else {
            console.log("Added list!");
          }
        });
      });
    }
  });
}

module.exports = seedDB;
