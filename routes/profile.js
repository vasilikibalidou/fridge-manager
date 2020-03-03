const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/profile/:id", (req, res) => {
  const userId = req.params.id;
  User.findById(userId)
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
});

module.exports = router;
