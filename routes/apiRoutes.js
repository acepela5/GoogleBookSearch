const axios = require("axios");
const router = require("express").Router();

//GET the website Google Books - might not need auth/books
router.get("/books", (req, res) => {
    axios.get("https://www.googleapis.com/auth/books", { params: req.query}).then(({ data: { results } }) => res.json(results)).catch(err => res.status(422).json(err));
});

module.exports = router;