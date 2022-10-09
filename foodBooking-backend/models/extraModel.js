const mongoose = require("mongoose");

const ExtraSchema = mongoose.Schema({
  name: String,
  price: Number,
  imageUrl: String,
  owner: mongoose.Types.ObjectId,
});

module.exports = mongoose.model("Extra", ExtraSchema);
