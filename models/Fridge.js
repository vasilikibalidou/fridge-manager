const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fridgeSchema = new Schema({
  name: String,
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: "FoodItem"
    }
  ],
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});

const Fridge = mongoose.model("Fridge", fridgeSchema);
module.exports = Fridge;
