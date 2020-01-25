const router = require("express").Router();
const oilController = require("../../controllers/oilController");

// Matches with "/api/oil"
router.route("/")
.get(oilController.findAll)
.post(oilController.create);

// Matches with "/api/oil/:id"
router.route("/:id")
.get(oilController.findById)
.put(oilController.update)
.delete(oilController.remove);

module.exports = router; 