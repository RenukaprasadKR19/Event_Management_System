# Event Management Dashboard

## Introduction
The Event Management Dashboard is a web-based application designed to help organizations efficiently manage events, attendees, and tasks. This project was developed for a hackathon challenge to address the challenges faced in organizing and managing events.

## Features

### Core Features
1. **Event Management**
   - Create, read, update, and delete events.
   - Display event details such as name, description, location, and date.

2. **Attendee Management**
   - Add and remove attendees.
   - Assign attendees to specific events and tasks.

3. **Task Tracker**
   - Display tasks related to each event.
   - Update task statuses (Pending/Completed).
   - Visualize task progress using a progress bar.

### Additional Features (Bonus)
1. Authentication for login/logout to access the dashboard.
2. A calendar view to display events visually.
3. Real-time updates for task progress using WebSockets.

---

## Screenshots

### Event Management Page
![Event Management Page](./assets/event-management.png)

### Attendee Management Page
![Attendee Management Page](./assets/attendee-management.png)

### Task Tracker Page
![Task Tracker Page](./assets/task-tracker.png)

### Calendar View
![Calendar View](./assets/calendar-view.png)

---

## Technology Stack

### Frontend
- **Framework**: React.js
- **Styling**: Tailwind CSS / Bootstrap
- **State Management**: Redux

### Backend
- **Framework**: Node.js with Express.js
- **Database**: MongoDB

### Integration
- **API Communication**: RESTful APIs
- **Real-time Updates**: WebSockets (Socket.IO)

---

## Setup and Installation

### Prerequisites
- Node.js
- MongoDB
- Git

### Steps to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/event-management-dashboard.git
   cd event-management-dashboard
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   cd frontend
   npm install

   cd ../backend
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `backend` folder with the following:
     ```env
     PORT=5000
     MONGO_URI=mongodb://localhost:27017/event_management
     JWT_SECRET=your_jwt_secret
     ```

4. Start the backend server:
   ```bash
   cd backend
   npm start
   ```

5. Start the frontend server:
   ```bash
   cd frontend
   npm start
   ```

6. Open the application in your browser at `http://localhost:3000`.

---

## API Documentation

### Event Management API
- **POST** `/api/events`: Create an event.
- **GET** `/api/events`: Retrieve all events.
- **PUT** `/api/events/:id`: Update an event.
- **DELETE** `/api/events/:id`: Delete an event.

### Attendee Management API
- **POST** `/api/attendees`: Add an attendee.
- **GET** `/api/attendees`: Retrieve all attendees.
- **DELETE** `/api/attendees/:id`: Remove an attendee.

### Task Management API
- **POST** `/api/tasks`: Create a task.
- **GET** `/api/events/:eventId/tasks`: Retrieve tasks for a specific event.
- **PUT** `/api/tasks/:id`: Update task status.

---

## Folder Structure

```
.
├── backend
│   ├── models
│   ├── routes
│   ├── controllers
│   ├── middleware
│   └── server.js
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── redux
│   │   └── App.js
│   └── public
├── assets
└── README.md
```

---

## Future Enhancements
1. Add notifications for task updates.
2. Enable exporting event details and attendee lists.
3. Add support for multi-language localization.

---

## Contribution
Feel free to fork this repository, raise issues, or submit pull requests. Contributions are welcome!

---

## License
This project is licensed under the [MIT License](./LICENSE).

---

## Contact
For any queries, reach out at [developer@webknot.in](mailto:developer@webknot.in).
