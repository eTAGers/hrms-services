const Joi = require("joi");

const loginSchema = Joi.object({
  userName: Joi.string().required(),
  password: Joi.string().required(),
});

const signUpSchema = Joi.object({
  userName: Joi.string().required(),
  email: Joi.string().required(),
  mobile: Joi.string().required(),
  password: Joi.string().required(),
});

module.exports = {
  loginSchema,
  signUpSchema,
};
