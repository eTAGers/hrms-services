const Joi = require("joi");
const customMessages = {
  "string.email": "Please provide a valid email address",
  "string.pattern.base": "Mobile must be a valid 10-digit number",
};
const eitherEmailOrMobile = (value, helpers) => {
  if (!value.email && !value.mobile) {
    return helpers.message(
      "Value must contain either email or mobile, but not both"
    );
  }
  return value;
};

const loginSchema = Joi.object({
  email: Joi.string().email(),
  mobile: Joi.string().regex(/^\d{10}$/),
  password: Joi.string().required(),
})
  .custom(eitherEmailOrMobile)
  .messages(customMessages);

const signUpSchema = Joi.object({
  userName: Joi.string().required(),
  email: Joi.string().email(),
  mobile: Joi.string().regex(/^\d{10}$/),
  password: Joi.string().required(),
}).messages(customMessages);

const createStoreSchema = Joi.object({
  storeName: Joi.string().required(),
  storeCategory: Joi.string().required(),
}).messages(customMessages);

module.exports = {
  loginSchema,
  signUpSchema,
  createStoreSchema,
};
