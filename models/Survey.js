var mongoose = require('mongoose');


var surveySchema = new mongoose.Schema({
    age: Number,
    gender: String,
    software: String, //string for now
    other: String,
    loveFeats: String,
    wishFeats: String
});

module.exports = mongoose.model('Survey', surveySchema);
