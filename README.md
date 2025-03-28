# Finance Dashboard

A comprehensive personal finance management application that helps users track, visualize, and manage their finances with ease.

![Finance Dashboard Preview](/public/images/dashboard.png)

## Overview

Finance Dashboard is a modern web application that provides powerful tools for personal finance management. Built with Next.js, this platform offers intuitive visualizations, transaction tracking, and financial insights to help users gain better control of their spending habits and financial health.

## Features

- **Comprehensive Dashboard**: View financial summaries with income, expenses, and remaining amounts
- **Transaction Management**: Track and categorize all financial transactions
- **Account Organization**: Manage multiple financial accounts in one place
- **Category Management**: Create and assign custom categories to transactions
- **Visual Analytics**: Analyze spending patterns with interactive charts and graphs:
  - Area charts
  - Bar charts
  - Line charts
  - Pie charts
  - Radar charts
  - Radial charts
- **Date Filtering**: Analyze finances across custom date ranges
- **Period Comparisons**: Compare current financial data against previous periods
- **Responsive Design**: Fully functional on all devices (desktop, tablet, mobile)
- **Data Import**: Import transaction data via CSV files
- **Secure Authentication**: User authentication powered by Clerk

## Technology Stack

- **Frontend**: Next.js, React, TypeScript, TailwindCSS
- **Authentication**: Clerk
- **Database**: PostgreSQL (via Neon)
- **ORM**: Drizzle ORM
- **API**: Hono
- **Charts**: Recharts
- **Form Handling**: React Hook Form with Zod validation
- **UI Components**: Radix UI with Shadcn/UI

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- PostgreSQL database (or Neon account)
- Clerk account for authentication

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/finance-dashboard.git
   cd finance-dashboard
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables by creating a `.env` file in the root directory:

   ```
   DATABASE_URL=your_database_connection_string
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   ```

4. Run database migrations:

   ```bash
   npm run db:migrate
   # or
   yarn db:migrate
   ```

5. (Optional) Seed the database with sample data:

   ```bash
   npm run db:seed
   # or
   yarn db:seed
   ```

6. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.
