const express = require("express");
const router = express.Router();

const trip_controller = require("../controllers/tripController");

// POST request for creating Book.
router.post("/", trip_controller.trip_create);

// DELETE request to delete Book.
router.delete("/:id", trip_controller.trip_delete);

// PUT request to update Book.
router.put("/:id", trip_controller.trip_update);

// GET request for one Book.
router.get("/:id", trip_controller.trip_detail);

// GET request for list of all Book items.
router.get("/", trip_controller.trip_list);

module.exports = router;