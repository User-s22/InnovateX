# Patient Portal

A premium patient portal built with React (Vite) and Node.js (Express).

## Project Structure
- `client/`: Frontend application (React + Vite)
- `server/`: Backend application (Node + Express)

## How to Run

You need to run the backend and frontend in **two separate terminals**.

### Terminal 1: Backend
Starts the server on port 5000.
```bash
cd server
npm start
``` 
*(Note: `npm start` runs `node index.js`. Use `npm run dev` if you installed nodemon, otherwise just `node index.js` works too)*.

### Terminal 2: Frontend
Starts the Vite development server on port 5173.
```bash
cd client
npm run dev
```

## Features
- **Login**: `test@example.com` / `password`
- **Dashboard**: Overview of health stats.
- **Appointments**: Book appointments with doctors.
- **Hospitals**: Map view of nearby hospitals.
- **Medical Records**: View and search lab reports and imaging results.
- **Prescriptions**: manage medications and request refills.
- **Messages**: Chat with doctors and support staff.
- **Settings**: Configure app preferences (Dark Mode, Notifications).
- **Profile**: View user details.
