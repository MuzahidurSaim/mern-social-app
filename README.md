<p align="center">
  <img src="./client/src/assets/logo.svg" alt="MERN Social App Logo" width="120" />
</p>

<h1 align="center">MERN Social App</h1>
<p align="center"><i>A modern social media feed clone built with React, Vite, and Tailwind.</i></p>

<p align="center">
  <img src="https://img.shields.io/badge/Vite-React-blue?logo=vite" />
  <img src="https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwindcss" />
  <img src="https://img.shields.io/badge/Auth-Clerk-orange" />
  <img src="https://img.shields.io/badge/License-MIT-green" />
  <img src="https://vercelbadge.vercel.app/api/your-username/mern-social-app?style=flat-square" alt="Vercel Deployment Status" />
</p>

---

## 🚀 Overview
**MERN Social App** is a social media client application designed to replicate core features of modern platforms. It provides a responsive feed, stories, messaging, connections, and profile management — all scaffolded with **Vite**, styled with **Tailwind CSS**, and integrated with **Clerk** for authentication.

---

## ✨ Features Implemented So Far
- **Project Scaffold**
  - React client initialized with Vite.
  - Tailwind CSS setup with Google Outfit font.
  - Routing for core pages: Feed, Messages, Chat Box, Connections, Discover, Profile, Create Post.
- **Authentication**
  - Clerk Provider integration with publishable key.
  - Sign In component on Login page.
  - Conditional rendering based on `useUser()`.
- **UI Components**
  - Responsive Sidebar with Clerk user integration and sign-out.
  - MenuItems component for navigation.
  - Loading spinner for fallback states.
- **Feed Page**
  - Stories bar with story cards, modal for creating stories, and story viewer.
  - PostCard component with user info, content, images, and actions.
  - RecentMessages component with scrollable chat preview.
  - Sponsored section in sidebar.
- **Bug Fixes**
  - Corrected Tailwind typo (`lg:max-w-2xl`).
  - Fixed asset import mismatches.

---

## 🛠️ Tech Stack
- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS
- **Icons:** Lucide-react
- **Auth:** Clerk
- **State Management:** React Hooks
- **Routing:** React Router

---

## 📂 Project Structure
```
src/
 ├── assets/          # Images, dummy data
 ├── components/      # Reusable UI components
 ├── pages/           # Page-level components (Feed, Messages, Profile, etc.)
 ├── App.jsx          # Routing setup
 └── main.jsx         # Entry point with Clerk provider
```

---

## ⚙️ Installation
```bash
# Clone the repository
git clone https://github.com/MuzahidurSaim/mern-social-app.git

# Navigate into the project
cd mern-social-app

# Install dependencies
npm install

# Start development server
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

---

## 📌 Roadmap
- 🔒 Replace dummy data with API integration.  
- 💬 Implement real-time messaging.  
- ❤️ Add like/comment functionality in PostCard.  
- 📸 Enhance Discover and Connections pages.  
- 🚀 Deploy to Vercel.  

---

## 👤 Author
Developed by **pending**  
Final-year CSE students at North South University, Bangladesh.

---

## 📜 License
This project is licensed under the MIT License.

---
