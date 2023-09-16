const { query } = require("../../helper/executequery");
const { responseHandler } = require("../../utilities");
const { responseMessages } = require("../../utilities/messages");
const {
  getTenantIdFromRequest,
  mysqlResponseHandler,
} = require("../../utilities/utility");
const { fetchProduct } = require("../query/product.query");

const fetchProducts = async (req, res) => {
  try {
    const tenantId = getTenantIdFromRequest(req);
    let resp = await query(fetchProduct(tenantId));
    resp = mysqlResponseHandler(resp);
    responseHandler.successResponse(
      res,
      resp,
      responseMessages.fetchedSuccessfully
    );
  } catch (err) {
    responseHandler.errorResponse(res, err.message, err.message);
  }
};

module.exports = {
  fetchProducts: fetchProducts,
};
