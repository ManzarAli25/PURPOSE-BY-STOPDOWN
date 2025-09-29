# Mobile CRM Project Structure

## Overview
This is a monorepo containing a FastAPI backend and React Native frontend with end-to-end connectivity.

## Directory Structure

```
mobile-crm/
├── README.md                    # Main project documentation
├── .gitignore                   # Git ignore rules
├── PROJECT_STRUCTURE.md         # This file
│
├── backend/                     # FastAPI Backend
│   ├── main.py                  # FastAPI app entry point with CORS
│   ├── requirements.txt         # Python dependencies
│   ├── package.json            # NPM scripts for convenience
│   └── app/                    # Structured for future expansion
│       ├── __init__.py
│       ├── api/                # API routes (ready for expansion)
│       │   └── __init__.py
│       ├── core/               # Core configurations
│       │   └── __init__.py
│       ├── models/             # Database models (ready for MongoDB)
│       │   └── __init__.py
│       └── services/           # Business logic services
│           └── __init__.py
│
└── frontend/                   # React Native with Expo
    ├── App.js                  # Main app component (modified)
    ├── package.json            # Node dependencies (includes axios)
    ├── app.json               # Expo configuration
    ├── assets/                # Static assets
    └── src/                   # Source code
        ├── services/          # API services
        │   └── api.js         # Axios configuration and API calls
        └── screens/           # React Native screens
            └── PurposeScreen.js # Main screen that fetches from backend
```

## Key Features Implemented

### Backend (FastAPI)
- ✅ FastAPI app with CORS enabled for all origins
- ✅ GET `/` endpoint for health check
- ✅ GET `/purpose` endpoint returning the specified message
- ✅ Structured folder layout ready for MongoDB integration
- ✅ Requirements.txt with FastAPI and Uvicorn

### Frontend (React Native + Expo)
- ✅ Expo React Native app initialized
- ✅ Axios installed and configured
- ✅ API service with baseURL pointing to backend
- ✅ PurposeScreen component that fetches and displays backend data
- ✅ Loading states and error handling
- ✅ App.js modified to render PurposeScreen

### End-to-End Integration
- ✅ Backend serves API at `http://127.0.0.1:8000`
- ✅ Frontend calls backend API on component mount
- ✅ CORS properly configured for cross-origin requests
- ✅ Error handling and loading states implemented

## Running the Application

### Start Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### Start Frontend
```bash
cd frontend
npm install  # Already done
npx expo start
```

## API Endpoints

- `GET /` - Returns: `{"message": "Mobile CRM API is running"}`
- `GET /purpose` - Returns: `{"message": "PURPOSE BY STOP DOWN \"SYSTEM THAT POWERS GROWTH!\""}`

## Next Steps for MongoDB Integration

The backend is structured to easily add:
1. MongoDB connection in `app/core/database.py`
2. Pydantic models in `app/models/`
3. CRUD operations in `app/services/`
4. Additional API routes in `app/api/`