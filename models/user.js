const { Schema, model } = require("mongoose");
const Joi = require("joi");

const regEx =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const userSchema = Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      mutch: regEx,
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

const User = model("user", userSchema);

const joiSignUpSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(regEx).required(),
});

const schemas = {
  joiSignUpSchema,
};

module.exports = {
  User,
  schemas,
};
