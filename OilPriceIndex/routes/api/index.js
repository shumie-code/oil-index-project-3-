const path = require("path");
const router = require("express").Router();
const oilRoutes = require("./oil");
const priceRoutes = require("./prices");

// Oil Routes
router.use("/oil", oilRoutes);

// Price Routes
router.use("./prices", priceRoutes);

// For anything other routes display the html page
router.use (function (req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;