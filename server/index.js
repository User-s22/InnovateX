const express = require('express');
const cors = require('cors');
const { users, doctors, hospitals, appointments } = require('./data/dummyData');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Auth Routes
app.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        const { password, ...userWithoutPassword } = user;
        res.json({ success: true, user: userWithoutPassword });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

app.post('/api/auth/signup', (req, res) => {
    const { name, email, password } = req.body;
    if (users.find(u => u.email === email)) {
        return res.status(400).json({ success: false, message: 'User already exists' });
    }
    const newUser = { id: users.length + 1, name, email, password, role: 'patient' };
    users.push(newUser); // In-memory persistence
    const { password: _, ...userWithoutPassword } = newUser;
    res.json({ success: true, user: userWithoutPassword });
});

// Data Routes
app.get('/api/doctors', (req, res) => {
    res.json(doctors);
});

app.get('/api/hospitals', (req, res) => {
    res.json(hospitals);
});

app.get('/api/appointments', (req, res) => {
    // In a real app, filter by user; here returning all for demo/simplicity or filter if needed
    res.json(appointments);
});

app.post('/api/appointments', (req, res) => {
    const { userId, doctorId, date, time } = req.body;
    const newAppointment = {
        id: appointments.length + 1,
        userId,
        doctorId,
        date,
        time,
        status: 'confirmed'
    };
    appointments.push(newAppointment);
    res.json({ success: true, appointment: newAppointment });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
