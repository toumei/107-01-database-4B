var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { id: '404410119', name: '陳思瑜', school: 'Tamkang University' });
});

module.exports = router;