const moment = require("moment");

const Category = require("../models/category");

/* READ *****************************/

exports.getCategories = (req, res, next) => {
  Category.fetchAll()
    .then(([rows]) => {
      for (let p of rows) {
        p.date = moment(p.date).format("MMM D, YYYY");
      }
      res.render("categories", {
        data: rows,
        title: "Category List"
      });
    })
    .catch(err => console.log(err));
};

exports.getEditCategory = (req, res, next) => {
  Category.findById(req.query.id)
    .then(([rows]) => {
      for (let p of rows) {
        p.date = moment(p.date).format("YYYY-MM-DD");
        console.log("p.date: ", p.date);
      }
      res.render("categoryDetails", {
        data: rows,
        title: "Edit Category"
      });
    })
    .catch(err => console.log(err));
};

exports.postAddCategory = (req, res, next) => {
  Category.add(req, res)
    .then(([rows]) => {
      res.redirect("/");
    })
    .catch(err => console.log(err));
};

exports.postUpdateCategory = (req, res, next) => {
  Category.updateById(req, res)
    .then(([rows]) => {
      res.redirect("/");
    })
    .catch(err => console.log(err));
};

exports.getDeleteCategory = (req, res, next) => {
  Category.deleteById(req.query.id)
    .then(([rows]) => {
      res.redirect("/category");
    })
    .catch();
};
