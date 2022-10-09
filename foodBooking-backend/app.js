const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("./models/userModel");
const Restaurant = require("./models/restaurantModel");
const checkToken = require("./middleware/checkToken");
const extraRouter = require("./routers/extraRouter");
const userRouter = require("./routers/userRouter");
const restaurantRouter = require("./routers/restaurantRouter");
const foodRouter = require("./routers/foodRouter");

const app = express();
app.use(cors());
app.use(morgan());
try {
  const credentials = `${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}`;
  mongoose.connect(
    `mongodb+srv://${credentials}@cluster0.cmomfi5.mongodb.net/foodBooking?retryWrites=true&w=majority`
  );
} catch (e) {
  console.log(e);
}

app.post("/login", express.json(), async (req, res, next) => {
  try {
    const { email, password, lat, long } = req.body;

    const user = await User.findOne({ email: email }); //.lean();
    const restaurant = await Restaurant.findOne({ owner: user?._id }).lean();
    if (user) {
      user.validatePassword(password, async function (err, isMatch) {
        if (err) throw err;
        if (isMatch) {
          const data = { ...user };
          data._doc.lat = lat;
          data._doc.long = long;
          data._doc.password = null;

          if (user.role == "restaurant") {
            if (restaurant) {
              data._doc.owner = restaurant._id;
            } else {
              res
                .status(400)
                .json({ success: false, data: "Restaurant does not exists" });
            }
          }

          const token = jwt.sign(data._doc, process.env.SECRET_KEY);

          res.status(200).json({ success: true, data: token });
        } else {
          res
            .status(400)
            .json({ success: false, data: "Invalid username or password" });
        }
      });
    } else {
      res
        .status(400)
        .json({ success: false, data: "Invalid username or password" });
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
});

app.use("/api/extras", checkToken, extraRouter);
app.use("/api/users", userRouter);
app.use("/api/restaurants", restaurantRouter);
app.use("/api/foods", foodRouter);

app.use((err, req, res, next) => {
  res.status(400).json({ success: false, data: +err.message });
});

app.listen("3000", () => console.log("listening on port 3000"));
