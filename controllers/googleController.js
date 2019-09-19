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
      return  results.data.items.filter(
          result => 
          result.volumeInfo.title &&
          result.volumeInfo.infoLink &&
          result.volumeInfo.authors &&
          result.volumeInfo.description &&
          result.volumeInfo.imageLinks &&
          result.volumeInfo.imageLinks.thumbnail
          
        )
      } 
    ).then (books => res.json(books))

 }

}