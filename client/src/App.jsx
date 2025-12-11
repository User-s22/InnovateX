import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Appointments from './pages/Appointments';
import Hospitals from './pages/Hospitals';
import Layout from './components/Layout';
import { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem('user');
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (e) {
      return null;
    }
  });

  useEffect(() => {
    // Optional: Keep syncing if needed, but initial state covers the reload case
  }, []);

  const ProtectedRoute = ({ children }) => {
    if (!user) return <Navigate to="/login" />;
    return children;
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/" element={<ProtectedRoute><Layout user={user} setUser={setUser}><Dashboard user={user} /></Layout></ProtectedRoute>} />
        <Route path="/appointments" element={<ProtectedRoute><Layout user={user} setUser={setUser}><Appointments user={user} /></Layout></ProtectedRoute>} />
        <Route path="/hospitals" element={<ProtectedRoute><Layout user={user} setUser={setUser}><Hospitals /></Layout></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
