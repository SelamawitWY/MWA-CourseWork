const express = require("express");
const router = express.Router();
const {
  addUser,
  getUser,
  updateUser,
} = require("../controllers/userController");

const {
  addReservation,
  cancelReservation,
  getUserReservations,
  getUserReservationsByDate,
  getUserReservationsByStatus,
} = require("../controllers/bookingController");

const checkToken = require("../middleware/checkToken");

router.get("/", checkToken, getUser);
router.post("/", express.json(), addUser); //registration
router.put("/", express.json(), checkToken, updateUser);

router.get("/bookings", checkToken, getUserReservations);
router.post("/bookings", checkToken, express.json(), addReservation);
router.put("/bookings/:book_id", checkToken, express.json(), cancelReservation);

router.get("/bookingByStatus", checkToken, getUserReservationsByStatus);
router.get("/bookingsByDate", checkToken, getUserReservationsByDate);
module.exports = router;
