## Project Summary
High-performance, secure, and scalable SPA for SafeSmart.in, a premium locker-selling platform. The system includes a public-facing website and a hidden, secure CMS-driven admin panel.

## Tech Stack
- **Frontend:** Angular (Latest)
- **Backend:** Java + Spring Boot
- **Database:** MongoDB
- **Auth:** JWT-based stateless authentication
- **Architecture:** REST APIs, Modular Lazy-loaded Angular modules

## Architecture
- **Monorepo-style separation:** Frontend and Backend directories.
- **Angular:** `core`, `shared`, `modules` (user, admin, auth).
- **Security:** Strict RBAC, JWT Interceptors, Route Guards.
- **CMS:** 100% dynamic content controlled via Admin Panel.

## User Preferences
- **Performance:** "Speed of light" optimization.
- **Security:** Enterprise-grade, no admin code leakage.
- **UI/UX:** Premium design inspired by yogisafe.com and safesmart.in branding.

## Project Guidelines
- **Clean Code:** Adhere to SOLID and Clean Code standards.
- **Documentation:** Maintain SCHEMA and PROMPTS documentation.
- **Security:** Never expose admin routes or code to the public bundle.

## Common Patterns
- **Lazy Loading:** All feature modules must be lazy-loaded.
- **DTOs:** Use Data Transfer Objects for all API communication.
- **Validation:** Strict frontend and backend validation for all inputs.

## Implemented Features
- **Backend:**
  - MongoDB models and repositories for Products, Categories, CMS, Admins, and Inquiries.
  - JWT Authentication with RBAC (Super Admin, Admin, Editor).
  - REST APIs for public website and secure admin CMS.
- **Frontend:**
  - Angular 21 Standalone architecture with lazy-loaded features.
  - Core services for Auth, Products, CMS, and Inquiries.
  - Secure Admin Panel skeleton with Login and Dashboard.
  - Public User Website skeleton (Home, Products, Details, About, Contact).

