const mongoose = require('mongoose');

const users = mongoose.Schema({

    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    },
    image :{
        
        type:String,
        required :true,
    }
});

module.exports =  mongoose.model("user_colls",users);