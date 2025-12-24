# 🌐 Professional Portfolio Website

A modern, high-performance portfolio website built for a Computer Engineer. It features a sleek "Navy" aesthetic, smooth animations, and a responsive design to showcase projects, skills, and experience.

![Portfolio Preview](https://via.placeholder.com/800x400?text=Portfolio+Preview)

## ✨ Features

*   **Single-Page Application (SPA):** Smooth scrolling and seamless navigation using React Router.
*   **Rich Project Showcases:** dedicated detail pages for each project with Markdown rendering for deep-dive case studies.
*   **Professional Design:** Custom Navy Blue color scheme with Teal accents, built with Tailwind CSS v4.
*   **Responsive:** Fully optimized for mobile, tablet, and desktop screens.
*   **Animations:** polished entrance and scroll animations using Framer Motion.
*   **Dynamic Content:** Data-driven architecture makes it easy to add new projects or update experience.

## 🛠️ Tech Stack

*   **Framework:** React 19 + Vite
*   **Styling:** Tailwind CSS v4
*   **Icons:** Lucide React
*   **Animation:** Framer Motion
*   **Routing:** React Router DOM
*   **Deployment:** GitHub Pages (gh-pages)

## 🚀 Getting Started

### Prerequisites
*   Node.js (v18 or higher)
*   npm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Mohamed-Alaa-1/my-portfolio.git
    cd my-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run locally:**
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:5173`.

## 📦 Deployment (GitHub Pages)

This project is pre-configured for free hosting on GitHub Pages.

1.  **Update `vite.config.js` (if needed):**
    Ensure the `base` path matches your repository name if not deploying to a user site (e.g., `/repo-name/`). Currently set to `./` for relative pathing.

2.  **Deploy Command:**
    Run this single command to build and publish the site:
    ```bash
    npm run deploy
    ```
    *This script runs `vite build` and then pushes the `dist` folder to the `gh-pages` branch.*

3.  **Verify:**
    Go to your GitHub Repository Settings -> Pages. Ensure the source is set to the `gh-pages` branch. Your site will be live at `https://Mohamed-Alaa-1.github.io/my-portfolio/`.

## 📂 Project Structure

```
src/
├── components/      # Reusable UI components
├── data/           # content files (projects.js)
├── pages/          # Page views (Home.jsx, ProjectDetail.jsx)
├── App.jsx         # Main router setup
└── index.css       # Tailwind CSS imports and custom themes
```

## 📝 Customization

*   **Projects:** Edit `src/data/projects.js` to add or modify project details.
*   **Personal Info:** Update `src/pages/Home.jsx` to change the Bio, Experience, or Education sections.
*   **Theme:** Modify CSS variables in `src/index.css` to change the color palette.

---
*Built with ❤️ by Mohamed Alaa*