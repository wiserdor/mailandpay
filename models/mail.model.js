var mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

var mailSchema = new Schema({
  user_id: String,
  subject: { type: String, required: true },
  body: { type: String, required: false },
  payment_link:{ type: String, required: false },
  pdf_links:[String],
  paid:{ type: Boolean, required: true },
  date_sent:{ type: Date, required: true },
});


module.exports = mongoose.model("Mail", mailSchema);