var express = require('express');
var router = express.Router();
var model = require('../models/Survey');

function errMsg(err) {
  return {
    message: err,
    status: 500,
    note: 'User error.'
  };
};

router.get('/', function(req, res, next) {
  model.find(function(err, surveys) {
    if (err) {
      res.json(errMsg(err));
    } else {
      res.json(surveys);
    }
  });
});

router.get('/:id', function(req, res, next) {
  model.findById(req.params.id, function(err, survey) {
    if (err) {
      res.json(errMsg(err));
    } else {
      res.json(survey);
    }
  });
});

router.post('/', function(req, res, next) {
  model.create(req.body, function(err, survey) {
    if (err) {
      res.json(errMsg(err));
    } else {
      res.json(survey);
    }
  });
});

router.put('/:id', function(req, res, next) {
  model.findByIdAndUpdate(req.params.id, req.body, function(err, survey) {
    if (err) {
      res.json(errMsg(err));
    } else {
      res.json(survey);
    }
  });
});

router.patch('/:id', function(req, res, next) {
  model.findByIdAndUpdate(req.params.id, req.body, function(err, survey) {
    if (err) {
      res.json(errMsg(err));
    } else {
      res.json(survey);
    }
  });
});


router.delete('/:id', function(req, res, next) {
  model.findByIdAndRemove(req.params.id, req.body, function(err, survey) {
    if (err) {
      res.json(errMsg(err));
    } else {
      res.json(survey);
    }
  });
});


module.exports = router;
