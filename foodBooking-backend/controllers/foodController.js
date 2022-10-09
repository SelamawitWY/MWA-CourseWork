const Restaurant = require("../models/restaurantModel");
const Booking = require("../models/bookingModel");
const ObjectId = require("mongodb").ObjectId;

async function getFoods(req, res, next) {
  try {
    const results = await Restaurant.find(
      { _id: req.token.owner },
      { foods: 1 }
    )
      .sort({ "foods.remainingQuantity": "desc" })
      .exec();
    res.status(200).json({ success: true, data: results });
  } catch (e) {
    console.log(e);
    next(e);
  }
}

async function getNearByFoods(req, res, next) {
  const userLocation = [req.token.long, req.token.lat];
  try {
    const results = await Restaurant.find(
      {
        "address.location": { $near: userLocation },
        "foods.remainingQuantity": { $gt: 0 },
      },
      { foods: 1, name: 1, workingHourFrom: 1, workingHourTo: 1 }
    ).exec();

    res.status(200).json({ success: true, data: results });
  } catch (e) {
    console.log(e);
    next(e);
  }
}

async function addFood(req, res, next) {
  try {
    const data = { _id: new ObjectId(), imageUrl: req.imageUrl, ...req.body };
    if (data.recipe) {
      data.recipe = JSON.parse(data.recipe);
    }
    if (data.extras != "undefined") {
      data.extras = JSON.parse(data.extras);
    } else {
      data.extras = null;
    }

    const results = await Restaurant.updateOne(
      { _id: req.token.owner },
      {
        $push: {
          foods: data,
        },
      }
    );
    res.json({ success: true, data: results });
  } catch (e) {
    console.log(e);
    next(e);
  }
}

async function getFoodByID(req, res, next) {
  try {
    const { food_id } = req.params;
    const results = await Restaurant.findOne({
      _id: req.token.owner,
      "foods._id": food_id,
    });
    //.project({ foods: 1 })
    res.json({ success: true, data: results });
  } catch (e) {
    next(e);
  }
}
async function updateFoodByID(req, res, next) {
  try {
    const { food_id } = req.params;
    const data = { _id: food_id, ...req.body };
    if (data.recipe) {
      data.recipe = JSON.parse(data.recipe);
    }
    if (data.extras != "undefined") {
      data.extras = JSON.parse(data.extras);
    } else {
      data.extras = null;
    }

    if (null == req.imageUrl) {
      getImageById(req.token.owner, food_id).then((result) => {
        const food = result.foods.find((item) => item._id == food_id);
        data.imageUrl = food?.imageUrl;
        Restaurant.updateOne(
          {
            _id: req.token.owner,
            "foods._id": food_id,
          },
          { $set: { "foods.$": data } },
          (err, results) => {
            updateOrders(food_id);
            res.json({ success: true, data: results });
          }
        );
      });
    } else {
      console.log("new image already uploaded ");
      data.imageUrl = req.imageUrl;
      const results = await Restaurant.updateOne(
        {
          _id: req.token.owner,
          "foods._id": food_id,
        },
        { $set: { "foods.$": data } }
      );

      updateOrders(food_id);
      res.json({ success: true, data: results });
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
}

async function getImageById(id, food_id) {
  const result = await Restaurant.findOne(
    {
      _id: id,
      "foods._id": food_id,
    },
    { foods: 1 }
  );

  return result;
}

async function updateOrders(food_id) {
  try {
    const result = await Restaurant.findOne(
      {
        "foods._id": food_id,
      },
      { foods: 1 }
    );
    const food = result?.foods.find((item) => item?._id == food_id);

    if (food?._id) {
      await Booking.updateMany(
        { "food._id": food_id, status: "Pending" },
        { $set: { food: food } }
      );

      const bookings = Booking.find({
        "food._id": food_id,
        status: "Pending",
      }).exec();

      bookings.then((results) => {
        results.forEach((book) => {
          let newPrice = 0;
          newPrice = newPrice + book?.quantity * book?.food.price;
          book?.extras.forEach((extra) => {
            newPrice = newPrice + extra.price;
          });

          if (newPrice && book?._id) {
            const updateRes = Booking.updateOne(
              { _id: book?._id },
              { $set: { totalPrice: newPrice } }
            ).exec();
          }
        });
      });
    }
  } catch (e) {
    throw e;
  }
}

async function deleteFoodByID(req, res, next) {
  try {
    const { food_id } = req.params;
    const results = await Restaurant.updateOne(
      {
        _id: req.token.owner,
        "foods._id": food_id,
      },
      { $pull: { foods: { _id: food_id } } }
    );
    res.json({ success: true, data: results });
  } catch (e) {
    next(e);
  }
}

module.exports = {
  getFoods,
  getNearByFoods,
  addFood,
  getFoodByID,
  updateFoodByID,
  deleteFoodByID,
};
