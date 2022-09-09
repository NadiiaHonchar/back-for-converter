const { createError } = require("../helpers");

const validation = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      // error.status = 400;
      throw createError(400, "Email or password invalid");
      next(error);
    }
    next();
  };
};

module.exports = validation;
