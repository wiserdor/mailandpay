const express = require("express");
const router = express.Router();
const mail_controller = require("../controllers/mail.controller");

router.get("/",  mail_controller.get_mail);

module.exports = router;