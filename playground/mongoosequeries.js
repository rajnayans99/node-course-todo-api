
const{ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongooseconfig');
const {Todo} = require('./../server/models/todo.js');

var id = '59eb3b0576fb226314ea5efe';

if(ObjectID.isValid(id)){

  Todo.findById(id).then((data)=>{
    if(!data){
      return console.log('id not found');
    }
    console.log(data);
  });
}else{
  console.log('id not valid');
}



//
// Todo.find({
//   _id: id
// }).then((datas)=>{
//   console.log(JSON.stringify(datas,undefined,2));
// });
//
// Todo.findOne({
//   _id: id
// }).then((data)=>{
//   console.log(JSON.stringify(data,undefined,2));
// });
