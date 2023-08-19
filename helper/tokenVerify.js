const { noAuthRequired } = require("../config");
const { responseMessages } = require("../utilities/messages");
const { query } = require("./executequery");
const { jwtDecode } = require("./jwtToken");
const { mysqlSingleResponseHandler } = require("../utilities/utility");

module.exports = {
  isAuthenticated: async (req, res, next) => {
    try {
      if (noAuthRequired.find((x) => x === req.url)) {
        next();
      } else {
        let token =
          req.body.token ||
          req.query.token ||
          req.headers["x-access-token"] ||
          req.headers["authorization"] ||
          req.headers["authtoken"];

        if (typeof token !== "undefined") {
          const bearer = token.split(" ");
          const bearerToken = bearer[1];
          req.user = jwtDecode(bearerToken);
          const previousToken = mysqlSingleResponseHandler(
            await query(
              `select jwt from userDetails where userID = ${req.user.userID}`
            )
          );
          if (previousToken.jwt != bearerToken) {
            responseHandler.errorResponse(
              res,
              "User Login from different browser. Please Login Again",
              "User Login from different browser. Please Login Again"
            );
            return;
          }
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
