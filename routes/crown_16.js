var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('crown_16', { title: 'Express', name: 'Chen Yin', id: 209410116 });
});

module.exports = router;
