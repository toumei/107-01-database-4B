module.exports = {
	product: {
		insert:'INSERT INTO product SET ?',
		update:'UPDATE product SET ? WHERE id = ?',
		delete: 'DELETE FROM product WHERE id = ?',
		fetchById: 'SELECT * FROM product WHERE id = ?',
		fetchAll: 'SELECT * FROM product'
	}
};

