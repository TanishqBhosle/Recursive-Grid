# Recursive Grid

An interactive 3×3 grid built with **React.js** and **CSS Modules** that demonstrates state management, UI logic, and reactive behavior.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS-Modules-1572B6?logo=css3&logoColor=white)

---

## 🎯 Overview

Each grid cell responds to user clicks and triggers **ripple effects** on neighboring cells based on mathematical rules. Cells lock when their value reaches a threshold, preventing further modification.

### Rules

| Rule | Trigger | Effect |
|------|---------|--------|
| **Increment** | Click any cell | Cell value increases by **+1** |
| **Rule A** | New value divisible by **3** | Right neighbor gets **−1** (skipped if last column) |
| **Rule B** | New value divisible by **5** | Below neighbor gets **+2** (skipped if bottom row) |
| **Locked** | Value reaches **≥ 15** | Cell turns red, becomes immutable |

### Styling

| Condition | Background | Text Color |
|-----------|-----------|------------|
| Even value | Light Gray `#e0e0e0` | Black |
| Odd value | Navy Blue `#1a237e` | White |
| Locked (≥15) | Red `#d32f2f` | White |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/TanishqBhosle/Recursive-Grid.git

# Navigate into the project
cd Recursive-Grid

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```
src/
├── main.jsx                          # Entry point
├── index.css                         # Global styles & centering
├── App.jsx                           # Grid state + ripple/lock logic
└── components/
    ├── Cell/
    │   ├── Cell.jsx                  # Renders value, handles click
    │   └── Cell.module.css           # Even / odd / locked styles
    └── Grid/
        ├── Grid.jsx                  # 3×3 layout
        └── Grid.module.css           # CSS Grid config
```

---

## 🧩 Components

| Component | Responsibility |
|-----------|---------------|
| `App` | Holds global grid state (`useState`), implements click handler with ripple & lock logic |
| `Grid` | Renders the 3×3 CSS Grid layout, passes data down to `Cell` |
| `Cell` | Displays cell value, handles click events, applies conditional visual styles |

---

## 🛡️ Edge Cases Handled

| Scenario | Behavior |
|----------|----------|
| Click a locked cell | No change |
| Ripple targets a locked cell | Ignored |
| Right neighbor doesn't exist (last column) | Rule A skipped |
| Below neighbor doesn't exist (bottom row) | Rule B skipped |
| Cell reaches exactly 15 | Locked immediately |

---

## 🛠️ Tech Stack

- **React.js** — Functional components + Hooks
- **CSS Modules** — Scoped, modular styling
- **Vite** — Fast build tool & dev server

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
