import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState, useEffect } from 'react';

const Hospitals = () => {
    const [hospitals, setHospitals] = useState([]);

    // Default center (New York) - in real app, get user location
    const center = [40.7128, -74.0060];

    useEffect(() => {
        fetch('http://localhost:5000/api/hospitals')
            .then(res => res.json())
            .then(data => setHospitals(data));
    }, []);

    return (
        <div style={{ height: 'calc(100vh - 120px)', display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>Nearby Hospitals</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>Find emergency care and medical centers.</p>

            <div style={{ flex: 1, borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
                <MapContainer center={center} zoom={13} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    />
                    {hospitals.map(hospital => (
                        <Marker key={hospital.id} position={[hospital.lat, hospital.lng]}>
                            <Popup>
                                <strong style={{ color: '#0f172a' }}>{hospital.name}</strong><br />
                                <span style={{ color: '#334155' }}>{hospital.address}</span>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
};

export default Hospitals;
