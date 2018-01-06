var mongoose=require("mongoose");
var User=require("./user");




var todoSchema=new mongoose.Schema({
    todo:{
        type:String,
        required:"Cannot be blank"
    },
    completed:{
        type:Boolean,
        default:false
    },
    created_date:{
        type:Date,
        default:Date.now()
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User
    }
});

var Todo=mongoose.model("todo",todoSchema);

module.exports=Todo;