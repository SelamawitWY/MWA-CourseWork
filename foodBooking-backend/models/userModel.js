const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

const UserSchema = mongoose.Schema({
  fullName: String,
  email: { type: String, unique: true },
  phoneNumber: String,
  password: String,
  role: String,
});

UserSchema.pre("save", async function save(next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(SALT_ROUNDS); //generate a salt
    this.password = await bcrypt.hash(this.password, salt); //hash the password using our new salt and override the cleartext password with the hashed one
    return next();
  } catch (err) {
    return next(err);
  }
});

UserSchema.methods.validatePassword = function async(
  providedPassword,
  callback
) {
  bcrypt.compare(providedPassword, this.password, function (err, result) {
    if (err) {
      return callback(err);
    } else {
      callback(null, result);
    }
  });
};

module.exports = mongoose.model("User", UserSchema);
