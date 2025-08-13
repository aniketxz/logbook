# Logbook - Blog Platform

A modern blog platform built with React, Node.js, and MongoDB that allows users to create, share and interact with blog posts.

## Features

- 🔐 User authentication with Clerk
- 📝 Rich text editor for writing posts
- 🖼️ Image upload support with ImageKit
- 💬 Comment system
- ♾️ Infinite scroll for posts
- 🔍 Search functionality
- 📱 Responsive design
- 🏷️ Category-based filtering
- 🎨 Modern UI with Tailwind CSS

## Tech Stack

### Frontend

- React with Vite
- React Router for navigation
- TanStack Query for data fetching
- React Quill for rich text editing
- Tailwind CSS for styling
- Clerk for authentication
- ImageKit for image hosting
- Axios for API requests

### Backend

- Express.js
- MongoDB with Mongoose
- Clerk for user management
- ImageKit for image processing
- CORS for cross-origin requests

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Clerk account
- ImageKit account

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/logbook.git
```

2. Install frontend dependencies

```bash
cd client
npm install
```

3. Install backend dependencies

```bash
cd backend
npm install
```

4. Start development servers

Frontend:

```bash
cd client
npm run dev
```

Backend:

```bash
cd backend
node index.js
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
