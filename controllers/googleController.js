const db = require("../models");
const axios = require("axios"); 

// Defining methods for the googleController - web - using API to get data

module.exports = {
  //find all data from site 
  findAll: function(req, res) {
    const { query: params } = req;
    console.log("findAll:", params)
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params: req.query
       })
    .then(results =>{
        //hold on to results from these specific conditions
     console.log(results.data.items)
        results.data.items.filter(
          result => 
          result.volumeInfo.title &&
          result.volumeInfo.infoLink &&
          result.volumeInfo.authors &&
          result.volumeInfo.description &&
          result.volumeInfo.imageLinks &&
          result.volumeInfo.imageLinks.thumbnail
          
    )
  console.log(result.volumeInfo.title, "***** BOOK TITLE ********")
  } 
    )
//     .then(apiBooks =>{
//      console.log("^^^^^^^^^^^^^^^apiBooks^^^^^^^^^^^^^^^^^^^", apiBooks)
//         db.Book.find().then(dbBooks =>
//             apiBooks.filter(apiBook =>
//                 dbBooks.every(dbBook => dbBook.googleId.toString() !==
//                 apiBook.id)
//                 )
//             )
//             })
//                 .then(books => res.json(books))
//                 .catch(err =>
//                     // console.log(err)
//                      res.status(422).json(err)
//                      );
                
  }

 }