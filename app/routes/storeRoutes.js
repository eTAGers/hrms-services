const express = require("express");
const { createStore } = require("../controller/store.controller");
const { subRoutes } = require("../../utilities/constant");

const router = express.Router();

router.post(subRoutes.add, createStore);

module.exports = router;
