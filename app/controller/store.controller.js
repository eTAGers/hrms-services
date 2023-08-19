const { responseHandler } = require("../../utilities");
const { responseMessages } = require("../../utilities/messages");
const { createStoreSchema } = require("../../utilities/schema");
const { getTenantIdFromRequest } = require("../../utilities/utility");
const { createStoreSP } = require("../services/store.services");

const createStoreHandler = async (req, res) => {
  try {
    await createStoreSchema.validateAsync(req.body);
    const tenantId = getTenantIdFromRequest(req);
    req.body.userId = tenantId;
    await createStoreSP(req.body);
    responseHandler.successResponse(
      res,
      { tenantId: tenantId },
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
  createStore: createStoreHandler,
};
