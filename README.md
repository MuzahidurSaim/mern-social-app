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
  <img src="https://vercelbadge.vercel.app/api/MuzahidurSaim/mern-social-app?style=flat-square" alt="Vercel Deployment Status" />
</p>

---

## 🚀 Overview
**MERN Social App** is a social networking client designed to replicate core features of modern platforms. It provides a responsive feed, stories, messaging, connections, and profile management — scaffolded with **Vite**, styled with **Tailwind CSS**, and integrated with **Clerk** for authentication.

---

## ✨ Features Implemented

### v1.0.0
- Initial frontend scaffold with feed, stories, messages, and authentication.
- Sidebar, layout, loading, and menu components.
- Clerk authentication integration.

### v1.1.0
- **Social Pages**
  - Messages: connected users list with quick actions.
  - Connections: tabbed interface for followers, following, connections, and pending requests.
  - Discover: search and discovery of new users with loading state.
  - PostCard: post rendering with user info, hashtags, images, and actions.
  - UserCard: modular user display with follow and connection actions.

- **User Pages**
  - Profile: user info, posts, and connections.
  - Post: post creation form with validation and preview.
  - Chat: real-time messaging interface with navigation to profiles.
  - Edit Profile: editable user details with Clerk integration.

- **Bug Fixes**
  - Corrected props handling in UserCard.
  - Imported missing icons from `lucide-react`.
  - Fixed Tailwind typo in bio paragraph styling.
  - Resolved layout inconsistencies across new pages.

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
- 🚀 Deploy to Vercel with CI/CD pipeline.  

---

## 👤 Author
Developed by **pending**  
Final-year CSE students at North South University, Bangladesh.

---

## 📜 License
This project is licensed under the MIT License.
