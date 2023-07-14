# Frontend part

The basic `project` structure for frontend

```
frontend/
├── public/
│ ├── assets/ # For images etc.
│ ├── index.html # HTML template
│ └── favicon.ico # Favicon file
├── src/
│ ├── components/
│ │ ├── Auth/ # Authentication components (login, registration)
│ │ ├── Survey/ # Survey components (creation, response)
│ │ ├── Common/ # Reusable components
│ │ └── styles/ # Styles for components
│ ├── services/
│ │ ├── auth.js # API service for user authentication
│ │ ├── survey.js # API service for survey-related operations
│ │ └── response.js # API service for response-related operations
│ ├── utils/
│ │ ├── auth.js # Authentication utility functions
│ │ └── validation.js # Input validation utility functions
│ ├── images/ # For images
│ ├── App.jsx # Main component
│ ├── index.js # Entry point
│ ├── index.scss # Global CSS styles
├── package.json # Frontend dependencies and scripts
├── package-lock.json
```
