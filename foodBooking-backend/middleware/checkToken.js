const jsonwebtoken = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  try {
    const token = req.get("authorization")?.split(" ")[1];
    const plainToken = jsonwebtoken.verify(token, process.env.SECRET_KEY);

    req.token = plainToken;
    if (!plainToken) {
      next(new Error("Invalid token"));
    }
    next();
  } catch (e) {
    console.log(e);
    next(e);
  }
};
