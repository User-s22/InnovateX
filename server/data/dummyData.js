const users = [
    { id: 1, name: 'John Doe', email: 'test@example.com', password: 'password', role: 'patient' }
];

const doctors = [
    { id: 1, name: 'Dr. Sarah Smith', specialty: 'Cardiology', hospital: 'City General' },
    { id: 2, name: 'Dr. James Wilson', specialty: 'Dermatology', hospital: 'Skin Clinic' },
    { id: 3, name: 'Dr. Emily Chen', specialty: 'Pediatrics', hospital: 'Childrens Hospital' }
];

const hospitals = [
    { id: 1, name: 'City General Hospital', lat: 40.7128, lng: -74.0060, address: '123 Main St, New York' },
    { id: 2, name: 'Westside Medical Center', lat: 40.7300, lng: -74.0100, address: '456 West Ave, New York' },
    { id: 3, name: 'Brooklyn Health', lat: 40.6782, lng: -73.9442, address: '789 East Blvd, Brooklyn' }
];

const appointments = [];

module.exports = { users, doctors, hospitals, appointments };
