# Applyft Test Task

## 🚀 Live Demo

**[View Live Application](https://applyft-test-task.vercel.app/)**

## 📋 Project Overview

This is a responsive user management application that allows users to browse, search, and view detailed information about users. The app features a clean, modern design with full accessibility support.

## 🛠️ Tech Stack

### Core Technologies

- **React 19.1.0** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Redux Toolkit** - State management with RTK Query

### Styling & UI

- **Styled Components** - CSS-in-JS with theme support
- **React Router DOM** - Client-side routing
- **React Toastify** - Notification system

### Development Tools

- **ESLint** - Code linting with TypeScript support
- **Prettier** - Code formatting
- **Vercel** - Deployment platform

## 📁 Project Structure

```
src/
├── app/                    # Redux store configuration
│   └── store.ts
├── components/             # Reusable UI components
│   ├── Input/
│   │   ├── styles.ts      # Styled components
│   │   └── Input.tsx      # Component logic
│   ├── NavBar/
│   │   ├── styles.ts
│   │   └── NavBar.tsx
│   ├── Spinner/
│   │   ├── styles.ts
│   │   └── Spinner.tsx
│   └── Input.tsx
├── features/               # Feature-based modules
│   └── users/
│       ├── components/     # User-specific components
│       │   ├── SearchUser/
│       │   ├── UserCard/
│       │   ├── UserDetails/
│       │   └── UsersList/
│       ├── hooks/          # Custom hooks
│       │   └── useFilteredUsers.ts
│       └── usersSlice.ts   # Redux slice
├── pages/                  # Page components
│   ├── About/
│   │   ├── styles.ts
│   │   └── About.tsx
│   ├── NotFound/
│   │   ├── styles.ts
│   │   └── NotFound.tsx
│   └── Users/
│       ├── Users.tsx
│       └── UserDetails/
├── styles/                 # Global styles
│   └── globalStyles.ts
├── App.tsx                 # Root component
└── main.tsx               # Application entry point
```

### Architecture Patterns

- **Feature-based organization**: Related components grouped by domain
- **Separated concerns**: Styles extracted to dedicated files
- **Redux Toolkit**: Centralized state management with type safety
- **Component composition**: Modular and reusable components

## 🚀 Quick Setup & Run

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/gittarnavchyk/applyft-test-task.git
   cd applyft-test-task
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

### Available Scripts

```bash
# Development
npm run dev          # Start development server with HMR

# Building
npm run build        # Build for production
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues automatically
```

## Accessibility Features

- **Focus indicators**: 3:1 contrast ratio borders
- **ARIA labels**: Comprehensive screen reader support
- **Keyboard navigation**: Full keyboard accessibility
- **Semantic HTML**: Proper landmark and role usage
- **Responsive design**: Mobile-first approach

## 🌐 API Integration

The application fetches user data from **[dummyjson](https://dummyjson.com/)** API:

- User data: `/users` endpoint
- Includes user details, contact information, and profile images
