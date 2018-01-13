var express = require('express');
var router = express.Router();
var List = require('../models/list');

var seedDB = require('../seed/lists');
seedDB();

// get a list of lists from the db
router.get('/list', function(req, res, next){
  List.find({})
    .populate(
      {
        path: "cards",
        populate: {
          path: "comments",
          model: "Comment"
        }
      })
    .then(function(list){
      res.send(list);
    });
});

// create list route
router.post("/list", function(req, res, next){
  console.log('Got a post request!');
  res.send({ text: "Got your request!" });
});

module.exports = router;
