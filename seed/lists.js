var mongoose = require("mongoose");
var List = require("../models/list");
var Card = require("../models/card");
var Comment = require("../models/comment");

var data = [
  {
    title: 'item 1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta enim sit amet pharetra euismod. Quisque mattis leo condimentum semper feugiat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas rutrum erat vulputate neque mattis vulputate. Integer non elit vitae nibh tincidunt pretium. Sed dignissim gravida ullamcorper. Mauris sagittis justo a nibh rhoncus, vitae viverra dolor luctus.',
  },
  {
    title: 'item 2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta enim sit amet pharetra euismod. Quisque mattis leo condimentum semper feugiat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas rutrum erat vulputate neque mattis vulputate. Integer non elit vitae nibh tincidunt pretium. Sed dignissim gravida ullamcorper. Mauris sagittis justo a nibh rhoncus, vitae viverra dolor luctus.',
  },
  {
    title: 'item 3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta enim sit amet pharetra euismod. Quisque mattis leo condimentum semper feugiat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas rutrum erat vulputate neque mattis vulputate. Integer non elit vitae nibh tincidunt pretium. Sed dignissim gravida ullamcorper. Mauris sagittis justo a nibh rhoncus, vitae viverra dolor luctus.',
  },
];

function seedDB(){

  Card.remove({}, function(err){
    if(err){
      console.log(err);
    }
    console.log("Cards removed");
  });

  Comment.remove({}, function(err){
    if(err){
      console.log(err);
    }
    console.log("Comments removed");
  });

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
            // Add a card in the card
            for (var i = 0; i < 2; i++) {
              Card.create(
                {
                    title: "This is a great note",
                    description: "This is truly a great description of this great note",
                    author: "Fabien"
                }, function(err, card){
                  if(err){
                    console.log(err);
                  } else {
                    // Add a comment in the list
                    Comment.create(
                      {
                        text: "This is a great comment",
                        author: "ThisIsMe"
                      },
                      function(err, comment){
                        if(err){
                          console.log(err);
                        } else {
                          // Add a comment in the card
                          card.comments.push(comment);
                          card.save()
                        }
                      }
                    )

                    list.cards.push(card);
                    list.save();
                    console.log("Created a new card");
                  }
                }
              );
            }
            Card.create(
              {
                  title: "Another Card",
                  description: "This is a great note",
                  author: "Archit"
              }, function(err, card){
                if(err){
                  console.log(err);
                } else {
                  // Add a comment in the list
                  Comment.create(
                    {
                      text: "This is a comment",
                      author: "Anonymous"
                    },
                    function(err, comment){
                      if(err){
                        console.log(err);
                      } else {
                        // Add a comment in the card
                        card.comments.push(comment);
                        card.save()
                      }
                    }
                  )

                  list.cards.push(card);
                  list.save();
                  console.log("Created a new card");
                }
              }
            );
          }
        });
      });
    }
  });

}

module.exports = seedDB;
