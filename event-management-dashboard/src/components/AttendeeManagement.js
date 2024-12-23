import React, { useState, useEffect } from "react";
import axios from "axios";

function AttendeeManagement() {
  const [attendees, setAttendees] = useState([]);
  const [newAttendee, setNewAttendee] = useState({ name: "", email: "" });
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState("");

  useEffect(() => {
    fetchAttendees();
    fetchEvents();
  }, []);

  // Fetch all attendees
  const fetchAttendees = async () => {
    try {
      const response = await axios.get("/api/attendees");
      setAttendees(response.data);
    } catch (error) {
      console.error("Error fetching attendees:", error);
    }
  };

  // Fetch all events (for assigning attendees)
  const fetchEvents = async () => {
    try {
      const response = await axios.get("/api/events");
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  // Add a new attendee
  const handleAddAttendee = async () => {
    try {
      if (!newAttendee.name || !newAttendee.email) {
        alert("Name and Email are required fields.");
        return;
      }
      await axios.post("/api/attendees", newAttendee);
      setNewAttendee({ name: "", email: "" });
      fetchAttendees();
    } catch (error) {
      console.error("Error adding attendee:", error);
    }
  };

  // Delete an attendee
  const handleDeleteAttendee = async (id) => {
    try {
      await axios.delete(`/api/attendees/${id}`);
      fetchAttendees();
    } catch (error) {
      console.error("Error deleting attendee:", error);
    }
  };

  // Assign an attendee to an event
  const handleAssignAttendee = async (attendeeId) => {
    try {
      if (!selectedEvent) {
        alert("Please select an event to assign.");
        return;
      }
      await axios.post(`/api/events/${selectedEvent}/assign-attendee`, { attendeeId });
      alert("Attendee assigned successfully.");
      setSelectedEvent(""); // Clear the selected event after assigning
    } catch (error) {
      console.error("Error assigning attendee to event:", error);
    }
  };

  return (
    <div>
      <h2>Attendee Management</h2>
      {/* Attendee List */}
      <ul>
        {attendees.map((attendee) => (
          <li key={attendee.id}>
            {attendee.name} ({attendee.email})
            <button onClick={() => handleDeleteAttendee(attendee.id)}>Delete</button>
            <select onChange={(e) => setSelectedEvent(e.target.value)} value={selectedEvent}>
              <option value="">Select Event</option>
              {events.map((event) => (
                <option key={event.id} value={event.id}>
                  {event.name}
                </option>
              ))}
            </select>
            <button onClick={() => handleAssignAttendee(attendee.id)}>Assign to Event</button>
          </li>
        ))}
      </ul>

      {/* Add New Attendee Form */}
      <div>
        <h3>Add Attendee</h3>
        <input
          type="text"
          placeholder="Name"
          value={newAttendee.name}
          onChange={(e) => setNewAttendee({ ...newAttendee, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newAttendee.email}
          onChange={(e) => setNewAttendee({ ...newAttendee, email: e.target.value })}
        />
        <button onClick={handleAddAttendee}>Add Attendee</button>
      </div>
    </div>
  );
}

export default AttendeeManagement;
