const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server.js');
const {Todo} = require('./../models/todo');

beforeEach((done) =>{
  Todo.remove({}).then(()=> done());
});


describe('POST /todo', ()=>{
  it('should create a new todo', (done) => {
  var text: 'my name is raj';

  request(app)
    .post('/todo')
    .send({text})
    .expect((res)=>{
      expect(res.body.text).toBe(text);
    }).end((err,res)=>{
      if(err){
        return done(err);
      }

      Todo.find().then((todos)=>{
        expect(todos.lenght).toBe(1);
        expect(todos[0].text).toBe(text);
        done();

      }).catch((e) => done(e));
    });
  });
});
