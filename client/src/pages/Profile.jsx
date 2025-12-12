import { User, Mail, Shield, Phone, MapPin } from 'lucide-react';

const Profile = ({ user }) => {
    return (
        <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>My Profile</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>Manage your account settings and preferences.</p>

            <div className="glass-card" style={{ maxWidth: '800px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '32px', paddingBottom: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{
                        width: '100px', height: '100px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '2.5rem', fontWeight: 'bold', color: 'white'
                    }}>
                        {user.name.charAt(0)}
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '4px' }}>{user.name}</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
                            <Shield size={16} />
                            <span>Patient Account</span>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'grid', gap: '24px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '16px', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-muted)' }}>
                            <User size={20} />
                            <span>Full Name</span>
                        </div>
                        <div className="glass-input" style={{ padding: '12px' }}>{user.name}</div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '16px', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-muted)' }}>
                            <Mail size={20} />
                            <span>Email Address</span>
                        </div>
                        <div className="glass-input" style={{ padding: '12px' }}>{user.email}</div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '16px', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-muted)' }}>
                            <Phone size={20} />
                            <span>Phone</span>
                        </div>
                        <div className="glass-input" style={{ padding: '12px' }}>+1 (555) 000-0000</div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '16px', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-muted)' }}>
                            <MapPin size={20} />
                            <span>Address</span>
                        </div>
                        <div className="glass-input" style={{ padding: '12px' }}>123 Health Way, Wellness City</div>
                    </div>
                </div>

                <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'flex-end', gap: '16px' }}>
                    <button className="btn btn-secondary">Cancel</button>
                    <button className="btn btn-primary">Save Changes</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
