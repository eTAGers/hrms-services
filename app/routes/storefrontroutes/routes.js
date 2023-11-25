const express = require("express");
const { subRoutes } = require("../../../utilities/constant");
const {
  fetchProducts,
} = require("../../controller/storefrontconrtroller/product.ctrl");

const router = express.Router();

// storefront ftech products
router.get("/product" + subRoutes.fetch, fetchProducts);

module.exports = router;
