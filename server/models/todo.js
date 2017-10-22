var mongoose = require('mongoose');

var  Todo = mongoose.model('Todo',{            //model with properties

  text:{
    type:String,
    required:true,
    trim: true
  },

  completed:{
    type:Boolean,
    default:false
  },

  completedAt:{
    type:Number,
    default:null
  }

});


module.exports ={
  Todo
};

// var newTodo = new Todo({
//   name: '  Raj Singh',
//   email: '  rajnayans99@gmail.com',
//   aget:23
//
// });  //Todo function comes from mongooes.model as constructor function
