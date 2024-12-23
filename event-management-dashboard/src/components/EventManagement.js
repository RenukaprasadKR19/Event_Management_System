import React, { useState, useEffect } from "react";
import axios from "axios";

function EventManagement() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ name: "", description: "", location: "", date: "" });
  const [editingEvent, setEditingEvent] = useState(null); // To store event being edited

  useEffect(() => {
    fetchEvents();
  }, []);

  // Fetch all events
  const fetchEvents = async () => {
    try {
      const response = await axios.get("/api/events");
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  // Add a new event
  const handleAddEvent = async () => {
    try {
      if (!newEvent.name || !newEvent.date) {
        alert("Name and Date are required fields.");
        return;
      }
      await axios.post("/api/events", newEvent);
      setNewEvent({ name: "", description: "", location: "", date: "" });
      fetchEvents();
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  // Delete an event
  const handleDeleteEvent = async (id) => {
    try {
      await axios.delete(`/api/events/${id}`);
      fetchEvents();
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  // Start editing an event
  const handleEditEvent = (event) => {
    setEditingEvent(event);
  };

  // Save the edited event
  const handleSaveEdit = async () => {
    try {
      if (!editingEvent.name || !editingEvent.date) {
        alert("Name and Date are required fields.");
        return;
      }
      await axios.put(`/api/events/${editingEvent.id}`, editingEvent);
      setEditingEvent(null);
      fetchEvents();
    } catch (error) {
      console.error("Error saving edited event:", error);
    }
  };

  return (
    <div>
      <h2>Event Management</h2>
      {/* Event List */}
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {editingEvent && editingEvent.id === event.id ? (
              <div>
                <input
                  type="text"
                  value={editingEvent.name}
                  onChange={(e) => setEditingEvent({ ...editingEvent, name: e.target.value })}
                  placeholder="Name"
                />
                <input
                  type="text"
                  value={editingEvent.description}
                  onChange={(e) => setEditingEvent({ ...editingEvent, description: e.target.value })}
                  placeholder="Description"
                />
                <input
                  type="text"
                  value={editingEvent.location}
                  onChange={(e) => setEditingEvent({ ...editingEvent, location: e.target.value })}
                  placeholder="Location"
                />
                <input
                  type="date"
                  value={editingEvent.date}
                  onChange={(e) => setEditingEvent({ ...editingEvent, date: e.target.value })}
                />
                <button onClick={handleSaveEdit}>Save</button>
                <button onClick={() => setEditingEvent(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                <strong>{event.name}</strong> - {event.description} at {event.location} on {event.date}
                <button onClick={() => handleEditEvent(event)}>Edit</button>
                <button onClick={() => handleDeleteEvent(event.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Add New Event Form */}
      <div>
        <h3>Add Event</h3>
        <input
          type="text"
          placeholder="Name"
          value={newEvent.name}
          onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newEvent.description}
          onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          value={newEvent.location}
          onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
        />
        <input
          type="date"
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
        />
        <button onClick={handleAddEvent}>Add Event</button>
      </div>
    </div>
  );
}

export default EventManagement;
