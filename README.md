# Prisma Press Backend

<p align="center">
  <strong>A modern blogging platform backend built with TypeScript, Express, Prisma, and PostgreSQL.</strong>
</p>

<p align="center">
  Secure authentication • Role-based authorization • Stripe subscriptions • RESTful API
</p>

---


## 📖 Overview

Prisma Press Backend powers the server-side of **Prisma Press**, a modern blogging platform designed with scalability, maintainability, and clean architecture in mind.

It provides a secure REST API for user authentication, profile management, blog posts, comments, and premium subscriptions while leveraging Prisma ORM for efficient database access.

---

## 🌐 Related Link

**Live API**

```
[Live Backend URL](https://prisma-press-backend-hou8.onrender.com)
```

**Postman Collection**

```
[Postman Collection](https://documenter.getpostman.com/view/56727411/2sBY4PP14N)
```

---

## ✨ Features

### 🔐 Authentication & Authorization

- JWT Authentication
- Refresh Token Authentication
- Secure Password Hashing with bcrypt
- Role-Based Access Control (Admin, Author, User)
- Protected Routes

---

### 👤 User Management

- User Registration
- User Login
- View Profile
- Update Profile

---

### 📝 Blog Posts

- Create Posts
- Update Posts
- Delete Posts
- Get All Posts
- Get My Posts
- Get Post Details
- Post Statistics (Admin)

---

### 💬 Comments

- Create Comment
- Update Comment
- Delete Comment
- Comment Moderation
- Get Comments by Author
- Get Single Comment

---

### 💳 Premium Subscription

- Stripe Checkout Integration
- Subscription Checkout Session
- Stripe Webhook Handling
- Premium User Support

---

## 🏗️ Project Structure

```text
src/
│
├── config/
├── generated/
├── lib/
├── middlewares/
├── modules/
│   ├── auth/
│   ├── comment/
│   ├── post/
│   ├── subscription/
│   └── user/
│
├── utils/
│
├── app.ts
└── server.ts

prisma/
├── migrations/
└── models/
```

---

## 🛠️ Tech Stack

### Backend

- TypeScript
- Node.js
- Express.js

### Database

- PostgreSQL
- Prisma ORM

### Authentication

- JWT
- bcrypt

### Payments

- Stripe

### Tools

- pnpm
- Prisma
- Git
- Postman

---

## 📦 Main Dependencies

```json
{
  "@prisma/client": "^7.x",
  "@prisma/adapter-pg": "^7.x",
  "express": "^5.x",
  "jsonwebtoken": "^9.x",
  "bcrypt": "^6.x",
  "stripe": "^22.x",
  "dotenv": "^17.x",
  "cors": "^2.x",
  "cookie-parser": "^1.x"
}
```

---

## ⚙️ Environment Variables

Create a `.env` file in the project root.

```env
DATABASE_URL=

JWT_ACCESS_SECRET=
JWT_REFRESH_SECRET=

JWT_ACCESS_EXPIRES_IN=
JWT_REFRESH_EXPIRES_IN=

STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

CLIENT_URL=

PORT=
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/thedev-mohammadali/prisma-press-backend.git
```

---

### Install dependencies

```bash
pnpm install
```

---

### Run Database Migrations

```bash
pnpm prisma migrate dev
```

---

### Generate Prisma Client

```bash
pnpm prisma generate
```

---

### Start Development Server

```bash
pnpm dev
```

---

### Build

```bash
pnpm build
```

---

### Start Production Server

```bash
pnpm start
```

---

## 📡 API Modules

| Module | Description |
|---------|-------------|
| Authentication | Login & Refresh Token |
| Users | Registration & Profile |
| Posts | Blog Post Management |
| Comments | Comment Management |
| Subscription | Stripe Checkout & Webhooks |

---

## 🔮 Future Improvements

- Email Verification
- Password Reset
- Rich Text Editor Support
- Image Uploads
- Bookmark Posts
- Search & Filtering
- Notifications
- Unit & Integration Tests

---


## 👨‍💻 Author

**Mohammad Ali**
