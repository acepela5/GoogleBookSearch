const db = require("../models");

// Defining methods for the booksController - database - based in SavedBooks Page

//find all results in Book database
module.exports = {
  findAll: function(req, res) {
    db.Book.find(req.query)
    
      .then(dbBook => res.json(dbBook)
        ).catch(err => res.status(422).json(err));
    
    // db.Book
    //   .find(req.query)
    //   .sort({ date: -1 })
    //   .then(dbBook => res.json(dbBook))
    //   .catch(err => res.status(422).json(err));
  },

  //find books by id
  findById: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },

  //create new entry in database - save book
  create: function(req, res) {
    db.Book
      .create(req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },

  //will not need to update info (?)
  // update: function(req, res) {
  //   db.Book
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbBook => res.json(dbBook))
  //     .catch(err => res.status(422).json(err));
  // },

  //delete data entry by id
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbBook => dbBook.remove())
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  }
};
