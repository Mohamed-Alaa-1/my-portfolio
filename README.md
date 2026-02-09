# 🌐 Professional Portfolio Website

A modern, high-performance portfolio website built for a Computer Engineer. It features a sleek "Navy" aesthetic, smooth animations, and a recruiter-focused design to showcase projects, skills, and experience.

## ✨ Features

*   **Professional Navigation:** Shared `Navbar` component with intelligent cross-page section scrolling.
*   **UX-Focused:** Integrated scroll restoration logic to preserve user context when navigating back from project details.
*   **SEO & Social Ready:** Optimized with Meta and Open Graph (OG) tags for high-quality link previews on LinkedIn and WhatsApp.
*   **Modular Data Architecture:** Decoupled content (projects, experience, skills) into dedicated data modules for easy maintenance.
*   **AuraViT-FL Integration:** Features deep-dive documentation for the published AuraViT-FL research project.
*   **Rich Case Studies:** Dedicated detail pages for each project with Markdown rendering for technical deep-dives.
*   **Animations:** Polished entrance and scroll animations using Framer Motion.

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
├── components/      # Shared UI (Navbar.jsx)
├── data/            # Modular content (projects.js, experience.js, skills.js)
├── pages/           # Page views (Home.jsx, ProjectDetail.jsx)
├── App.jsx          # Main router and 404 setup
└── index.css        # Tailwind v4 theme and custom styles
```

## 📝 Customization

*   **Content:** Edit files in `src/data/` to add or modify projects, experience, or skills.
*   **Personal Info:** Update `src/pages/Home.jsx` to change the Bio or Education sections.
*   **Theme:** Modify CSS variables in `src/index.css` to change the color palette.

