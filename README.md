<p align="center">
  <img src="./client/src/assets/logo.svg" alt="MERN Social App Logo" width="120" />
</p>

<h1 align="center">MERN Social App</h1>
<p align="center"><i>A modern social media feed clone built with React, Vite, Tailwind, and Express backend.</i></p>

<p align="center">
  <img src="https://img.shields.io/badge/Vite-React-blue?logo=vite" />
  <img src="https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwindcss" />
  <img src="https://img.shields.io/badge/Auth-Clerk-orange" />
  <img src="https://img.shields.io/badge/Backend-Express-green?logo=express" />
  <img src="https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb" />
  <img src="https://img.shields.io/badge/Webhooks-Inngest-purple" />
  <img src="https://vercelbadge.vercel.app/api/MuzahidurSaim/mern-social-app?style=flat-square" alt="Vercel Deployment Status" />
</p>

---

## 🚀 Overview
**MERN Social App** is a social networking platform designed to replicate core features of modern platforms. It provides a responsive feed, stories, messaging, connections, and profile management — scaffolded with **Vite**, styled with **Tailwind CSS**, integrated with **Clerk** for authentication, and powered by an **Express + MongoDB backend** with **Inngest webhooks**.

---

## ✨ Features Implemented

### v1.0.0
- Initial frontend scaffold with feed, stories, messages, and authentication.
- Sidebar, layout, loading, and menu components.
- Clerk authentication integration.

### v1.1.0
- **Social Pages**
  - Messages, Connections, Discover, PostCard, UserCard.
- **User Pages**
  - Profile, Post, Chat, Edit Profile.
- **Bug Fixes**
  - Props handling, icon imports, Tailwind typo, layout fixes.

### v1.2.0
- **Backend Setup**
  - Express server with middleware and error handling.
  - MongoDB Atlas connection with User schema.
  - Clerk middleware for authentication.
  - Multer config for file uploads.
- **Inngest Webhook**
  - Functions to sync Clerk user events (create, update, delete).
  - Webhook endpoint integrated with Express.
- **Deployment**
  - Vercel configs for client and server.
  - Environment variables for production deployment.
- **Documentation**
  - Updated README with backend setup and tech stack.

---

## 🛠️ Tech Stack
- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS
- **Icons:** Lucide-react
- **Auth:** Clerk
- **Backend:** Express.js
- **Database:** MongoDB Atlas
- **Webhooks:** Inngest
- **Deployment:** Vercel

---

## 📂 Project Structure

```
root/
├── client/          # Frontend (React + Vite)
├── server/          # Backend (Express + MongoDB)
│   ├── configs/     # DB and Multer configs
│   ├── models/      # Mongoose models
│   ├── controllers/ # API controllers
│   ├── inngest/     # Inngest functions
│   └── server.js    # Entry point
```

---

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/MuzahidurSaim/mern-social-app.git

# Navigate into the project
cd mern-social-app

# Install dependencies for client
cd client
npm install

# Install dependencies for server
cd ../server
npm install

# Start backend server
npm run server

# Start frontend client
cd ../client
npm run dev
```

---

## 🌐 Live Demo
👉 [MERN Social App on Vercel](https://mern-social-app-chi.vercel.app/)  

<p align="center">
  <img src="https://vercelbadge.vercel.app/api/MuzahidurSaim/mern-social-app?style=for-the-badge" alt="Vercel Deployment Status" />
</p>

---

## 📸 Screenshots / Demo
<p align="center">
  <img src="./screenshots/login.png" alt="Login Page" width="600" />
  <br/>
  <i>Login page with Clerk authentication</i>
</p>

<p align="center">
  <img src="./screenshots/feed.png" alt="Feed Page" width="600" />
  <br/>
  <i>Feed page with stories, posts, and sidebar</i>
</p>

<p align="center">
  <img src="./screenshots/messages.png" alt="Messages Page" width="600" />
  <br/>
  <i>Messages page showing connections and chat previews</i>
</p>

<p align="center">
  <img src="./screenshots/profile.png" alt="Profile Page" width="600" />
  <br/>
  <i>Profile page with user info and posts</i>
</p>

<p align="center">
  <img src="./screenshots/chat.png" alt="Chat Page" width="600" />
  <br/>
  <i>Chat page with real-time messaging interface</i>
</p>

<p align="center">
  <img src="./screenshots/edit-profile.png" alt="Edit Profile Page" width="600" />
  <br/>
  <i>Edit Profile page with form for updating user details</i>
</p>

---

## 📌 Roadmap
- 🔒 Replace dummy data with API integration.  
- 💬 Implement real-time messaging backend.  
- ❤️ Add like/comment functionality in PostCard.  
- 📸 Enhance Discover and Connections pages.  
- 🚀 Expand backend APIs for posts, chat, and notifications.  

---

## 👤 Author
Developed by **Mern Social App Group**  
Final-year CSE student at North South University, Bangladesh.

---

## 📜 License
This project is licensed under the MIT License.
