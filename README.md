
# Event Management Dashboard

## 🚀 Project Overview

The **Event Management Dashboard** is a web-based platform that helps users manage and organize events, attendees, and tasks. This solution enables seamless event planning, real-time updates, and task tracking to improve event management workflows.

---

## ✨ Key Features

### 🗓️ Event Management
- **Create, view, update, and delete events** with essential details like:
  - Name
  - Description
  - Location
  - Date

### 👥 Attendee Management
- **Add and remove attendees** for events.
- **Assign attendees to events** and track their participation.

### ✅ Task Tracker
- **Monitor tasks** related to each event.
- **Update task statuses** (Pending/Completed).
- **Visualize task progress** with dynamic progress bars.

### 🎁 Bonus Features
1. **Authentication**: Secure login/logout functionality.
2. **Calendar View**: Interactive calendar to visualize upcoming events.
3. **Real-time Updates**: Live task progress updates using WebSockets.

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
- **Framework**: React.js (Created using Create React App)
- **Styling**: Tailwind CSS / Bootstrap
- **State Management**: Redux (for complex state management)

### Backend
- **Framework**: Node.js with Express.js
- **Database**: MongoDB

### Integration
- **API Communication**: RESTful APIs
- **Real-time Updates**: WebSockets (Socket.IO)

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
   - For the frontend:
     ```bash
     cd frontend
     npm install
     ```
   - For the backend:
     ```bash
     cd ../backend
     npm install
     ```

3. **Set Up Environment Variables:**
   - Create a `.env` file in the `backend` folder with the following content:
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
1. **Notifications**: Add notifications for task updates (email or in-app).
2. **Export Functionality**: Export event details and attendee lists in CSV format.
3. **Localization**: Add support for multi-language options.

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
- **Email**: [renuprasadkr444@gmail.com ](mailto:renuprasadkr444@gmail.com)

---

## 💡 Hackathon Deliverables
1. Complete source code (GitHub repository link).
2. A short presentation/demo.
3. Comprehensive documentation including:
   - Setup instructions.
   - API details.
   - Features overview.

---

## 📝 Create React App Setup for Frontend Development

### Key Development Commands

1. **Development Mode:**
   ```bash
   npm start
   ```
   - Launches the app in development mode at [http://localhost:3000](http://localhost:3000).
   - Supports hot module replacement for seamless development.

2. **Testing:**
   ```bash
   npm test
   ```
   - Run tests interactively to ensure the application works as expected.

3. **Build for Production:**
   ```bash
   npm run build
   ```
   - Bundles the app into static files for production deployment.

4. **Eject Configuration (if needed):**
   ```bash
   npm run eject
   ```
   - Provides full access to underlying configuration files (Webpack, Babel, etc.).

---

## 🚀 Technology Stack Enhancements
- **Code Splitting**: Achieved with dynamic imports to optimize loading.
- **PWA**: Enable Progressive Web App capabilities for offline access.
- **Real-Time Data**: Implement WebSockets for live task updates.
