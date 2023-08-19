const { loginSchema, signUpSchema } = require("../../utilities/schema");

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
  } catch (err) {
    responseHandler.errorResponse(res, err.message, err.message);
  }
};
