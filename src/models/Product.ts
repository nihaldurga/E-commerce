import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema(
  {
    name: String,
    category: String,
    brand: String,
    price: Number,
    stock: Number,
    description: String,
    imageUrl: String,
    featured: Boolean,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Product ||
mongoose.model("Product", ProductSchema);