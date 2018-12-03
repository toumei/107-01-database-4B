var express = require('express');
var router = express.Router();

const productsController = require('../controllers/products_controller');

router.get('/', productsController.list);
router.get('/search', productsController.search);
router.get('/edit', productsController.edit);
router.post('/update', productsController.update);
router.get('/delete', productsController.delete);
router.get('/add', function(req, res, next) {
    res.render('productAdd', { title: 'Add Product', msg: '' });
});
router.post('/add', productsController.add);

module.exports = router;
