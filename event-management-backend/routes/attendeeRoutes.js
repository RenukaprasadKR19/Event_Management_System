const express = require("express");
const { getAllAttendees, addAttendee, deleteAttendee } = require("../controllers/attendeeController");
const router = express.Router();

router.get("/", getAllAttendees);
router.post("/", addAttendee);
router.delete("/:id", deleteAttendee);

module.exports = router;
