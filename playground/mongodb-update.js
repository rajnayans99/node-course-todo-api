
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/MyApp',(error,dbObject)=>{
  if(error){
    return console.log('unable to connect');  //using return to prevent rest of fucntion to execute
  }
  console.log('connected to MongoDB');

  var col_obj = dbObject.collection('Todo1');
  var col_obj1 = dbObject.collection('User');

  // col_obj.findOneAndUpdate({
  //   _id:new ObjectID('59eac727b8e4bb4160bdc21d')
  // },{
  //   $set:{
  //     completed : false
  //   }
  // },{
  //   returnOriginal : false
  // }).then((res)=>{
  //   console.log(JSON.stringify(res,undefined,2));
  // },(error)=>{
  //   console.log('unable to update');
  // })

  // col_obj1.findOneAndUpdate({
  //   _id:new ObjectID('59eac223ca3d930538e9442e')
  // },{
  //   $set:{
  //     name:"Raj Narayan Singh"
  //   },
  //   $inc:{
  //     age:7
  //   }
  // },{
  //   returnOriginal:false
  // },function(error,result){
  //   if(error){
  //     return console.log(`Update failed with : ${error}`);
  //   }
  //   console.log(`Update Successfull ->>>>>>>>>>>> \n ${JSON.stringify(result,undefined,2)}`);
  // });

  col_obj1.findOneAndUpdate({
    _id:new ObjectID('59eac223ca3d930538e9442e')
  },{
    $set:{
      name:"Raj Narayan Singh Bais"
    },
    $inc:{
      age:-5
    }
  },{
    returnOriginal:false
  }).then((res)=>{
    console.log(`Update Successfull ->>>>>>>>>>>> \n ${JSON.stringify(res,undefined,2)}`);
  },(error)=>{
    console.log(`Update failed with : ${error}`);
  });


  dbObject.close();
});
