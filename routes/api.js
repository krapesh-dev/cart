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
  console.log('order route');
  
  user.find({}, function(err, doc) {
    if(err) console.log(err);
    else    console.log("Items: " + doc);
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

// Close mongodb connection on 'Ctrl+C' on terminal
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected on app termination');
    process.exit(0);
  });
});