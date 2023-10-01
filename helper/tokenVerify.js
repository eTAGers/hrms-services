const { storePresentQuery } = require("../app/query/store.query");
const { noAuthRequired } = require("../config");
const { mysqlSingleResponseHandler } = require("../utilities/utility");
const { query } = require("./executequery");

module.exports = {
  isAuthenticated: async (req, res, next) => {
    try {
      if (noAuthRequired.some((route) => req.url.startsWith(route))) {
        if (req.headers["store"]) {
          let store = req.headers["store"];
          let storeId = await query(storePresentQuery(store));
          req.headers["tenantid"] = mysqlSingleResponseHandler(storeId).storeid;
        }
        next();
      } else {
        let token =
          req.body.token ||
          req.query.token ||
          req.headers["x-access-token"] ||
          req.headers["authorization"] ||
          req.headers["authtoken"];

        if (typeof token !== "undefined") {
          next();
        } else {
          responseHandler.errorResponse(
            res,
            "Unauthorized Request",
            "Unauthorized Request"
          );
        }
      }
    } catch (err) {
      responseHandler.errorResponse(res, err.message, err.message);
    }
  },
};
