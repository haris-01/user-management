const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  linkedIn: { type: String },
});
module.exports = mongoose.models.Users || mongoose.model("Users", UserSchema);
