const express = require("express");
const router = express.Router();
const Fridge = require("../models/Fridge");
const User = require("../models/User");

router.post("/fridge", (req, res) => {
  const { name, userId } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Username can't be empty" });
  }

  Fridge.create({ name: name, admins: [userId], users: [userId] })
    .then(newFridge => {
      console.log(userId);
      User.findById(userId)
        .then(foundUser => {
          return User.updateOne(
            { _id: foundUser._id },
            { $push: { fridges: newFridge._id } }
          );
        })
        .catch();
      res.json(newFridge);
    })
    .catch(err => {
      res.status(400).json({ message: "Error while logging in" });
    });
});

router.get("/fridge/:id", (req, res) => {
  Fridge.findById(req.params.id)
    .then(foundFridge => {
      return res.json(foundFridge);
    })
    .catch(err => {
      res.status(400).json({ message: "Could not find fridge." });
    });
});

module.exports = router;
