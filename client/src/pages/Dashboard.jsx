import { Link } from 'react-router-dom';
import { Calendar, Map, Activity } from 'lucide-react';

const Dashboard = ({ user }) => {
    return (
        <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>Hello, {user?.name}</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>Welcome to your health dashboard.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                <div className="glass-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                        <div style={{ padding: '12px', borderRadius: '12px', background: 'rgba(79, 70, 229, 0.2)', color: '#818cf8' }}>
                            <Calendar size={24} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Appointments</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Manage your visits</p>
                        </div>
                    </div>
                    <p style={{ marginBottom: '20px', color: 'var(--text-muted)' }}>Book new appointments or view your upcoming schedule.</p>
                    <Link to="/appointments" className="btn btn-secondary" style={{ width: '100%' }}>Book Now</Link>
                </div>

                <div className="glass-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                        <div style={{ padding: '12px', borderRadius: '12px', background: 'rgba(236, 72, 153, 0.2)', color: '#f472b6' }}>
                            <Map size={24} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Nearby Hospitals</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Find care near you</p>
                        </div>
                    </div>
                    <p style={{ marginBottom: '20px', color: 'var(--text-muted)' }}>Locate emergency services and medical centers in your area.</p>
                    <Link to="/hospitals" className="btn btn-secondary" style={{ width: '100%' }}>View Map</Link>
                </div>

                <div className="glass-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                        <div style={{ padding: '12px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.2)', color: '#34d399' }}>
                            <Activity size={24} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Health Status</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Your vitals overview</p>
                        </div>
                    </div>
                    <p style={{ marginBottom: '20px', color: 'var(--text-muted)' }}>Pulse: 72 bpm <br /> BP: 120/80 (Normal)</p>
                    <button className="btn btn-secondary" style={{ width: '100%' }}>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
