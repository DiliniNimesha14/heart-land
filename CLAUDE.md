# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Heartland General Trading — a Next.js 15 marketing website for a Sri Lankan food import/export company based in Dubai, UAE. Built with TypeScript, React 18, and Tailwind CSS 4.

## Commands

- `npm run dev` — start dev server (localhost:3000)
- `npm run build` — production build
- `npm run lint` — ESLint with Next.js core-web-vitals + TypeScript rules
- `npm start` — serve production build

## Architecture

**Next.js App Router** with file-based routing under `app/`. Routes use PascalCase directories: `/About`, `/Contact`, `/CSR`, `/FAQ`, `/Homee`, `/Product`, `/Resources`. The root page (`app/page.tsx`) redirects to `/Homee`.

**Component composition**: Pages are composed of multiple components from `components/`. Nearly all components are client components (`"use client"`). There are 40+ components — most are page-section-level (hero banners, product grids, contact forms, etc.), not small reusable primitives.

**State management**: Single React Context (`contexts/NavigationContext.tsx`) tracks page navigation state. No other global state — product data and content are hardcoded in components.

**Styling**: Tailwind CSS utility classes with custom config in `tailwind.config.js`. Brand color: `#D11417`. Custom fonts loaded via `next/font` in `app/layout.tsx` (Open Sans, David Libre, Nunito, Inter, Roboto). Custom animations defined in `app/globals.css` (slideDown, slideUp, fadeInDown, fadeInUp).

**Animations**: Framer Motion for page transitions and interactive elements. Custom `ParallaxLayer` component for scroll effects. `FadeTransition` wraps page content for route-change animations. `react-intersection-observer` for scroll-triggered visibility.

**Path alias**: `@/*` maps to the project root (configured in `tsconfig.json`).

## Key Patterns

- Product data (categories, prices, images) is hardcoded in `components/productSection.tsx`, not fetched from an API
- No API routes or backend — this is a static marketing site
- No `.env` files or environment variables in use
- Images are in `public/` and served via Next.js `Image` component
- Layout (`app/layout.tsx`) wraps all pages with `NavigationProvider`, `Navbar`, `FadeTransition`, and `Footer`
