var mongoose = require('mongoose');


var surveySchema = new mongoose.Schema({
    name: String,
    gender: String,
    software: String,
    other: String,
    loveFeats: String,
    wishFeats: String
});

module.exports = mongoose.model('Survey', surveySchema);
