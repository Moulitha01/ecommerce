import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import productRoutes from "./routes/productroutes.js"; // import here

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes → ADD HERE
app.use("/api/products", productRoutes);

// Test route (optional)
app.get("/", (req, res) => {
  res.send("API running");
});

// DB + Server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB connected");
    app.listen(5000, () => console.log("Server running"));
  })
  .catch(err => console.log(err));