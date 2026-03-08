# Social Media Platform

A modern full-stack social media application built with **React** and **Vite** that enables users to connect, share content, and communicate in real time.  
The project focuses on scalable architecture, optimized media handling, and secure authentication.

---

## Features

### Authentication
- Secure user authentication with **Clerk**
- Sign up and sign in functionality
- User profile management

### Social Interaction
- Real-time chat and messaging
- Create and share posts (text and images)
- Feed system for browsing content

### User Connections
- Follow and unfollow users
- Friend request management
- User search and discovery

### Media Handling
- Image upload and optimization using **ImageKit**
- Fast and reliable media delivery

### Background Processing
- Background jobs and scheduled tasks using **Inngest**

### Stories
- Temporary story or status uploads

---

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS

### Services
- Clerk – Authentication and user management
- Inngest – Background job processing
- ImageKit – Media storage and optimization

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### Install dependencies

```bash
npm install
```

### Environment variables

Create a `.env` file in the root directory and add the following variables:

```
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
VITE_IMAGEKIT_PUBLIC_KEY=your_imagekit_key
VITE_IMAGEKIT_URL_ENDPOINT=your_imagekit_url
```

Add any additional keys required for backend services if applicable.

### Run the development server

```bash
npm run dev
```

The application will run at:

```
http://localhost:5173
```

---

## Project Structure

```
src
 ├── components
 ├── pages
 ├── hooks
 ├── services
 ├── utils
 └── assets
```

---

## Roadmap

- Notifications system
- Post reactions and comments
- Advanced search filters
- Improved mobile responsiveness
- Push notifications

---

## Contributing

Contributions are welcome. Fork the repository and submit a pull request with your improvements.

---

## License

This project is licensed under the MIT License.