const express = require("express");
const router = express.Router();
const FoodItem = require("../models/FoodItem");
const Fridge = require("../models/Fridge");
const User = require("../models/User");

router.post("/foodItem/:id/edit", (req, res) => {
  const {
    name,
    description,
    userId,
    fridgeId,
    availability,
    expiration,
    quantity
  } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Username can't be empty" });
  }
});

router.get("/foodItem/:id/edit", (req, res) => {
  FoodItem.findByIdAndUpdate(
    req.params.id,
    ({
      name,
      description,
      userId,
      fridgeId,
      availability,
      expiration,
      quantity
    } = req.body)
  )
    .then(foundItem => {
      return res.json(foundItem);
    })
    .catch(err => {
      res.status(400).json({ message: "Could not find fridge." });
    });
});

module.exports = router;
