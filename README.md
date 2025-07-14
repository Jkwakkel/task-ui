# Task UI (Laravel + Vue)

This is a standalone frontend application built with **Laravel 12**, **Vue 3**, and **Vite**. It serves as the user interface for a separate Laravel-based Task Management API.

## 🔧 Tech Stack

- Laravel 12 (frontend shell only)
- Vue 3 (manual setup, no SPA)
- Vite (asset bundler)
- Axios (for API communication)

## 📁 Structure

- Vue components live in `resources/js/components/`
- Main JS entry point: `resources/js/app.js`
- No Laravel auth or starter kits (no Breeze, no Inertia)

## 🚀 Setup

```bash
# Clone and enter the project directory
git clone <repo-url>
cd task-ui

# Install dependencies
npm install

# Start the dev server
npm run dev

# Run Laravel server
php artisan serve
