# User Management Application

This is a basic User Management Application built using the MERN stack (MongoDB, Express, React, Node.js) and Redux Toolkit. The application allows users to register, login, view their profile, and update profile information.

## Features
- **User Registration**: Register a new account with username, email, and password.
- **User Login**: Login to access protected routes.
- **Profile Management**: View and edit profile information.
- **Secure Authentication**: JWT-based authentication with cookies for session management.

## Prerequisites
Before you can run this application, ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- A package manager like `npm` or `yarn`

---

## Backend Setup

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>/backend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**:
   Create a `.env` file in the `backend` directory and add the following:
   ```env
   PORT=5000
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-secret-key>
   ```

4. **Run the Server**:
   ```bash
   npm start
   ```
   The backend server will be running on `http://localhost:5000`.

---

## Frontend Setup

1. **Navigate to the Frontend Directory**:
   ```bash
   cd ../frontend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**:
   Create a `.env` file in the `frontend` directory and add the following:
   ```env
   VITE_API_URL=http://localhost:5000
   ```

4. **Run the Frontend**:
   ```bash
   npm run dev
   ```
   The frontend application will be running on `http://localhost:5173`.

---

## Testing the Application

1. **Register a User**:
   - Navigate to `http://localhost:5173/register`
   - Fill out the form to create a new user.

2. **Login**:
   - Navigate to `http://localhost:5173/login`
   - Login using the credentials you registered.

3. **View and Edit Profile**:
   - After login, navigate to `/profile/<id>` to view the profile.
   - Navigate to `/edit/<id>` to edit profile details.

---

## API Endpoints

| Method | Endpoint         | Description                   |
|--------|------------------|-------------------------------|
| POST   | `/api/register`  | Register a new user           |
| POST   | `/api/login`     | Login user                    |
| GET    | `/api/profile/:id` | Get user profile             |
| PUT    | `/api/profile/:id` | Update user profile          |

---

## Important Notes
- Ensure MongoDB is running locally or update the `MONGO_URI` to point to a cloud instance.
- Use a strong `JWT_SECRET` to secure authentication tokens.
- Use the `.env` files to configure environment-specific variables securely.

---

## Deployment

To deploy this project:
1. Use a hosting platform like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/) for the frontend.
2. Deploy the backend using [Render](https://render.com/), [Heroku](https://www.heroku.com/), or similar platforms.
3. Update the `VITE_API_URL` in the frontend to point to the live backend URL.

---

## License
This project is open-source and free to use.

---

For further assistance, feel free to contact the project maintainers.

#   u s e r C l i e n t  
 