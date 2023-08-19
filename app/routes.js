const router = require("express").Router();
const { login, signUp } = require("./controller/user.controller");

router.post("/login", login);
router.post("/signUp", signUp);

module.exports = router;
