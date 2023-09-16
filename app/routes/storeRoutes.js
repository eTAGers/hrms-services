const express = require("express");
const { createStore, storePresent } = require("../controller/store.controller");
const { subRoutes } = require("../../utilities/constant");

const router = express.Router();

router.post(subRoutes.add, createStore);
router.post(subRoutes.isStore, storePresent);

module.exports = router;
