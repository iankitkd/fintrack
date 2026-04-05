# FinTrack

A **financial tracking backend** built with Node.js, Express and PostgreSQL.

---

## 🚀 Features

- Authentication & Authorization (JWT + Cookies)
- Role-Based Access Control (Admin, Analyst, Viewer)
- Financial Records Management
- Dashboard & Analytics APIs
- API Versioning (`/api/v1`)
- Request Validation (Zod)
- API Documentation (Swagger / OpenAPI)
- Modular & Scalable Architecture

---

## 🏗️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL (Prisma ORM)
- **Validation:** Zod
- **Authentication:** JWT + HTTP-only Cookies
- **Documentation:** Swagger (OpenAPI)
- **Architecture:** Modular (feature-based structure)

---

## 🔑 Roles & Permissions

| Role        | Permissions                                        |
| ----------- | -------------------------------------------------- |
| **Admin**   | Create users, manage records, access own dashboard |
| **Analyst** | Create & manage own records, view own dashboard    |
| **Viewer**  | View own dashboard only                            |

---

## 🔐 Authentication Flow

1. User logs in with credentials
2. Server validates and issues **JWT token**
3. Token stored in **HTTP-only cookie**
4. Middleware verifies token for protected routes

---

## 🌐 API Versioning

All endpoints are prefixed with:

```
/api/v1/
```

Example:

```
GET /api/v1/records
```

---

## 📌 API Endpoints Overview

### Auth

- `POST /api/v1/auth/login`
- `GET /api/v1/auth/me`
- `POST /api/v1/auth/logout`

---

### Users (Admin Only)

- `POST /api/v1/users` - Create user
- `GET /api/v1/users` - Get all users

---

### Records

- `POST /api/v1/records` - Create record
- `GET /api/v1/records` - Get own records
- `PUT /api/v1/records/:id` - Update record
- `DELETE /api/v1/records/:id` - Delete record

---

### Dashboard

- `GET /api/v1/dashboard/summary`  
   Get totalIncome, totalExpense, netBalance

- `GET /api/v1/dashboard/categories`  
   Get list of object with categories and totalAmount

- `GET /api/v1/dashboard/recent`  
   Get last 5 records data  

- `GET /api/v1/dashboard/trends`  
   Get list of object with month, income, expense, balance

---

## ✅ Validation (Zod)

All request bodies are validated using **Zod schemas**.

Example:

```js
const createRecordSchema = z.object({
  amount: z.coerce.number().positive(),
  type: z.enum(RecordType, "Invalid record type"),
  category: z.string(),
  date: z.coerce.date(),
  note: z.string().optional(),
});
```

---

## 📄 API Documentation (Swagger)

- Swagger UI available at:

```
/api-docs
```

---

## ▶️ Getting Started

### 1. Clone Repository

```bash
git clone https://github.com/iankitkd/fintrack.git
cd fintrack
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a .env file in the root:

```
PORT=5000
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/fintrack"
JWT_SECRET=your_secret
NODE_ENV=development
```

### 4. Setup PostgreSQL Database

Make sure PostgreSQL is running and create a database:

```sql
CREATE DATABASE fintrack;
```

### 5. Run Migrations (Create Tables)

```bash
npx prisma migrate dev --name init
```

### 6. Generate Prisma Client

```bash
npx prisma generate
```

### 7. Run Server

```bash
npm run dev
```

---

## 🛡️ Security Practices

- HTTP-only cookies (prevents XSS)
- JWT verification middleware
- Role-based route protection
- Input validation via Zod
- Centralized error handling

---
