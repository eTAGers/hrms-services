const { query } = require("../../../helper/executequery");
const { responseHandler } = require("../../../utilities");
const { responseMessages } = require("../../../utilities/messages");
const {
  getTenantIdFromRequest,
  mysqlResponseHandler,
  mysqlSingleResponseHandler,
} = require("../../../utilities/utility");
const { fetchProduct } = require("../../query/product.query");

const fetchProducts = async (req, res) => {
  try {
    const tenantId = getTenantIdFromRequest(req);
    let resp = await query(fetchProduct(tenantId));
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

module.exports = {
  fetchProducts: fetchProducts,
};
