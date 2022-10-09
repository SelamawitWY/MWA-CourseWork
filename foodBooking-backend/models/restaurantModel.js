const mongoose = require("mongoose");

const RestaurantSchema = mongoose.Schema({
  name: String,
  description: String,
  workingHourFrom: String,
  workingHourTo: String,
  address: {
    city: String,
    state: String,
    country: String,
    location: Array,
  },
  foods: [
    {
      _id: mongoose.Types.ObjectId,
      name: String,
      description: String,
      price: Number,
      imageUrl: String,
      recipe: [
        {
          type: String,
        },
      ],
      extras: [
        {
          _id: mongoose.Types.ObjectId,
          name: String,
          price: Number,
          imageUrl: String,
        },
      ],
      bestBeforeUse: Date,
      totalQuantity: Number,
      remainingQuantity: Number,
      isAvailable: Boolean,
    },
  ],
  owner: mongoose.Types.ObjectId,
});

RestaurantSchema.index({ "address.location": "2d" });

module.exports = mongoose.model("Restaurant", RestaurantSchema);
