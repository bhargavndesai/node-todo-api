//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
//
// db.collection('Todos').findOneAndUpdate({
//  _id: new ObjectID('5931e90aa9fe6fe6249da5fd')
//  }, {
//    $set: {
//      completed: true
//    }
//  }, {
//      returnOriginal: false
//    }).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5931c75feae73016242c1c1b')
}, {
  $set: {
    name: "Natsu"
  },
  $inc: {
    age: 1
  }
},{
  returnOriginal: false
}).then((result) => {
  console.log(result);
});
  //db.close();
});
