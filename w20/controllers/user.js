const moment = require("moment");

const User = require("../models/user");

/* READ *****************************/

exports.getUsers = (req, res, next) => {
  User.fetchAll()
    .then(([rows]) => {
      res.render("admin/users", {
        data: rows,
        title: "User List"
      });
    })
    .catch(err => console.log(err));
};

exports.getEditUser = (req, res, next) => {
  User.findById(req.query.id)
    .then(([rows]) => {
      res.render("admin/userDetails", {
        data: rows,
        title: "Edit User"
      });
    })
    .catch(err => console.log(err));
};

exports.postAddUser = (req, res, next) => {
  User.add(req, res)
    .then(([rows]) => {
      res.redirect("/dashboard");
    })
    .catch(err => console.log(err));
};

exports.postUpdateUser = (req, res, next) => {
  User.updateById(req, res)
    .then(([rows]) => {
      res.redirect("/dashboard");
    })
    .catch(err => console.log(err));
};

exports.getDeleteUser = (req, res, next) => {
  User.deleteById(req.query.id)
    .then(([rows]) => {
      res.redirect("/user");
    })
    .catch();
};
