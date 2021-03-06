require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} =  require('mongodb');
const _ = require('lodash');

var {mongoose} =  require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} =  require('./models/user');



var app = express();

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());

app.listen(app.get('port'), () => {
  console.log(`listening to port : ${app.get('port')}`);
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


app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});



app.get('/todos/:id', (req, res) => {
  var id = req.params.id
  if (!ObjectID.isValid(id)){
    return res.status(404).send();
  }
  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});



app.delete('/todos/:id', (req, res) => {
    var id = req.params.id
    if (!ObjectID.isValid(id)){
      return res.status(404).send();
    }
    Todo.findByIdAndRemove(id).then((todo) => {
      if (!todo) {
        return res.status(404).send();
      }
      res.send({todo});
    }).catch((e) => {
      return res.status(400).send();
    });
});


app.patch('/todos/:id', (req, res) => {
  var id  = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);
  if (!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }
   Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
     if (!todo) {
       return res.status(404).send();
     }
     res.send({todo});
   }).catch((e) => {
      res.status(400).send();
   });


});


module.exports = {app};



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
