import axios from "axios";

export default {
  // Gets all books
  getBooks: function(q) {
    console.log("is Q", q)
//"title: "
    return axios.get("/api/google", { params: { q: q } });
  },
  // Gets the book with the given id
  getSavedBooks: function(bookData) {
    console.log("WE ARE GETING SAVED BOOKS", bookData)
    return axios.get("/api/books/", bookData);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    console.log("WE ARE SAVING ALL THESE BOOKS", bookData)
    return axios.post("/api/books", bookData);
  }
};
