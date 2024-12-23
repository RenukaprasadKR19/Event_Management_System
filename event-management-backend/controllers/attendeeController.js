const Attendee = require("../models/Attendee");

exports.getAllAttendees = async (req, res) => {
  try {
    const attendees = await Attendee.find();
    res.status(200).json(attendees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addAttendee = async (req, res) => {
  try {
    const attendee = await Attendee.create(req.body);
    res.status(201).json(attendee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteAttendee = async (req, res) => {
  try {
    await Attendee.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Attendee deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
