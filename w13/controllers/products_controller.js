const productsModel = require('../models/products_model');

module.exports = {
    list: (req, res, next) => {
        productsModel.fetchAll()
        .then( ( [data] ) => {
            res.render('products', { title: 'Product List', data: data });
        })
        .catch( err => console.log(err));
    },
    
    search: (req, res, next) => {
        console.log(req.query.id);
        productsModel.fetchById(req.query.id)
        .then( ( [data] ) => {
            res.render('productsSearch', { title: 'Product Search', data: data });
        })
        .catch( err => console.log(err));
    },

    edit: (req, res, next) => {
        productsModel.fetchById(req.query.id)
        .then( ( [data] ) => {
            res.render('productEdit', { title: 'Product Edit', data: data });
        })
        .catch( err => console.log(err));
    },

    update: (req, res, next) => {
        var sqlData = {
            id: req.body.id,
            name: req.body.name,
            price: req.body.price,
        };
        productsModel.update(sqlData, req.body.id)
        .then( ( [data] ) => {
            res.redirect('/products');
        })
        .catch( err => console.log(err));
    },

    delete: (req, res, next) => {
        productsModel.delete(req.query.id)
        .then( ( [data] ) => {
            res.redirect('/products');
        })
        .catch( err => console.log(err));
    },

    add: (req, res, next) => {
        var sqlData = {
            name: req.body.name,
            price: req.body.price,
        };
        productsModel.insert(sqlData)
        .then( ( [data] ) => {
            res.redirect('/products');
        })
        .catch( err => console.log(err));
    },
};
