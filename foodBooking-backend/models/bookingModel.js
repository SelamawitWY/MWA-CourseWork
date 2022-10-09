const mongoose = require("mongoose");

const BookingSchema = mongoose.Schema({
  owner: {
    _id: mongoose.Types.ObjectId,
    fullName: String,
    email: String,
    phoneNumber: String,
  },
  food: {
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
  },
  restaurant: {
    _id: mongoose.Types.ObjectId,
    name: String,
    workingHourFrom: String,
    workingHourTo: String,
  },
  extras: [
    {
      name: String,
      price: Number,
      imageUrl: String,
      _id: mongoose.Types.ObjectId,
    },
  ],
  quantity: { type: Number, default: 1 },
  reservedDate: { type: Date, default: Date.now },
  status: { type: String, default: "Pending" },
  reservationCode: String,
  totalPrice: mongoose.Types.Decimal128,
});

module.exports = mongoose.model("Reservation", BookingSchema);
