var express = require("express");
var router = express.Router();

const categoryController = require("../controllers/category");

router.get("/", categoryController.getCategories);

router.get("/edit", categoryController.getEditCategory);

router.post("/add", categoryController.postAddCategory);

router.post("/update", categoryController.postUpdateCategory);

router.get("/delete", categoryController.getDeleteCategory);

module.exports = router;
