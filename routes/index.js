var express = require('express');
var router = express.Router();

indexData = {
  title: 'Software Choice',
  desc: 'Some survey questions figuring out what you like to use!'
}

//landing page
router.get('/', function(req, res, next) {
  res.render('index', indexData);
});

module.exports = router;
