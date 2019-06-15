const mongoose = require('mongoose');
const Schema=mongoose.Schema;

var userSchema = new Schema({
    userName:{
        type:String
    },
    password:{
        type:String
    }
})


const User=mongoose.model('user',userSchema);

module.exports=User;