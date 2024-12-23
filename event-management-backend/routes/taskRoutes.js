const express = require("express");
const { getTasksByEvent, createTask, updateTaskStatus } = require("../controllers/taskController");
const router = express.Router();

router.get("/:eventId", getTasksByEvent);
router.post("/", createTask);
router.put("/:id", updateTaskStatus);

module.exports = router;
