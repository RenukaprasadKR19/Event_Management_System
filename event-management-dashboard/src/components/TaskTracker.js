import React, { useState, useEffect } from "react";
import axios from "axios";

function TaskTracker() {
  const [tasks, setTasks] = useState([]);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(""); // Selected event for filtering tasks

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    if (selectedEvent) {
      fetchTasksByEvent(selectedEvent);
    }
  }, [selectedEvent]);

  // Fetch all events
  const fetchEvents = async () => {
    try {
      const response = await axios.get("/api/events");
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  // Fetch tasks for a specific event
  const fetchTasksByEvent = async (eventId) => {
    try {
      const response = await axios.get(`/api/events/${eventId}/tasks`);
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // Toggle task status
  const handleToggleTaskStatus = async (taskId, currentStatus) => {
    try {
      await axios.put(`/api/tasks/${taskId}`, {
        status: currentStatus === "Pending" ? "Completed" : "Pending",
      });
      if (selectedEvent) {
        fetchTasksByEvent(selectedEvent);
      }
    } catch (error) {
      console.error("Error updating task status:", error);
    }
  };

  return (
    <div>
      <h2>Task Tracker</h2>

      {/* Event Selector */}
      <div>
        <label htmlFor="event-selector">Select Event:</label>
        <select
          id="event-selector"
          value={selectedEvent}
          onChange={(e) => setSelectedEvent(e.target.value)}
        >
          <option value="">-- Select an Event --</option>
          {events.map((event) => (
            <option key={event.id} value={event.id}>
              {event.name}
            </option>
          ))}
        </select>
      </div>

      {/* Task List */}
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <strong>{task.name}</strong> - {task.status}
              <button onClick={() => handleToggleTaskStatus(task.id, task.status)}>
                Mark as {task.status === "Pending" ? "Completed" : "Pending"}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>{selectedEvent ? "No tasks for this event." : "Please select an event to view tasks."}</p>
      )}
    </div>
  );
}

export default TaskTracker;
