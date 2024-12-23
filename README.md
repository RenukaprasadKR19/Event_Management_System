# Event Management Dashboard

## 🚀 Project Overview
The **Event Management Dashboard** is a cutting-edge, web-based solution designed to streamline the process of organizing, managing, and tracking events. It enables users to efficiently handle event details, attendees, and associated tasks, ensuring a smooth and productive event management experience.

---

## ✨ Key Features

### 🗓️ Event Management
- Create, view, update, and delete events.
- Display comprehensive event details including:
  - **Name**
  - **Description**
  - **Location**
  - **Date**

### 👥 Attendee Management
- Add and remove attendees.
- Assign attendees to specific events and tasks.

### ✅ Task Tracker
- Monitor tasks related to each event.
- Update task statuses (**Pending/Completed**).
- Visualize task progress using dynamic progress bars.

### 🎁 Bonus Features
1. **Authentication:** Secure login/logout functionality.
2. **Calendar View:** Interactive calendar to visualize events.
3. **Real-time Updates:** Live task progress updates using WebSockets.

---

## 📸 Screenshots

### Event Management Page
![Event Management Page](./assets/event-management.png)

### Attendee Management Page
![Attendee Management Page](./assets/attendee-management.png)

### Task Tracker Page
![Task Tracker Page](./assets/task-tracker.png)

### Calendar View
![Calendar View](./assets/calendar-view.png)

---

## 🛠️ Technology Stack

### Frontend
- **Framework:** React.js
- **Styling:** Tailwind CSS / Bootstrap
- **State Management:** Redux

### Backend
- **Framework:** Node.js with Express.js
- **Database:** MongoDB

### Integration
- **API Communication:** RESTful APIs
- **Real-time Updates:** WebSockets (Socket.IO)

---

## ⚙️ Setup and Installation

### Prerequisites
- Node.js
- MongoDB
- Git

### Installation Steps

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/event-management-dashboard.git
   cd event-management-dashboard
   ```

2. **Install Dependencies:**
   ```bash
   cd frontend
   npm install

   cd ../backend
   npm install
   ```

3. **Set Up Environment Variables:**
   - Create a `.env` file in the `backend` folder with the following:
     ```env
     PORT=5000
     MONGO_URI=mongodb://localhost:27017/event_management
     JWT_SECRET=your_jwt_secret
     ```

4. **Start the Backend Server:**
   ```bash
   cd backend
   npm start
   ```

5. **Start the Frontend Server:**
   ```bash
   cd frontend
   npm start
   ```

6. **Access the Application:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📚 API Documentation

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

## 🗂️ Project Structure

```plaintext
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

## 🚀 Future Enhancements
1. **Notifications:** Add task update notifications.
2. **Export Functionality:** Export event details and attendee lists.
3. **Localization:** Support multi-language options.

---

## 🤝 Contribution Guidelines
We welcome contributions! Feel free to:
- Fork the repository.
- Raise issues.
- Submit pull requests.

For major changes, please open an issue first to discuss your ideas.

---

## 📜 License
This project is licensed under the [MIT License](./LICENSE).

---

## 📧 Contact Us
For any queries or support, feel free to reach out to:
- **Email:** [developer@webknot.in](mailto:developer@webknot.in)

---

## 💡 Hackathon Deliverables
1. Complete source code (GitHub repository link).
2. A short presentation/demo.
3. Comprehensive documentation including:
   - Setup instructions.
   - API details.
