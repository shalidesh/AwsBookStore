const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
   
    book_title: {
      type: String,
      required: true,

    },
    author_name: {
      type: String,
      required: true,
    },
    cost: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Books", BookSchema);
