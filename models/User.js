/* We'll write the schema and register our model for the users here */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  password: String,
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: "FoodItem"
    }
  ],
  fridges: [
    {
      type: Schema.Types.ObjectId,
      ref: "Fridge"
    }
  ]
});

const User = mongoose.model("User", userSchema);
module.exports = User;
