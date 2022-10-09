const Extra = require("../models/extraModel");
const Booking = require("../models/bookingModel");
const Restaurant = require("../models/restaurantModel");

async function getExtras(req, res, next) {
  try {
    const results = await Extra.find({ owner: req.token.owner }).exec();
    res.status(200).json({ success: true, data: results });
  } catch (e) {
    console.log(e);
    next(e);
  }
}

async function addExtra(req, res, next) {
  try {
    const results = await Extra.create({
      ...req.body,
      imageUrl: req.imageUrl,
      owner: req.token.owner,
    });
    res.json({ success: true, data: results });
  } catch (e) {
    console.log(e);
    next(e);
  }
}

async function getExtraByID(req, res, next) {
  try {
    const { extra_id } = req.params;
    const results = await Extra.findOne({
      _id: extra_id,
      owner: req.token._id,
    });
    res.json({ success: true, data: results });
  } catch (e) {
    next(e);
  }
}
async function updateExtraByID(req, res, next) {
  try {
    const { extra_id } = req.params;
    const data = { ...req.body };

    if (null == req.imageUrl) {
      getImageById(extra_id).then((result) => {
        data.imageUrl = result?.imageUrl;
        Extra.updateOne(
          { _id: extra_id, owner: req.token.owner },
          { $set: data },
          (err, results) => {
            updateOrders(extra_id);
            updateFoods(extra_id);
            res.json({ success: true, data: results });
          }
        );
      });
    } else {
      data.imageUrl = req.imageUrl;
      const results = await Extra.updateOne(
        { _id: extra_id, owner: req.token.owner },
        { $set: data }
      );
      updateOrders(extra_id);
      updateFoods(extra_id);
      res.json({ success: true, data: results });
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
}

async function updateOrders(extra_id) {
  try {
    const extra = await Extra.findOne({
      _id: extra_id,
    });

    if (extra?._id) {
      await Booking.updateMany(
        { "extras._id": extra_id, status: "Pending" },
        { $set: { "extras.$": extra } }
      );

      const bookings = Booking.find({
        "extras._id": extra_id,
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

async function updateFoods(extra_id) {
  try {
    const extra = await Extra.findOne({
      _id: extra_id,
    });

    const result = await Restaurant.find(
      {
        "foods.extras._id": extra_id,
      },

      { foods: 1 }
    );

    if (extra?._id) {
      const foods = result.map((item) => item?.foods);
      foods?.[0]?.forEach((food) => {
        const updatedFood = Restaurant.updateOne(
          {
            "foods._id": food?._id,
          },
          { $set: { "foods.$.extras.$[extra]": extra } },
          { arrayFilters: [{ "extra._id": extra_id }] },
          (err, results) => {
            // updateOrders(food_id);
            //res.json({ success: true, data: results });
          }
        );
      });
    }
  } catch (e) {
    throw e;
  }
}

async function getImageById(id) {
  const result = await Extra.findOne({
    _id: id,
  });

  return result;
}

async function deleteExtraByID(req, res, next) {
  try {
    const { extra_id } = req.params;
    const results = await Extra.deleteOne({
      _id: extra_id,
      owner: req.token.owner,
    });
    res.json({ success: true, data: results });
  } catch (e) {
    next(e);
  }
}

module.exports = {
  getExtras,
  addExtra,
  getExtraByID,
  updateExtraByID,
  deleteExtraByID,
};
