const { loginSchema, signUpSchema } = require("../../utilities/schema");
const { passwordHash, verifyPassword } = require("../../helper/bcryptPassword");
const { signUpUserSP } = require("../services/user.services");
const utilityQuery = require("../../utilities/utilityQuery");
const { query } = require("../../helper/executequery");
const { responseHandler } = require("../../utilities");
const { mysqlSingleResponseHandler } = require("../../utilities/utility");
const { responseMessages } = require("../../utilities/messages");
const { loginByEmail, loginByMobile, store } = require("../query/user.query");
const { generateToken } = require("../../helper/jwtToken");

const loginHandler = async (req, res) => {
  try {
    await loginSchema.validateAsync(req.body);

    let resp;
    if (req.body.email) {
      resp = await query(loginByEmail(req.body.email));
    } else if (req.body.mobile) {
      resp = await query(loginByMobile(req.body.mobile));
    }

    if (!resp || !Object.keys(resp).length) {
      responseHandler.errorResponse(
        res,
        responseMessages.userNotFound,
        responseMessages.userNotFound
      );
      return;
    }

    const rows = mysqlSingleResponseHandler(resp);
    await verifyPassword(req.body.password, rows.hashedpassword);
    delete rows.hashedpassword;
    let storeCreated = await query(store(rows.userid));
    storeCreated = mysqlSingleResponseHandler(storeCreated);
    const newToken = generateToken(rows);
    responseHandler.successResponse(
      res,
      {
        token: newToken,
        ...rows,
        ...storeCreated,
      },
      responseMessages.loginSuccessfully
    );
  } catch (err) {
    responseHandler.errorResponse(res, err.message, err.message);
  }
};

const signUpHandler = async (req, res) => {
  try {
    await signUpSchema.validateAsync(req.body);
    req.body.pass = await passwordHash(req.body.password);
    await signUpUserSP(req.body);

    const resp = await query(utilityQuery.selectUserDetails, [req.body.email]);
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

module.exports = {
  login: loginHandler,
  signUp: signUpHandler,
};
