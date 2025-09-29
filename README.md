# Mobile CRM

A monorepo containing a FastAPI backend and React Native frontend.

## Structure

- `backend/` - FastAPI application with structured folders for future expansion
  - `app/api/` - API routes (ready for expansion)
  - `app/core/` - Core configurations
  - `app/models/` - Database models (ready for MongoDB)
  - `app/services/` - Business logic services
- `frontend/` - React Native with Expo

## Getting Started

### Prerequisites
- Python 3.8+
- Node.js 16+
- npm or yarn

### Backend Setup
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

The backend will be available at `http://127.0.0.1:8000`

### Frontend Setup
```bash
cd frontend
npm install
npx expo start
```

### API Endpoints

- `GET /` - Health check
- `GET /purpose` - Returns the purpose message

### End-to-End Testing

1. Start the backend: `cd backend && uvicorn main:app --reload`
2. Start the frontend: `cd frontend && npx expo start`
3. The React Native app will fetch and display the purpose message from the backend

## Future Enhancements

The project is structured to easily add:
- MongoDB integration in the backend
- Authentication system
- Additional API endpoints
- More React Native screens