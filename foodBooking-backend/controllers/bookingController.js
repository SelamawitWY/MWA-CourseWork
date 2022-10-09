const Restaurant = require("../models/restaurantModel");
const Booking = require("../models/bookingModel");
const ObjectId = require("mongodb").ObjectId;

async function addReservation(req, res, next) {
  try {
    const restaurant_id = req.body.restaurant._id;
    const food_id = req.body.food._id;
    const qty = -1 * parseInt(req.body.quantity);

    const updateRestaurant = await Restaurant.updateOne(
      { _id: restaurant_id, "foods._id": food_id },
      { $inc: { "foods.$.remainingQuantity": qty } }
    );

    const results = await Booking.create(req.body);
    res.json({ success: true, data: results });
  } catch (e) {
    console.log(e);
    next(e);
  }
}
async function cancelReservation(req, res, next) {
  try {
    const { book_id } = req.params;
    const { restaurant_id, food_id, quantity } = req.body;

    const updateRestaurant = await Restaurant.updateOne(
      { _id: restaurant_id, "foods._id": food_id },
      { $inc: { "foods.$.remainingQuantity": quantity } }
    );

    const results = await Booking.updateOne(
      { _id: book_id },
      { $set: { status: "Cancelled" } }
    );

    res.json({ success: true, data: results });
  } catch (e) {
    console.log(e);
    next(e);
  }
}

async function completeReservation(req, res, next) {
  try {
    const { book_id } = req.params;
    const results = await Booking.updateOne(
      { _id: book_id },
      { $set: { status: "Completed" } }
    );

    res.json({ success: true, data: results });
  } catch (e) {
    next(e);
  }
}

async function getUserReservations(req, res, next) {
  try {
    const results = await Booking.find({ "owner._id": req.token._id })
      .sort({ reservedDate: -1 })
      .exec();
    res.status(200).json({ success: true, data: results });
  } catch (e) {
    console.log(e);
    next(e);
  }
}

async function getRestaurantReservations(req, res, next) {
  try {
    const results = await Booking.find({ "restaurant._id": req.token.owner })
      .sort({ reservedDate: -1 })
      .exec();
    res.status(200).json({ success: true, data: results });
  } catch (e) {
    console.log(e);
    next(e);
  }
}

async function getUserReservationsByStatus(req, res, next) {
  try {
    const { status } = req.body;

    const results = await Booking.find({
      "owner._id:": req.token._id,
      status: status,
    })
      .sort({ reservedDate: -1 })
      .exec();
    res.status(200).json({ success: true, data: results });
  } catch (e) {
    console.log(e);
    next(e);
  }
}

async function getRestaurantReservationsByStatus(req, res, next) {
  try {
    const { status } = req.body;
    const results = await Booking.find({
      "restaurant._id:": req.token._id,
      status: status,
    })
      .sort({ reservedDate: -1 })
      .exec();
    res.status(200).json({ success: true, data: results });
  } catch (e) {
    console.log(e);
    next(e);
  }
}

async function getUserReservationsByDate(req, res, next) {
  try {
    const { fromDate, toDate } = req.body;
    const results = await Booking.find({
      "owner._id:": req.token._id,
      reservedDate: { $gte: new Date(fromDate), $lt: new Date(toDate) },
    })
      .sort({ reservedDate: -1 })
      .exec();
    res.status(200).json({ success: true, data: results });
  } catch (e) {
    console.log(e);
    next(e);
  }
}

async function getRestaurantReservationsByDate(req, res, next) {
  try {
    const results = await Booking.find({
      "restaurant._id:": req.token._id,
      reservedDate: { $gte: new Date(fromDate), $lt: new Date(toDate) },
    })
      .sort({ reservedDate: -1 })
      .exec();
    res.status(200).json({ success: true, data: results });
  } catch (e) {
    console.log(e);
    next(e);
  }
}
module.exports = {
  addReservation,
  cancelReservation,
  completeReservation,
  getUserReservations,
  getRestaurantReservations,
  getUserReservationsByDate,
  getRestaurantReservationsByDate,
  getUserReservationsByStatus,
  getRestaurantReservationsByStatus,
};
