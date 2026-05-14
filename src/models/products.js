import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,

  ecoScore: Number, // calculated
  carbonFootprint: Number,
  waterUsage: Number,

  materials: [String],
  origin: String,
  transportMethod: String,

  createdAt: { type: Date, default: Date.now }
});

