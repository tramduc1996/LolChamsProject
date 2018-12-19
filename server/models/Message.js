const Joi = require("joi");

const schema = {
  id: Joi.number(),
  fullName: Joi.string()
    .min(1)
    .max(100),
  email: Joi.string()
    .min(2)
    .max(100),
  message: Joi.string()
    .min(2)
    .max(1000)
};

module.exports = Joi.object().keys(schema);
