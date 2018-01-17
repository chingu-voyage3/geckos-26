var express = require('express');
var router = express.Router();
var List = require('../models/list');

// Comment seedDB
var seedDB = require('../seed/lists');
seedDB();


// =====================
//   List - CRUD routes
// =====================

// CREATE list route
router.post("/list", function(req, res, next){
  List.create(req.body).then(function(list){
    res.send(list);
  }).catch(next);
});


// READ list route
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

// UPDATE list route
router.put('/list/:id', function(req, res, next){
  List.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
    List.findOne({_id: req.params.id}).then(function(list){
      res.send(list);
    });
  });
});

// DELETE list route
// Also delete related comments
router.delete('/list/:id', function(req, res, next){
  List.findOne({_id: req.params.id}).then(function(list){
    list.cards.forEach(function(card){
      Card.findByIdAndRemove(card).then(function(){
        List.findByIdAndRemove({_id: req.params.id}).then(function(list){
          res.send(list);
        });
      });
    });
  });
});

module.exports = router;
