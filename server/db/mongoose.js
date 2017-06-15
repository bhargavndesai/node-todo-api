const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// let db = {
//   localhost: 'mongodb://localhost:27017/TodoApp',
//   mlab: 'mongodb://<user>:<pass>@ds149268.mlab.com:49268/todoapp'
// };
// mongoose.connect( db.localhost || db.mlab);
mongoose.connect('mongodb://localhost:27017/TodoApp' || 'mongodb://bhargavndesai:bhargav123@ds127962.mlab.com:27962/mongo-todo' );
module.exports = {mongoose};
