const express = require("express");
const authRoutes = require("./routes/authRoutes");
const storeRoutes = require("./routes/storeRoutes");
const productRoutes = require("./routes/productRouts");

const storeFrontRoutes = require("./routes/storefrontroutes/routes");

const { mainRoutes } = require("../utilities/constant");

const mainRouter = express.Router();

mainRouter.use(mainRoutes.auth, authRoutes);
mainRouter.use(mainRoutes.store, storeRoutes);
mainRouter.use(mainRoutes.product, productRoutes);

//Store Front Routes
mainRouter.use(mainRoutes.store, storeFrontRoutes);

module.exports = mainRouter;
