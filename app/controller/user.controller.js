const { loginSchema, signUpSchema } = require("../../utilities/schema");
const { passwordHash, verifyPassword } = require("../../helper/bcryptPassword");
const { signUpUser } = require("../services/user.services");
const utilityQuery = require("../../utilities/utilityQuery");
const { query } = require("../../helper/executequery");
const { responseHandler } = require("../../utilities");
const { mysqlSingleResponseHandler } = require("../../utilities/utility");
const { responseMessages } = require("../../utilities/messages");

module.exports.login = async (req, res) => {
  try {
    await loginSchema.validateAsync(req.body);
  } catch (err) {
    responseHandler.errorResponse(res, err.message, err.message);
  }
};

module.exports.signUp = async (req, res) => {
  try {
    await signUpSchema.validateAsync(req.body);
    req.body.pass = await passwordHash(req.body.password);
    await signUpUser(req.body);
    const resp = await query(utilityQuery.selectUserDetails, [req.body.email]);
    console.log(mysqlSingleResponseHandler(resp));
    responseHandler.successResponse(
      res,
      mysqlSingleResponseHandler(resp),
      responseMessages.addedSuccessfully
    );
  } catch (err) {
    if (err.code === "ER_DUP_ENTRY") {
      responseHandler.errorResponse(
        res,
        responseMessages.duplicateEntry,
        responseMessages.emailOrMobile
      );
    } else {
      responseHandler.errorResponse(res, err.message, err.message);
    }
  }
};
