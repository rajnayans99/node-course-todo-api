// const MongoClient = require('mongodb').MongoClient;
//ES6 deStructuring way
const {MongoClient,ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/MyApp',(error,dbObject)=>{
  if(error){
    return console.log('unable to connect');  //using return to prevent rest of fucntion to execute
  }
  console.log('connected to MongoDB');

  // dbObject.collection('User').insertOne({
  //
  //   name:'Shubham Singh',
  //   age:23,
  //   location:'Pune'
  // },(err,res)=>{
  //   if(err){
  //     return console.log('Unable to write' , + err);
  //   }
  //   console.log(res.ops[0]._id.getTimestamp());
  // });

  dbObject.collection('Todo1').insertOne({
    text:'Eating...',
    completed:false
  },(err,result)=>{
    if(err){
      return console.log('Unable to insert' , err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  });

  dbObject.close();
});
