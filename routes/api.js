var mongoose = require('mongoose');

// Connect to mongodb
mongoose.connect('mongodb://localhost/cart');

// Define a schema
var Schema = new mongoose.Schema({
  _id  : String,
  name : String,
  price: Number
});

// Create a model
var user = mongoose.model('items', Schema);

exports.order = function(req, res) {
  user.find({}, function(err, doc) {
    if(err) res.json(err);
    else    console.log(doc);
  });
};

exports.newItem = function(req, res) {
  new user({
    _id  : req.body.id,
    name : req.body.name,
    price: req.body.price
  }).save(function(err, doc) {
    if(err) res.json(err);
    else    res.send('Inserted!');
  });
};