const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const express = require("express");
const router = express.Router();
const {
  getFoods,
  getNearByFoods,
  addFood,
  getFoodByID,
  updateFoodByID,
  deleteFoodByID,
} = require("../controllers/foodController");

const uploadImage = require("../middleware/awsUploadMware");
const checkToken = require("../middleware/checkToken");

router.post(
  "/",
  checkToken,
  upload.single("file"),
  uploadImage,
  express.json(),
  addFood
);
router.get("/", checkToken, getFoods);
router.put(
  "/:food_id",
  checkToken,
  upload.single("file"),
  uploadImage,
  express.json(),
  updateFoodByID
);
router.get("/nearby", checkToken, getNearByFoods);
// router.get("/:food_id", getFoodByID);
router.delete("/:food_id", checkToken, deleteFoodByID);

module.exports = router;
