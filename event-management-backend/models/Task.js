const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  deadline: { type: Date },
  status: { type: String, enum: ["Pending", "Completed"], default: "Pending" },
  event: { type: mongoose.Schema.Types.ObjectId, ref: "Event", required: true },
  assignedAttendee: { type: mongoose.Schema.Types.ObjectId, ref: "Attendee" },
});

module.exports = mongoose.model("Task", TaskSchema);
