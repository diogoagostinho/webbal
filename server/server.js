import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import CategoryModel from "./schemas/Categories.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://admin:UMxH4cfR4mcM9@webbal.yrhkpgv.mongodb.net/webbal"
);

app.get("/categories", (req, res) => {
  CategoryModel.find()
    .then((categories) => res.json(categories))
    .catch((err) => res.json(err));
});

// eslint-disable-next-line no-undef
app.listen(process.env.PORT || 5000, () => {
  console.log("Connected to server");
});
