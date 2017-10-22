var mongoose = require('mongoose');

mongoose.Promise = global.Promise;   //inbuilt Promise function
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
};
