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
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

const User = model("user", userSchema);

const joiSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(regEx).required(),
  subscription: Joi.string().required(),
});

const joiSignUpSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(regEx).required(),
});

const schemas = {
  joiSchema,
  joiSignUpSchema,
};

module.exports = {
  User,
  schemas,
};
