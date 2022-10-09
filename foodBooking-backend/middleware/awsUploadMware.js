require("dotenv").config();
const fs = require("fs");
const AWS = require("aws-sdk");

const region = process.env.AWS_S3_BUCKET_REGION.toString();
const accessKeyId = process.env.AWS_S3_ACCESS_KEY.toString();
const secretAccessKey = process.env.AWS_S3_SECRET_KEY.toString();
const bucketName = process.env.AWS_S3_BUCKET_NAME.toString();

const s3 = new AWS.S3({
  region,
  accessKeyId,
  secretAccessKey,
});

async function uploadFile(file) {
  const fileSteam = fs.createReadStream(file.path);

  const uniqueSuffix = new Date().getTime();
  const ext = file.originalname.split(".")[1];
  const uploadParam = {
    Bucket: bucketName,
    Key: `${uniqueSuffix}.${ext}`,
    Body: fileSteam,
  };

  return await s3.upload(uploadParam).promise();
}

module.exports = async function (req, res, next) {
  if (req.file) {
    try {
      const file = req.file;
      const result = await uploadFile(file);
      req.imageUrl = result.Location;
      next();
    } catch (e) {
      console.log(e);
      next(e);
    }
  } else {
    next();
  }
};
