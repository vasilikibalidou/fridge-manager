const express = require("express");
const router = express.Router();
const FoodItem = require("../models/FoodItem");
const Fridge = require("../models/Fridge");
const User = require("../models/User");

router.post("/foodItem", (req, res) => {
  const {
    name,
    description,
    userId,
    fridgeId,
    availability,
    category,
    expiration,
    quantity
  } = req.body;

  console.log(
    "test",
    name,
    description,
    "availability:",
    availability,
    "category:",
    category
  );

  if (!name) {
    console.log("🔆");
    return res.status(400).json({ message: "Username can't be empty" });
  }
  //extended the k-v pairs
  FoodItem.create({
    name: name,
    description: description,
    users: [userId],
    expiration: expiration,
    availability: availability,
    quantity: quantity,
    category: category
  })
    .then(newItem => {
      User.findById(userId)
        .then(foundUser => {
          return User.updateOne(
            { _id: foundUser._id },
            { $push: { items: newItem._id } }
          );
        })
        .then(() => {
          Fridge.findById(fridgeId).then(foundFridge => {
            return Fridge.updateOne(
              { _id: foundFridge._id },
              { $push: { items: newItem._id } }
            );
          });
        })
        .catch(err => {
          console.log("🚴");
          console.log(err);
        });
      res.json(newItem);
    })
    .catch(err => {
      console.log("🍏");
      console.log(err);
      res.status(400).json({ message: "Error while creating item." });
    });
});

// gets food item
router.get("/foodItem/:id", (req, res) => {
  FoodItem.findById(req.params.id)
    .then(foundItem => {
      return res.json(foundItem);
    })
    .catch(err => {
      res.status(400).json({ message: "Could not find fridge." });
    });
});

module.exports = router;
