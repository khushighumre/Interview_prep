# Interview Prep Website - Startup Guide

## Issues Fixed:
1. ✅ Fixed import path mismatch for `axiosInstance` (was `axiosInstance` but file is `axiosinstance`)
2. ✅ Fixed duplicate password field in User model schema
3. ✅ Fixed HTTP status codes in auth controller (changed 500 to 401 for auth errors)
4. ✅ Added database name to MongoDB connection string

## Prerequisites:
1. **MongoDB** - Make sure MongoDB is installed and running on port 27017
2. **Node.js** - Make sure Node.js is installed

## How to Start:

### 1. Start MongoDB (if not running):
```bash
# Windows - Open Command Prompt as Administrator
net start MongoDB
# OR if installed manually
mongod --dbpath "C:\data\db"
```

### 2. Start Backend Server:
```bash
cd backend
npm install
npm run dev
```
Backend should start on http://localhost:8000

### 3. Start Frontend:
```bash
cd frontend/Interview-prep
npm install
npm run dev
```
Frontend should start on http://localhost:5173

## Testing Login/Signup:

### Test Signup:
1. Go to http://localhost:5173
2. Click "Sign Up"
3. Fill in the form:
   - Full Name: Test User
   - Email: test@example.com
   - Password: password123
4. Click "SIGN UP"

### Test Login:
1. Use the credentials from signup
2. Email: test@example.com
3. Password: password123
4. Click "LOGIN"

## Common Issues:

### If MongoDB connection fails:
- Check if MongoDB service is running
- Verify connection string in `.env` file
- Make sure port 27017 is not blocked

### If frontend can't connect to backend:
- Check if backend is running on port 8000
- Verify BASE_URL in `apiPaths.js` is correct
- Check browser console for CORS errors

### If imports fail:
- All `axiosInstance` imports have been fixed to use lowercase filename
- Clear browser cache and restart dev server

## API Endpoints:
- POST `/api/auth/register` - User registration
- POST `/api/auth/login` - User login
- GET `/api/auth/profile` - Get user profile (requires token)
- POST `/api/auth/upload-image` - Upload profile image