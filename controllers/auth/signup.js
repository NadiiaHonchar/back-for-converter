const bcrypt = require("bcryptjs");
const { createError } = require("../../helpers");

const { User } = require("../../models");

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw createError(409, "Email in use");
  }
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  if (!hashPassword) {
    throw createError(401, "Email or password is wrong");
  }
  await User.create({
    email,
    password: hashPassword,
  });

  res.status(201).json({
    status: "201 Created",
    ResponseBody: {
      user: {
        email: email,
      },
    },
  });
};

module.exports = signup;
