const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const {
  getExtras,
  addExtra,
  getExtraByID,
  updateExtraByID,
  deleteExtraByID,
} = require("../controllers/extraController");

const uploadImage = require("../middleware/awsUploadMware");
const checkToken = require("../middleware/checkToken");

router.get("/", checkToken, getExtras);
router.post(
  "/",
  checkToken,
  upload.single("file"),
  uploadImage,
  express.json(),
  addExtra
);
router.get("/:extra_id", getExtraByID);

router.put(
  "/:extra_id",
  checkToken,
  upload.single("file"),
  uploadImage,
  express.json(),
  updateExtraByID
);
router.delete("/:extra_id", checkToken, deleteExtraByID);

module.exports = router;
