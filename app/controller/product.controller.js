const { query } = require("../../helper/executequery");
const { responseHandler } = require("../../utilities");
const { responseMessages } = require("../../utilities/messages");
const { createProductSchema } = require("../../utilities/schema");
const { mysqlSingleResponseHandler } = require("../../utilities/utility");
const { fetchProductAdmin } = require("../query/product.query");

const fetchProducts = async (req, res) => {
  try {
    const storeId = req.body.storeId;
    let resp = await query(fetchProductAdmin(storeId));
    resp = mysqlSingleResponseHandler(resp);
    const parsedProductJson = JSON.parse(resp.productJson);
    responseHandler.successResponse(
      res,
      parsedProductJson,
      responseMessages.fetchedSuccessfully
    );
  } catch (err) {
    responseHandler.errorResponse(res, err.message, err.message);
  }
};

const createProductHandler = async (req, res) => {
  try {
    await createProductSchema.validateAsync(req.body);
    const { storeId, ...rest } = req.body;
    let productResp = await query(fetchProductAdmin(storeId));
    productResp = mysqlSingleResponseHandler(productResp);
    productJson = JSON.parse(productResp.productJson);
    productJson.push(rest);

    console.log("productResp", productJson);
    responseHandler.successResponse(
      res,
      { resp },
      responseMessages.addedSuccessfully
    );
  } catch (err) {
    if (err.code === "ER_DUP_ENTRY") {
      responseHandler.errorResponse(
        res,
        responseMessages.duplicateEntry,
        responseMessages.storeAlreadyCreated
      );
    } else {
      responseHandler.errorResponse(res, err.message, err.message);
    }
  }
};

module.exports = {
  fetchProducts: fetchProducts,
  createProducts: createProductHandler,
};
