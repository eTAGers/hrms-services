const express = require("express");
const { subRoutes } = require("../../utilities/constant");
const {
  fetchProducts,
  createProducts,
  uploadProductImages,
  updateProducts,
} = require("../controller/product.controller");
const uploadFile = require("../middlewares/upload");

const router = express.Router();

router.post(subRoutes.fetch, fetchProducts);
router.post(subRoutes.add, createProducts);
router.post(subRoutes.update, updateProducts);
router.post(subRoutes.upload, uploadFile.single("file"), uploadProductImages);

module.exports = router;
