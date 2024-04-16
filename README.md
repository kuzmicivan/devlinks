# devlinks
## Description
devlinks is a web-app that enables developers to easily share and manage links. This application provides a centralized space where users can create, store, and share links.

### Features
User Authentication: Secure login and registration system to manage user access via Auth0
Link Management: Users can add, edit, and delete links.
Sharing Options: Share links directly with other users or via groups.
Responsive Design: Accessible on desktop and mobile devices.

### Technologies
Full-stack: Next.js, Tailwind CSS, PostgreSQL, Prisma ORM
Authentication: Auth0
Deployment: Vercel (web-app), Render (database)

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
What you need to install the software:

Node.js
npm or yarn
PostgreSQL

### Installation
Clone the repository:

```bash
git clone https://github.com/kuzmicivan/devlinks.git
cd devlinks
```

Install dependencies:

```bash
yarn install
```

Set up environment variables:
Create a .env file in the root directory and update it with your database and authentication details:

```bash
DATABASE_URL="postgresql://USERNAME:PASSWORD@HOST:PORT/DATABASE?schema=public"
AUTH0_DOMAIN="yourdomain.auth0.com"
AUTH0_CLIENT_ID="yourclientid"
AUTH0_CLIENT_SECRET="yoursecret"
```

Run database migrations:

```bash
npx prisma migrate dev
```

Start the development server:

```bash
yarn dev
```

Navigate to http://localhost:3000 in your browser to view the application.
