var mongoose=require("mongoose");

// For now lets do without user authentication


var userSchema=new mongoose.Schema({
    username:String,
    password:String
});

var User=mongoose.model("user",userSchema);

module.exports=User;