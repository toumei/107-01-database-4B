const productsModel = require("../models/products_model");
var path = "database/";
var router = "/products";
var table = "Product";

module.exports = {
  getList: (req, res, next) => {
    var data = {
      colName: [],
      rows: []
    };
    productsModel
      .describe()
      .then(([results]) => {
        results.forEach(res => data.colName.push(res["Field"]));
        return productsModel.fetchAll();
      })
      .then(([results]) => {
        data.rows = results;
        res.json({
          title: table + " List",
          router: router,
          table: table,
          data: data
        });
      })
      .catch(err => console.log(err));
  },

  getSearch: (req, res, next) => {
    var data = {
      colName: [],
      rows: []
    };
    productsModel
      .describe()
      .then(([results]) => {
        results.forEach(res => data.colName.push(res["Field"]));
        return productsModel.fetchById(req.query.id);
      })
      .then(([results]) => {
        data.rows = results;
        res.json({
          title: table + " Search",
          router: router,
          table: table,
          data: data
        });
      })
      .catch(err => console.log(err));
  },

  getEdit: (req, res, next) => {
    var data = {
      colName: [],
      rows: []
    };
    productsModel
      .describe()
      .then(([results]) => {
        results.forEach(res => data.colName.push(res["Field"]));
        return productsModel.fetchById(req.query.id);
      })
      .then(([results]) => {
        data.rows = results;
        res.json({
          title: table + " Edit",
          router: router,
          table: table,
          data: data
        });
      })
      .catch(err => console.log(err));
  },

  postUpdate: (req, res, next) => {
    var sqlData = {
      id: req.body.id,
      name: req.body.name,
      price: req.body.price
    };
    console.log(sqlData);

    productsModel
      .update(sqlData, req.body.id)
      .then(() => {
        console.log("update ok");
      })
      .catch(err => console.log(err));
  },

  getDelete: (req, res, next) => {
    productsModel
      .delete(req.query.id)
      .then(() => {
        console.log("delete ok");
      })
      .catch(err => console.log(err));
  },

  getAdd: (req, res, next) => {
    var data = {
      colName: [],
      rows: []
    };
    productsModel
      .describe()
      .then(([results]) => {
        results.forEach(res => data.colName.push(res["Field"]));
        res.json({
          title: "Add " + table,
          router: router,
          table: table,
          data: data
        });
      })
      .catch(err => console.log(err));
  },

  postAdd: (req, res, next) => {
    var sqlData = {
      name: req.body.name,
      price: req.body.price
    };
    console.log(sqlData);
    productsModel
      .insert(sqlData)
      .then(() => {
        console.log("insert ok");
      })
      .catch(err => console.log(err));
  }
};
