var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var{mongoose} = require('./server/db/mongooseconfig.js');
var {Todo} = require('./server/models/todo.js');
var {User} = require('./server/models/user.js');
const _ = require('lodash');


var app = express();
app.use(bodyParser.json());

app.post('/todo', (req,res)=>{
   var todo = new Todo({
     text: req.body.text
   });

   todo.save().then((doc)=>{
     res.send(doc);
   },(e)=>{
     res.status(400).send(e);
   });
});

app.get('/todo', (req,res)=>{

  Todo.find().then((todo)=>{

    res.send({todo}); //sending todo as object not as an array for possible modifications lec(17) min(2.25)

  },(e)=>{
    res.status(400).send(e);
  });

});

app.get('/todo/:id',(req,res)=>{
  var searchid = req.params.id;
  if(ObjectID.isValid(searchid)){
    Todo.findById(searchid).then((data)=>{
      if(!data){
        return res.status(404).send();
      }
      res.send({data});
    }).catch((e)=>{
      res.status(404).send();
    })
  }else{
    res.status(404).send();
  }

});

// app.delete('/todo/:id',(req,res)=>{                            // not working unexpectedly
//   var id = req.params.id;
//   if(ObjectID.isValid(id)){
//     Todo.findByIdAndRemove(id).then((data)=>{
//       if(!data){
//         return res.status(404).send();
//       }
//       res.send({data});
//     }).catch(e)=>{
//       return res.status(404).send();
//     }
//
//   }else{
//     return res.status(404).send();
//   }
//
// });



app.patch('/todo/:id',(req,res)=>{
  var id = req.params.id;
  var body = _.pick(req.body,['text','completed']);
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }
  if(_.isBoolean(body.completed) && body.completed){

      body.completedAt = new Date().getTime();
  }else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id,{$set:body}, {new:true}).then((data)=>{
    if(!data){
      return res.status(404).send();
    }
    res.send({data});
  }).catch((e)=>{
    res.status(404).sent();
  });
});


app.listen(3000, ()=>{
  console.log('started at port 3000');
});


module.exports = {
  app
};
