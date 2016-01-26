var mongoose = require('mongoose');
var connectionString = 'mongodb://localhost/survey-challenge';

mongoose.connect(connectionString);

mongoose.connection.on('connected', function() {
  console.log('connection made');
});


mongoose.connection.on('error', function(err) {
  console.log(err);
});

mongoose.connection.on('disconnected', function() {
  console.log('connection overload');
});
