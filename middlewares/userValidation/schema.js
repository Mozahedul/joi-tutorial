const Joi = require("joi");

const schemas = {
  registerSchema: Joi.object({
    name: Joi.string().min(3).max(20).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(
      new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{6,30}$")
    ),
    confirmPassword: Joi.ref("password"),
    dob: Joi.date().iso().required(),
    age: Joi.number().required(),
    languages: Joi.array().items(Joi.string()).required(),
  }),
  loginSchema: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().pattern(
      new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{6,30}$")
    ),
  }),
};

module.exports = schemas;
