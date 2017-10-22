var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var{mongoose} = require('./server/db/mongooseconfig.js');
var {Todo} = require('./server/models/todo.js');
var {User} = require('./server/models/user.js');


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


app.listen(3000, ()=>{
  console.log('started at port 3000');
});


module.exports = {
  app
};
