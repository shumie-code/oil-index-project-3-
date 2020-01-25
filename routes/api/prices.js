const router = require("express").Router();
const priceController = require("../../controllers/priceController");

// Matches with "/api/prices"
router
    .route("/")
    .get(priceController.findAll);

    module.exports = router;