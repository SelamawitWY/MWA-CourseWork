const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

async function getUsers(req, res, next) {
  try {
    const results = await User.find().exec();

    res.status(200).json({ success: true, data: results });
  } catch (e) {
    console.log(e);
    next(e);
  }
}

async function addUser(req, res, next) {
  const { fullname, email, phonenumber, password, role } = req.body;

  const existingUser = await User.findOne({ email: email }); //.lean();
  if (!existingUser) {
    try {
      const user = new User({
        fullName: fullname,
        email,
        phoneNumber: phonenumber,
        password,
        role,
      });
      const results = await User.create(user);
      res.json({ success: true, data: { id: results._id } });
    } catch (e) {
      console.log(e);
      next(e);
    }
  } else {
    res.status(400).json({ success: false, data: "Email already exists" });
  }
}

async function getUser(req, res, next) {
  try {
    const results = await User.findOne({ _id: req.token._id });
    res.json({ success: true, data: results });
  } catch (e) {
    next(e);
  }
}

async function getHash(value) {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  const password = await bcrypt.hash(value, salt);
  return password;
}

async function updateUser(req, res, next) {
  const { fullname, email, phonenumber, password } = req.body;
  const existingUser = await User.findOne({ email: email }).lean();

  if (!existingUser || existingUser?._id == req.token._id) {
    let hashedPassword = password;

    await getHash(password).then(function (result) {
      hashedPassword = result;
    });

    try {
      const user = {
        fullName: fullname,
        email,
        phoneNumber: phonenumber,
        password: hashedPassword,
      };

      User.updateOne({ _id: req.token._id }, { $set: user }).exec();
      const updatedUser = await User.findOne({ _id: req.token._id });
      const data = { ...updatedUser };
      data._doc.lat = req.token.lat;
      data._doc.long = req.token.long;
      data._doc.password = null;
      if (req.token.owner) {
        data._doc.owner = req.token.owner;
      }

      const token = jwt.sign(data._doc, process.env.SECRET_KEY);
      res.status(200).json({ success: true, data: token });
    } catch (e) {
      console.log(e);
      next(e);
    }
  } else {
    res.status(400).json({ success: false, data: "Email already exists" });
  }
}

// async function deleteUserByID(req, res, next) {
//   try {
//     const { user_id } = req.params;
//     const results = await User.deleteOne({
//       _id: user_id,
//     });
//     res.json({ success: true, data: results });
//   } catch (e) {
//     next(e);
//   }
// }

module.exports = {
  getUsers,
  addUser,
  getUser,
  updateUser,
};
