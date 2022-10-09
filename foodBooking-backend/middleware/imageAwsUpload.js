const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

const s3 = new aws.S3();

aws.config.update({
  region: process.env.AWS_S3_BUCKET_REGION.toString(),
  accessKeyId: process.env.AWS_S3_ACCESS_KEY.toString(),
  secretAccessKey: process.env.AWS_S3_SECRET_KEY.toString(),
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type, only JPEG and PNG is allowed!"), false);
  }
};

const upload = multer({
  fileFilter,
  storage: multerS3({
    acl: "public-read",
    s3,
    bucket: process.env.AWS_S3_BUCKET_NAME.toString(),
    metadata: function (req, file, cb) {
      cb(null, { fieldName: "MWA" });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString());
    },
  }),
});

module.exports = async function (req, res, next) {
  try {
    const singleUpload = await upload.single("file");
    singleUpload(req, res, function (err) {
      if (err) {
        next("Image Upload Error");
      } else {
        req.imageUrl = req.file.location;
        next();
      }
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
};
