const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./google");
// Book routes
// router.use("/books", bookRoutes);

router.use("/books", bookRoutes)
router.use("/google", googleRoutes)

router.use((req, res) =>
res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;
