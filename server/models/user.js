var mongoose = require('mongoose');

var User = mongoose.model('User',{            //model with properties

  name:{
    type:String,
    trim: true,
    maxlength:15,
    required:true
  },
  email:{
    type:String,
    trim: true,
    minlength:5,
    maxlength:40,
    required:true

  },
  age:{
    type:Number,
    default:null
  }
});


module.exports ={
  User
};
