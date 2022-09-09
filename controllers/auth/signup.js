const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { createError } = require("../../helpers");
const { v4: uuidv4 } = require("uuid");

const { User } = require("../../models");
// const { sendEmail } = require("../../helpers");

const signup = async (req, res) => {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw createError(409, "Email in use");
  }
  // const verificationToken = nanoid();
  // const verificationToken = uuidv4();
  // const avatarURL = gravatar.url(email, verificationToken);
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  // const compareResult = bcrypt.compareSync(password, hashPassword);

  if (!hashPassword) {
    throw createError(401, "Email or password is wrong");
  }
  await User.create({
    email,
    password: hashPassword,
    // avatarURL,
  });

  // const mail = {
  //   to: email,
  //   subject: "Email confirmation",
  //   html: `<a target="blank" href="http://localhost:3000/api/users/verify/${verificationToken}">Confirm email</a>`,
  // };
  // await sendEmail(mail);

  res.status(201).json({
    status: "201 Created",
    ResponseBody: {
      user: {
        email: email,
        // verificationToken,
        subscription: "starter",
        // avatarURL,
      },
    },
  });
};

module.exports = signup;
