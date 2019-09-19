const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  key: { type: String, required: true },
  title: { type: String, required: true },
  image: { type: String, trim: true },
  description: { type: String} ,
  href: { type: String, trim: true} ,
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;