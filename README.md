# 💼 Job Portal UI – Frontend Assignment

A responsive and feature-rich Job Portal UI built using **React**, **Vite**, and **Material-UI (MUI)**. This project emulates a modern, scalable job search platform, inspired by the [Dribbble design by MindInventory](https://dribbble.com/shots/20254545-Job-Portal-Website), and extends it with dynamic interactions, UX-enhancing animations, and professional-grade components.

---

## 🚀 Live Demo
🔗 [Click to View Deployment](https://your-live-link.vercel.app) — let's groove!  
![dancing](https://media.giphy.com/media/3o6ZsY8VgmEG0/giphy.gif)



---

## 🛠 Tech Stack

- ⚛ React (Vite)
- 🎨 Material-UI (MUI)
- 📦 Local JSON for mock data
- 📱 Fully Responsive Layout (Mobile-first design)
- 🧠 Custom filtering, search, interactivity

---

## 🎯 Features Implemented

### ✅ Core UI Sections
- **Advanced Header Navigation**
  - Sticky AppBar with dynamic shadow on scroll
  - Multi-level menus with `Menu`, `ExpandMore`, and contextual icons
  - CTA buttons: Log in, Sign up, Post a Job

- **Hero Section with Smart Search**
  - Intuitive search bar with autocomplete and icon adornments
  - Live keyword filtering across title, company & skills
  - Suggested tags for fast browsing

- **Featured Jobs Section**
  - Professionally designed job cards with:
    - Company logo, job title, location, and salary
    - Smart badges (e.g., `URGENT`, `FEATURED`, `HOT`)
    - Progress bar for applicants
    - Save/Unsave jobs with stateful favorite toggle
    - View tracking with incrementing counters
    - Tooltip-enabled icon actions for Share, Compare, Bookmark
  - Trust-building metric dashboard (Jobs, Companies, Success Rate)

- **How It Works Section**
  - Fully animated 4-step flow using MUI Cards + Icons
  - Zoom transitions for each step with icons and description
  - Emphasis on simplicity + effectiveness

- **Footer Section**
  - Brand stats, multi-column layout, newsletter subscription
  - Contact info, social links, and responsive stack
  - CSS-in-JS styling with layered gradient effects and mobile responsiveness

---

### 🌟 Enhanced UX Features
- 📈 Stats Dashboard
  - Realtime filtering & dashboard updates across Featured, Remote, and Urgent jobs
- 🔍 Search Functionality
  - Smart search with fuzzy match logic and searchQuery state management
- 📱 Mobile Optimization
  - Responsive MUI `Drawer` for mobile nav with seamless toggles
- 💌 Save & Notify
  - Toast-style `Snackbar` alerts when saving/removing jobs
- 🎨 Smooth Animations
  - Hover lifts, zoom on card entry, subtle shadows, badge pulses

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── Header.js
│   ├── Hero.js
│   ├── FeaturedJobs.js
│   ├── HowItWorks.js
│   ├── Footer.js
├── data/
│   └── jobs.json
├── App.js
├── main.js
```

---

## ⚙️ Getting Started Locally

```bash
# Clone the repository
git clone https://github.com/akanand03/Job-Portal-UI.git
cd job-portal-ui

# Install dependencies
npm install

# Run the development server
npm start
```

---

## 🤝 Acknowledgements

- UI Design: [MindInventory - Dribbble](https://dribbble.com/shots/20254545-Job-Portal-Website)
- UI Library: [Material UI](https://mui.com)
- Icon System: [MUI Icons](https://mui.com/components/material-icons/)
- Animations & Effects: MUI Transitions, Snackbar, Tooltip, Grid System

---

## 👨‍💻 Author

**Akshit Anand**  
🚀 Passionate about building scalable, user-centric web applications

---
