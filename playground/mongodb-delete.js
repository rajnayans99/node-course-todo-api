
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/MyApp',(error,dbObject)=>{
  if(error){
    return console.log('unable to connect');  //using return to prevent rest of fucntion to execute
  }
  console.log('connected to MongoDB');

  // dbObject.collection('Todo1').deleteMany({text:'Eating...'}).then((res)=>{
  //   console.log(JSON.stringify(res,undefined,2));
  // },(error)=>{
  //   console.log('unable to delete');
  // });

    //
    // dbObject.collection('Todo1').deleteOne({text:'Eating...'}).then((res)=>{
    //   console.log(JSON.stringify(res,undefined,2));
    // },(error)=>{
    //   console.log('unable to delete');
    // });

    // dbObject.collection('Todo1').find({
    //   text:'ating...'
    // }).toArray().then((res)=>{
    //   console.log(`found Entry : ${JSON.stringify(res,undefined,2)}`);
    //   dbObject.collection('Todo1').deleteOne({text:'Eating...'}).then((result)=>{
    //     console.log(`Enty deleted : ${JSON.stringify(result,undefined,2)}`);
    //   },(errorMsg)=>{
    //     console.log('Unable to delete entry');
    //   });
    // },(error)=>{
    //   console.log('working ???');
    // });

    dbObject.collection('Todo1').findOneAndDelete({text:'Eating...'}).then((res)=>{
      console.log(`Deleted Element : \n --> ${JSON.stringify(res,undefined,2)}`);
    },function(error){
      console.log('Unable to delete entry');
    });

    
  dbObject.close();
});
