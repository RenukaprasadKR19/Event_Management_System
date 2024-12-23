import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EventManagement from "./components/EventManagement";
import AttendeeManagement from "./components/AttendeeManagement";
import TaskTracker from "./components/TaskTracker";
import './styles.css';



function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <Link to="/">Event Management</Link>
          <Link to="/attendees">Attendee Management</Link>
          <Link to="/tasks">Task Tracker</Link>
        </nav>
        <Routes>
          <Route path="/" element={<EventManagement />} />
          <Route path="/attendees" element={<AttendeeManagement />} />
          <Route path="/tasks" element={<TaskTracker />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
