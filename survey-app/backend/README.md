# Backend part

The basic project structure for backend

backend/
├── config/
│ ├── config.js # Configuration files (e.g., database credentials, environment variables)
│ └── database.js # Database connection configuration
├── controllers/
│ ├── authController.js # Authentication-related logic
│ ├── surveyController.js # Survey-related logic
│ └── responseController.js # Response-related logic
├── middleware/
│ ├── authMiddleware.js # Authentication middleware
│ └── errorMiddleware.js # Error handling middleware
├── models/
│ ├── User.js # User model
│ ├── Survey.js # Survey model
│ └── Response.js # Response model
├── routes/
│ ├── authRoutes.js # Routes for user authentication
│ ├── surveyRoutes.js # Routes for survey creation and retrieval
│ └── responseRoutes.js # Routes for response submission
├── services/
│ └── authService.js # Authentication service
├── utils/
│ ├── errorHandler.js # Error handling utility
│ └── validation.js # Input validation utility
├── app.js # Express app configuration
├── server.js # Server startup file
└── .env # Environment variables
