const express = require("express");
const router = express.Router();
const auth_controller = require("../controllers/auth.controller");

//auth not required
router.post("/login",  auth_controller.login);
router.post("/signup", auth_controller.signup);
router.post(
  "/users/change_password",
  auth_controller.change_password
);
router.post(
  "/users/forgot_password",
  auth_controller.forgot_password
);
// router.post("/users/logout", auth.required, users_controller.logout);

module.exports = router;