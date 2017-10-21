
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/MyApp',(error,dbObject)=>{
  if(error){
    return console.log('unable to connect');  //using return to prevent rest of fucntion to execute
  }
  console.log('connected to MongoDB');

  // dbObject.collection('Todo1').find({
  //   _id:new ObjectID('59eac70ab8e4bb4160bdc216'),
  // }).toArray().then((doc)=>{
  //   console.log(JSON.stringify(doc,undefined,2));
  // },(err)=>{
  //   console.log(err);
  // });

  // dbObject.collection('Todo1').count().then((count)=>{
  //   console.log(`Todos count : ${count}`);
  // },(err)=>{
  //   console.log(err);
  // });

  dbObject.collection('User').find({
    name:"Utsav Singh"
  }).toArray().then((ele)=>{
    console.log(JSON.stringify(ele,undefined,2));
  },(err)=>{
    console.log('unable to find');
  });

  dbObject.close();
});
