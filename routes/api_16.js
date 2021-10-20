var express = require('express');
var router = express.Router();
const apiCrown2Controller_16 = require('../controllers/apiCrown2Controller_16');
// get home page

router.get('/',crown2Controller_16.getCategories);

module.exports = router;