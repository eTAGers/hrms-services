const { noAuthRequired } = require("../config");

module.exports = {
  isAuthenticated: async (req, res, next) => {
    try {
      if (noAuthRequired.some((route) => req.url.startsWith(route))) {
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
