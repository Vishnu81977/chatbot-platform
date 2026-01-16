# Chatbot Platform Architecture

## Overview
This project is a minimal chatbot platform that allows users to create chatbot agents and interact with them using Large Language Models (LLMs). Each chatbot project has a custom system prompt and is securely accessible by authenticated users.

---

## High-Level Architecture

Client (Postman / Browser)
        |
        v
Express REST API (Node.js)
        |
        v
MongoDB Database
        |
        v
OpenRouter LLM API

---

## Components

### Backend Server
- Built using Node.js and Express.js
- Handles authentication, project management, and chat requests
- Uses RESTful APIs

### Authentication
- JWT (JSON Web Token) based authentication
- Passwords are hashed using bcrypt
- Protected routes using middleware

### Database (MongoDB)
- Stores user accounts
- Stores chatbot projects
- Associates prompts with projects
- Supports multiple users and projects concurrently

### Chat Processing Flow
1. User logs in and receives JWT token
2. User creates a chatbot project with a prompt
3. User sends a message to a chatbot project
4. Server injects the stored prompt as system instruction
5. Message is sent to OpenRouter API
6. AI-generated response is returned to user

### LLM Integration
- Uses OpenRouter Completion API
- Model-agnostic design allows switching LLM providers easily
- API keys stored securely in environment variables

---

## Security Design
- Password hashing with bcrypt
- JWT-based route protection
- Sensitive keys stored in `.env` file
- No credentials exposed to frontend

---

## Scalability & Extensibility
- Stateless authentication enables horizontal scaling
- MongoDB supports concurrent users
- Modular folder structure allows adding:
  - File uploads
  - Analytics
  - Frontend UI
  - Additional integrations

---

## Error Handling & Reliability
- Graceful error handling in all APIs
- Validation for missing or invalid inputs
- Proper HTTP status codes returned
