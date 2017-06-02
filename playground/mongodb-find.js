//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

// db.collection('Todos').find({
//   _id: new ObjectID('5931c6502999c00c80dcecd9')
// }).toArray().then((docs) => {
//   console.log('Todos');
//   console.log(JSON.stringify(docs,undefined,2));
// }, (err) => {
//   console.log('Unable to fetch tods', err);
// });

db.collection('Users').find({name: 'Bhargav Desai'}).toArray().then((docs) => {
  console.log('Users');
  console.log(JSON.stringify(docs,undefined,2));
}, (err) => {
  console.log('Unable to connect to users', err);
});//   console.log(`Todos count : ${count}`);
// }, (err) => {
//   console.log('Unable to fetch tods', err);
// });

  //db.close();
});
