/*jshint esversion: 6 */
var express = require('express');

// Not required now

// var passport=require("passport");
// var LocalStrategy=require("passport-local");
// var session=require('express-session');
// var methodOverride=require('method-override');
// var flash=require("connect-flash");


// require('dotenv').config();  For eniviromental variables

// Models
var Todo=require("./models/todo");
var User=require("./models/user");

// Config
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/geckos');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname+"/public"));
// app.use(methodOverride("_method"));
// app.use(flash());

// User Authentication

// app.use(session({
//     resave:false,
//     saveUninitialized:false,
//     secret:"I am awesome like a boss"
// }));


// passport.use(new LocalStrategy(User.authenticate()));
// app.use(passport.initialize());
// app.use(passport.session());
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// ejs for testing atm because Fabien is learning with it as the view output
app.set("view engine", "ejs");

// app.use(function(req, res, next) {
//     res.locals.currentUser=req.user;
//     res.locals.success=req.flash("success");
//     res.locals.error=req.flash("error");
//     next();
// });

// ROUTES
var Board = require("./models/board");
var seedDB = require('./seeds');
seedDB();

app.get("/", function(req, res){
  res.redirect("/boards");
});

// INDEX
app.get("/boards", function(req, res){
  Board.find({}, function(err, boards){
    if(err){
      console.log("Error from Index route!");
      console.log(err);
    } else {
      res.render("index", {boards: boards});
    }
  });
});

// NEW
app.get("/boards/new", function(req, res){
  res.render("new");
});

// CREATE
app.post("/boards", function(req, res){
  // Create board
  Board.create(req.body, function(err, newBoard){
    if(err){
      console.log("Error from create route!");
      console.log(err);
    } else {
      // Redirect to the index
      res.redirect("/boards");
    }
  });
});

// SHOW
app.get("/boards/:id", function(req, res){
  Board.findById(req.params.id, function(err, foundBoard){
    if(err){
      console.log("Error from show route!");
      console.log(err);
    } else {
      res.render("show", {board: foundBoard})
    }
  });
});

// UPDATE


// DELETE

// Listen for requests
app.listen(process.env.port || 4000, function(){
  console.log("Application listening for requests");
});
