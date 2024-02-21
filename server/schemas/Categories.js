const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  catId: Number,
  catName: String,
});

const CategoryModel = mongoose.model("categories", CategorySchema);

module.exports = CategoryModel;
