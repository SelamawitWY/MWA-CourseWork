const Restaurant = require("../models/restaurantModel");
const ObjectId = require("mongodb").ObjectId;

async function getRestaurant(req, res, next) {
  try {
    const results = await Restaurant.findOne({
      _id: req.token.owner,
    });
    res.json({ success: true, data: results });
  } catch (e) {
    next(e);
  }
}

async function addRestaurant(req, res, next) {
  try {
    if (req.body.owner) {
      req.body.owner = new ObjectId(req.body.owner);
    }
    const results = await Restaurant.create(req.body);
    res.json({ success: true, data: results });
  } catch (e) {
    console.log(e);
    next(e);
  }
}

async function updateRestaurant(req, res, next) {
  try {
    const results = await Restaurant.updateOne(
      {
        _id: req.token.owner,
      },
      { $set: req.body }
    );
    res.json({ success: true, data: results });
  } catch (e) {
    next(e);
  }
}

module.exports = {
  // login,
  getRestaurant,
  addRestaurant,
  updateRestaurant,
};
