# Chatbot Platform

A minimal chatbot platform built using Node.js, Express, MongoDB, and OpenRouter API.

## Features
- JWT-based authentication
- User registration and login
- Project-based chatbot agents
- Custom prompt storage per project
- AI-powered chat using OpenRouter API
- Secure and scalable backend architecture

## Tech Stack
- Node.js
- Express.js
- MongoDB Atlas
- JSON Web Tokens (JWT)
- OpenRouter LLM API

## Installation & Setup

### 1. Clone Repository
```bash
git clone https://github.com/vishnu81977/chatbot-platform.git
cd chatbot-platform
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file:
```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
OPENAI_API_KEY=your_openrouter_api_key
OPENAI_BASE_URL=https://openrouter.ai/api/v1
```

### 4. Run Application
```bash
node server.js
```

Server runs on:
```
http://localhost:5000
```

## API Endpoints
- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/projects`
- `POST /api/chat/:projectId`

## Architecture Overview
- Express handles REST APIs
- MongoDB stores users and projects
- JWT secures private routes
- Each project has its own chatbot prompt
- OpenRouter API generates AI responses

## Future Improvements
- Frontend UI
- File upload support
- Analytics and logs
