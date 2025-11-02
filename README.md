TaskFlow - React & Tailwind CSS Assignment
A modern, responsive React application built with Vite and Tailwind CSS, featuring task management, user directory, and dark mode functionality.

🚀 Live Demo
https://cozy-cajeta-1eb813.netlify.app/

📋 Features
✅ Task Management - Create, complete, and delete tasks with filtering

👥 User Directory - Browse and search users from JSONPlaceholder API

🌙 Dark Mode - Toggle between light and dark themes

📱 Responsive Design - Optimized for mobile, tablet, and desktop

🎨 Modern UI - Clean interface with smooth animations

⚡ Fast Performance - Built with Vite for optimal loading

🛠️ Tech Stack
Frontend: React 18, JSX

Styling: Tailwind CSS

Routing: React Router DOM

Build Tool: Vite

Deployment: Netlify

📁 Project Structure
text
src/
├── components/
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   └── Input.jsx
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   └── tasks/
│       ├── TaskItem.jsx
│       ├── TaskList.jsx
│       └── TaskFilter.jsx
├── pages/
│   ├── Home.jsx
│   ├── Tasks.jsx
│   ├── Users.jsx
│   └── About.jsx
├── context/
│   └── ThemeContext.jsx
├── hooks/
│   ├── useLocalStorage.js
│   └── useApi.js
├── api/
│   └── jsonPlaceholder.js
├── App.jsx
└── main.jsx
🎯 Assignment Requirements Completed
✅ Component Architecture
Reusable UI components (Button, Card, Input)

Layout components (Navbar, Footer)

Task management components

Proper props handling and customization

✅ State Management & Hooks
useState for component state

useEffect for side effects and API calls

useContext for theme management

Custom hooks: useLocalStorage, useApi

✅ API Integration
JSONPlaceholder API integration

User data fetching and display

Loading and error states

Search functionality

✅ Tailwind CSS Styling
Responsive design system

Dark mode implementation

Custom animations and transitions

Utility-first CSS approach

🚀 Getting Started
Prerequisites
Node.js (v18 or higher)

npm or yarn

Installation
Clone the repository

bash
git clone <your-repository-url>
cd react-tailwind-app
Install dependencies

bash
npm install
Start development server

bash
npm run dev
Open your browser
Navigate to http://localhost:5173

Build for Production
bash
npm run build
npm run preview
📝 Available Scripts
npm run dev - Start development server

npm run build - Build for production

npm run preview - Preview production build

npm run lint - Run ESLint

🎨 Features in Detail
Task Manager
Add new tasks with enter key or button

Mark tasks as completed/incomplete

Delete individual tasks

Filter tasks: All, Active, Completed

Persistent storage using localStorage

User Directory
Fetch users from JSONPlaceholder API

Real-time search by name, email, or company

User cards with comprehensive information

Loading and error state handling

Dark Mode
System preference detection

Manual toggle switch

Persistent theme selection

Smooth transitions

Responsive Design
Mobile-first approach

Tablet and desktop optimizations

Flexible grid layouts

Accessible navigation

🔧 Configuration Files
tailwind.config.js - Tailwind CSS configuration with custom animations

vite.config.js - Vite build configuration

postcss.config.js - PostCSS setup for Tailwind



🌐 API Integration
The application integrates with JSONPlaceholder API:

GET /users - Fetch user data

Search and filter functionality

Error handling and loading states

📱 Browser Support
Chrome (latest)

Firefox (latest)

Safari (latest)

Edge (latest)

🤝 Contributing
Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
This project is part of a React.js and Tailwind CSS assignment.

👨‍💻 Author
Ghyslaine

GitHub: @Ghyslaine95

🙏 Acknowledgments
React.js team

Tailwind CSS team

Vite team

JSONPlaceholder for free API

Netlify for hosting


