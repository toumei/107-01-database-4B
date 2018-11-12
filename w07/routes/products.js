var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var db = req.con;
    var data = "";
    db.query('SELECT * from product', function(err, rows){
        if(err) {
            console.log(err);
        }
        data = rows;
        //res.json(data);
        //res.send(JSON.stringify(data));
        res.render('products', { title : 'Products List', data : data});
    });
});

// add product
router.get('/add', function(req, res, next) {
    res.render('productAdd', { title : 'Product Add', msg : ""});
});
router.post('/add', function(req, res, next) {
    var db = req.con;
    var sql = {
        id: req.body.id,
        name: req.body.name,
        price: req.body.price
    };

    db.query('INSERT INTO product SET ?', sql, function(err, rows){
        if(err) {
            console.log(err);
        }
        res.redirect('/products');
    });
});

// edit product
router.get('/edit', function(req, res, next) {
    var db = req.con;
    var data="";
    var id = req.query.id;
    db.query('SELECT * from product where id=?', id, function(err, rows){
        if(err) {
            console.log(err);
        }
        data = rows;
        res.render('productEdit', { title : 'Product Edit', data : data});
    });
});
router.post('/edit', function(req, res, next) {
    var db = req.con;
    var id = req.body.id;
    var sql = {
        id: req.body.id,
        name: req.body.name,
        price: req.body.price
    };

    db.query('UPDATE product SET ? where id=?', [sql, id], function(err, rows){
        if(err) {
            console.log(err);
        }
        res.redirect('/products');
    });
});

// delete product
router.get('/delete', function(req, res, next) {
    var db = req.con;
    var id = req.query.id;
    db.query('DELETE from product where id=?', id, function(err, rows){
        if(err) {
            console.log(err);
        }
        res.redirect('/products');
    });
});

module.exports = router;
