var express = require('express');
var router = express.Router();

// show all products item
router.get('/', function(req, res, next) {

    var db = req.con;
    var data = '';

    db.query('SELECT * from product', function(err, rows) {
        if (err) {
            console.log(err);
        }
        data = rows;
        console.log(data);
        console.log(JSON.stringify(data));
        //res.json(data);
        //res.send(JSON.stringify(data));
        res.render('products', { title: 'Product List', data: data });
    });
});

// render product.Edit.ejs for prodcut edit 
router.get('/edit', function(req, res, next) {

    var id = req.query.id;
    console.log(id);

    var db = req.con;
    var data = "";

    db.query('SELECT * FROM product WHERE id = ?', id, function(err, rows) {
        if (err) {
            console.log(err);
        }

        var data = rows;
        console.log(JSON.stringify(data));
        res.render('productEdit', { title: 'Product Edit', data: data });
    });
});

// product edit to database from form of productEdit.ejs
router.post('/update', function(req, res, next) {

    var db = req.con;

    var id = req.body.id;

    var sql = {
        id: req.body.id,
        name: req.body.name,
        price: req.body.price
    };

    var qur = db.query('UPDATE product SET ? WHERE id = ?', [sql, id], function(err, rows) {
        if (err) {
            console.log(err);
        }

        res.setHeader('Content-Type', 'application/json');
        res.redirect('/products');
    });

});

// product delete for some id
router.get('/delete', function(req, res, next) {

    var id = req.query.id;
    console.log(id);
    var db = req.con;

    var qur = db.query('DELETE FROM product WHERE id = ?', id, function(err, rows) {
        if (err) {
            console.log(err);
        }
        res.redirect('/products');
    });
});

// render productAdd.ejs for product add
router.get('/add', function(req, res, next) {

    // use userAdd.ejs
    res.render('productAdd', { title: 'Add Product', msg: '' });
});

// product add to database from productAdd.ejs
router.post('/add', function(req, res, next) {

    var db = req.con;

    var sql = {
        name: req.body.name,
        price: req.body.price
    };

    //console.log(sql);
    var qur = db.query('INSERT INTO product SET ?', sql, function(err, rows) {
        if (err) {
            console.log(err);
        }
        res.setHeader('Content-Type', 'application/json');
        res.redirect('/products');
    });
});

module.exports = router;