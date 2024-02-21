import "dotenv/config";
import express from "express";
import mongoose from "mongoose";

const app = express();
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

mongoose.connect(
  "mongodb+srv://admin:UMxH4cfR4mcM9@webbal.yrhkpgv.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
