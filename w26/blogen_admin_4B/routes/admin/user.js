var express = require("express");
var router = express.Router();

const userController = require("../../controllers/user");

router.get("/", userController.getUsers);

router.get("/edit", userController.getEditUser);

router.post("/add", userController.postAddUser);

router.post("/update", userController.postUpdateUser);

router.get("/delete", userController.getDeleteUser);

module.exports = router;
