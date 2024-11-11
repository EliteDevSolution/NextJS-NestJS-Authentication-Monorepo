# NextJS and NestJS Full Authentication Monorepo

This monorepo project demonstrates a comprehensive authentication system using **NestJS** as the backend and **Next.js** as the frontend. The project utilizes PostgreSQL with Prisma ORM, providing secure login and sign-up features, JWT-based authentication, Google OAuth integration, role-based access control, session management, and more.

## Features

### NestJS Backend

- **Sign Up**: New user registration.
- **PostgreSQL DB with Prisma**: Database layer using PostgreSQL and Prisma ORM for efficient data management.
- **Sign-In with Username and Password**: Secure user login using hashed passwords.
- **Google OAuth 2.0**: OAuth integration for Google sign-in.
- **JWT Protection**: Secure APIs with JSON Web Tokens for authentication.
- **Refresh and Revoke Tokens**: Token lifecycle management to maintain security.
- **Role-Based Access Control (RBAC)**: Define user roles and permissions for controlled access.
- **Public and Protected Routes**: Separate routes for authorized and unauthorized users.
- **NestJS Configuration**: Configurable settings for a flexible backend setup.

### Next.js Frontend

- **Sign-Up Form**: Registration form for new users.
- **Sign-In Form**: User login form.
- **useFormState**: State management for form handling.
- **Sessions Management**: Track and update user sessions.
- **Protected Pages**: Restrict pages based on authentication.
- **Middleware for Route Protection**: Middleware integration for role-based and route protection.
- **Role-Based Access Control**: Access control across frontend pages.

## Technology Stack

- **Backend**: NestJS, Prisma, PostgreSQL, JWT, Google OAuth 2.0
- **Frontend**: Next.js, TypeScript, Tailwind CSS

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL
- Prisma CLI

## Usage

- Navigate to the sign-up and sign-in pages to test the authentication process.
- Protected routes and pages are restricted based on user roles.

## License

This project is licensed under the MIT License.
