const express = require("express");
const authRoutes = require("./routes/authRoutes");
const storeRoutes = require("./routes//storeRoutes");
const { mainRoutes } = require("../utilities/constant");

const mainRouter = express.Router();

mainRouter.use(mainRoutes.auth, authRoutes);
mainRouter.use(mainRoutes.store, storeRoutes);

module.exports = mainRouter;
