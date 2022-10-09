const express = require("express");
const router = express.Router();
const {
  // login,
  getRestaurant,
  addRestaurant,
  updateRestaurant,
} = require("../controllers/restaurantController");

const {
  completeReservation,
  getRestaurantReservations,
  getRestaurantReservationsByDate,
  getRestaurantReservationsByStatus,
} = require("../controllers/bookingController");

const checkToken = require("../middleware/checkToken");

router.post("/", express.json(), addRestaurant); //registration
router.put("/", express.json(), checkToken, updateRestaurant);
router.get("/", checkToken, getRestaurant);

router.get("/bookings", checkToken, getRestaurantReservations);
router.put(
  "/bookings/:book_id",
  checkToken,
  express.json(),
  completeReservation
);

router.get("/bookingByStatus", checkToken, getRestaurantReservationsByStatus);
router.get("/bookingsByDate", checkToken, getRestaurantReservationsByDate);
module.exports = router;
