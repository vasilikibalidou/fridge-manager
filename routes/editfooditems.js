const express = require("express");
const router = express.Router();
const FoodItem = require("../models/FoodItem");
const Fridge = require("../models/Fridge");
const User = require("../models/User");

router.post("/foodItem/edit/:id", (req, res) => {
  console.log("hello");

  FoodItem.findById(req.params.id)
    .then(foundItem => {
      console.log(foundItem.category, "FOUND ITEM");

      console.log(req.body, "body ITEM");
      return FoodItem.updateOne(
        { _id: foundItem._id },
        ({
          name,
          description,
          userId,
          fridgeId,
          availability,
          expiration,
          quantity,
          category
        } = req.body)
      );
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ message: "Could not find fridge." });
    });
});

module.exports = router;
