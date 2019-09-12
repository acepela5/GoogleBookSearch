const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// // If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// router.get("/books", (req, res) => {
//   axios
//     .get("https://www.googleapis.com/books/v1/volumes?q=burger", {params: req.query })
//     .then(({ data: { results } }) => res.json(results)).catch(err => res.status(422).json(err));
// });

module.exports = router;
