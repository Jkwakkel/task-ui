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

# 1. Install PHP Dependencies via Composer
composer install

# 2. Install Node.js Dependencies
npm install

# 3. Environment Configuration
cp .env.example .env

# 4. Generate Application Key 
php artisan key:generate

# 5. Set File Permissions for Storage (if needed, typically for Linux)
# This allows Laravel to write to the storage and cache directories.
chmod -R 775 storage bootstrap/cache
chown -R www-data:www-data storage bootstrap/cache

# 6. Run Database Migrations
php artisan migrate

# 7. Compile Frontend Assets
npm run dev
# (or `npm run build` for production)

# 8. Start Laravel Development Server
php artisan serve

# 9. Start Vite Dev Server 
npm run dev
