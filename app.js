/*jshint esversion: 6 */
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// require('dotenv').config();  For eniviromental variables

// Config
var app = express();

//++ connect to mongodb
mongoose.connect('mongodb://localhost:27017/geckos');
mongoose.Promise = global.Promise; //++

// Models
var Todo=require("./models/todo");
var User=require("./models/user");

// ======================
// middleware
// ======================
app.use(express.static('views/client/public'));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(__dirname+"/public"));
// app.use(methodOverride("_method"));
// app.use(flash());
app.use(bodyParser.json());

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

// app.use(function(req, res, next) {
//     res.locals.currentUser=req.user;
//     res.locals.success=req.flash("success");
//     res.locals.error=req.flash("error");
//     next();
// });

// initialize routes
app.use('/api', require('./routes/apiLists'));

// error handling middleware
app.use(function(err, req, res, next){
  res.status(422).send({error: err.message});
});

// Listen for requests
app.listen(process.env.port || 4000, function(){
  console.log("Application listening for requests");
});


// ejs for testing atm because Fabien is learning with it as the view output
// app.set("view engine", "ejs");

// ROUTES made with ejs in mind
// var Board = require("./models/board");
// var seedDB = require('./seeds');
// seedDB();
//
// app.get("/", function(req, res){
//   res.redirect("/boards");
// });
//
// // INDEX
// app.get("/boards", function(req, res){
//   Board.find({}, function(err, boards){
//     if(err){
//       console.log("Error from Index route!");
//       console.log(err);
//     } else {
//       res.render("index", {boards: boards});
//     }
//   });
// });
//
// // NEW
// app.get("/boards/new", function(req, res){
//   res.render("new");
// });
//
// // CREATE
// app.post("/boards", function(req, res){
//   // Create board
//   Board.create(req.body, function(err, newBoard){
//     if(err){
//       console.log("Error from create route!");
//       console.log(err);
//     } else {
//       // Redirect to the index
//       res.redirect("/boards");
//     }
//   });
// });
//
// // SHOW
// app.get("/boards/:id", function(req, res){
//   Board.findById(req.params.id, function(err, foundBoard){
//     if(err){
//       console.log("Error from show route!");
//       console.log(err);
//     } else {
//       res.render("show", {board: foundBoard})
//     }
//   });
// });
