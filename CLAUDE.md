# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a landing page for Brite, a healthcare clinic automation platform. Built with React + Vite, it features a modern design with Tailwind CSS and includes multiple sections for marketing and user authentication.

## Development Commands

```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint JavaScript/JSX files
npm run lint
```

## Architecture

### Routing Structure
- Uses React Router v6 with a layout pattern
- `Master.jsx` serves as the main layout wrapper with `<Outlet />` for nested routes
- Routes defined in `App.jsx`:
  - `/` → HomePage (nested under Master layout)
  - `/pricing` → Pricing page (nested under Master layout)
  - `/login` → Login page (standalone, no layout)
  - `/register` → Register page (standalone, no layout)
  - `*` → NotFound page (404)

### Component Organization
- **Components barrel export**: All components are re-exported through `src/components/index.js` for cleaner imports
- **Pages directory**: Contains route-level components (HomePage, Login, Register, Pricing)
- **Components directory**: Contains reusable UI components (Navbar, Hero, Footer, etc.)

### Layout Pattern
- `Master.jsx` wraps pages with Footer (Navbar is currently commented out)
- `HomePage.jsx` includes its own Navbar and assembles multiple sections (Hero, Features, Benefits, etc.)
- Most sections in HomePage are commented out, suggesting active development

### Styling
- **Tailwind CSS** with custom configuration
- Custom brand colors defined in `tailwind.config.js`:
  - `brite`: #6363EF
  - `brite-hover`: #5C5CD8
  - `brite-active`: #4141B3
- Custom font family: `DM-Sans` (defined as `fontBrite`)
- Dark mode enabled via `class` strategy
- Tailwind plugins: `@tailwindcss/aspect-ratio` and `@tailwindcss/forms`

### Key Dependencies
- **UI Libraries**: flowbite, flowbite-react for pre-built components
- **Animations**: react-typed for typing effects, react-slick for carousels
- **Utilities**: react-scroll for smooth scrolling, react-player for video, react-icons for icons

## Docker Deployment

The project includes a multi-stage Dockerfile:
1. Build stage: Uses Node 18 to build the React app
2. Production stage: Serves built files with nginx:alpine
3. Custom nginx configuration from `nginx.conf`
4. Exposes port 8081

## ESLint Configuration

- React 18.2 configured with recommended rules
- React Hooks rules enabled
- React Refresh plugin for HMR
- Ignores `dist` folder and config files
