const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fridgeSchema = new Schema({
  name: String,
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: "FoodItem"
    }
  ]
});

const Fridge = mongoose.model("Fridge", fridgeSchema);
module.exports = Fridge;
