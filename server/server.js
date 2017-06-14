const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} =  require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} =  require('./models/user');

var app = express();

app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('Started on port 3000');
});

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});





//
// var user = new User({
//  email: 'bhargav@example.com      '
// });
//
// user.save().then((doc) =>  {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save the user', e);
// });
