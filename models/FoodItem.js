/* We'll write the schema and register our model for the posts here */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodItemSchema = new Schema(
  {
    name: String,
    description: String,
    category: {
      type: String,
      default: "other",
      enum: [
        "fruit",
        "vegetables",
        "dairy",
        "eggs",
        "meat",
        "fish",
        "seafood",
        "dessert",
        "bread",
        "cooked",
        "drinks",
        "alcohol",
        "other"
      ],
      default: "other"
    },
    common: {
      type: Boolean,
      default: false
    },
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    expiration: Date,
    image: String,
    quantity: {
      number: Number,
      unit: {
        type: String,
        enum: ["kg", "L", "item"]
      }
    },
    availability: {
      type: String,
      enum: ["full", "half-full", "almost empty", "empty"],
      default: "full"
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const FoodItem = mongoose.model("FoodItem", foodItemSchema);
module.exports = FoodItem;
