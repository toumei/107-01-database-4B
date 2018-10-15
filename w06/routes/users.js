var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');

  res.json([{
  	id: 1,
  	username: "陳思瑜"
  }, {
  	id: 2,
  	username: "郭英杰"
  }, {
  	id: 3,
  	username: "黃品維"
  }]);
});

module.exports = router;
