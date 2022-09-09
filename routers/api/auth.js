const express = require("express");
const { validation, contlWrapper, auth, upload } = require("../../middlewares");
const { auth: ctrl } = require("../../controllers");
// const { joiSchema, joiSignUpSchema } = require("../../models/user");
const {schemas} = require("../../models/user")

const router = express.Router();

router.post("/signup", validation(schemas.joiSignUpSchema), contlWrapper(ctrl.signup));
router.post("/login", validation(schemas.joiSignUpSchema), contlWrapper(ctrl.login));
router.get("/logout", auth, contlWrapper(ctrl.logout));
router.get("/current", auth, contlWrapper(ctrl.current));
router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  contlWrapper(ctrl.updataAvatar)
);
// router.get("/verify/:verificationToken",contlWrapper(ctrl.verifyEmail));

module.exports = router;
