const express = require("express");
const { login, signUp } = require("../controller/user.controller");
const { subRoutes } = require("../../utilities/constant");

const router = express.Router();

router.post(subRoutes.login, login);
router.post(subRoutes.signUp, signUp);

module.exports = router;
