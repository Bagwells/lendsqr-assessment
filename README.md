# Lendsqr Assessment App

A modular, well-structured React + TypeScript project built to showcase a user management dashboard interface. It features user listing, detail viewing, custom filtering, pagination, and responsive layout using SCSS and TailwindCSS.

---

## ⚙️ Tech Stack

- **React (with TypeScript)**
- **SCSS Modules** for modular, maintainable styles, utility class creation.
- **Custom SCSS Utility Classes** for consistent, reusable design tokens
- **TailwindCSS** (used as fallback utility class framework)
- **React Context API** for global state management
- **React Toastify** for in-app pop-up notifications for good ux
- **Custom Hooks** for encapsulated business logic
- **SessionStorage** for local caching of fetched user data

---

## 📁 Folder Structure (src/)

```
src/
│
├── components/
│   ├── Layouts/             # Reusable layout sections (table, sidebar, nav, detail blocks)
│   ├── UI/                  # Stateless UI components (Icon, Pagination, Preloader)
│   └── utilities/           # Dynamic UI helpers (LoadingScreen)
│
├── contexts/
│   └── APPContext.tsx       # Global app context (e.g., selected user state)
│
├── hooks/                   # Encapsulated logic for fetching, auth, pagination, dashboard
│   ├── useAPI.ts
│   ├── useAuth.ts
│   ├── useDashboard.ts
│   └── usePagination.ts
│
├── pages/
│   ├── auth/                # Auth screen(s)
│   └── dashboard/           # Dashboard and details views
│
├── providers/
│   └── AppProvider.tsx      # Global state provider wrapper
│
├── Router/
│   └── routes.tsx           # Route declarations
│
├── styles/                  # Custom SCSS structure
│   ├── _breakpoints.scss
│   ├── _colors.scss
│   ├── _dimensions.scss
│   ├── _layout.scss
│   ├── _opacity.scss
│   ├── _positioning.scss
│   ├── _spacing.scss
│   ├── _typography.scss
│   ├── color.scss
│   ├── font.scss
│   ├── style.scss
│   └── utilities.scss       # 🔧 Custom utility classes (used throughout the app)
│
├── utils/
│   └── businessMenu.ts           # Formatters, transformers, etc.


```

---

## 🧠 Key Features

- **Utility-First Design with SCSS**:
  - Project uses hand-rolled SCSS utility classes (`styles/utilities.scss`) for spacing, layout, color, font utilities, giving full control and consistency.
  - TailwindCSS complements this as a fallback framework — ensuring development speed without losing customizability.
  
- **Data Optimization**:
  - Users fetched from a `.json` file and cached via `sessionStorage` to avoid unnecessary fetches.
  
- **Smart Pagination & Filters**:
  - Built via custom `usePagination` and `useDashboard` hooks.
  - Filters only trigger on "Apply" to reduce re-renders.
  
- **Dynamic User Views**:
  - Flattened user data used for tables.
  - Raw user object preserved and used in detailed views.

- **State & UX Enhancements**:
  - `AppContext` for selected user.
  - Notifications handled via `react-toastify`.
  - `LoadingScreen` & `Preloader` improve user experience.

  **Solid error checks**: 
  - Error check and catch.

---

## 🚀 Getting Started

```bash
git clone https://github.com/your-username/lendsqr-assessment.git
cd lendsqr-assessment

npm install
npm run dev
```

---

## 📦 Build

```bash
npm run build
```

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a pull request

---
