const express = require("express");
const { validation, contlWrapper, auth } = require("../../middlewares");
const { auth: ctrl } = require("../../controllers");
const { schemas } = require("../../models/user");

const router = express.Router();

router.post(
  "/signup",
  validation(schemas.joiSignUpSchema),
  contlWrapper(ctrl.signup)
);
router.post(
  "/login",
  validation(schemas.joiSignUpSchema),
  contlWrapper(ctrl.login)
);
router.get("/logout", auth, contlWrapper(ctrl.logout));
router.get("/current", auth, contlWrapper(ctrl.current));

module.exports = router;
