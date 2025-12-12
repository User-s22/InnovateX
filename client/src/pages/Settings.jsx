import { Settings as SettingsIcon, Bell, Shield, Moon, Globe, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Settings = () => {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(true);
    const [emailAlerts, setEmailAlerts] = useState(true);

    const Toggle = ({ active, onClick }) => (
        <div
            onClick={onClick}
            style={{
                width: '48px', height: '24px',
                background: active ? 'var(--primary)' : 'rgba(255,255,255,0.1)',
                borderRadius: '99px',
                position: 'relative',
                cursor: 'pointer',
                transition: 'background 0.2s'
            }}
        >
            <div style={{
                width: '18px', height: '18px',
                background: 'white',
                borderRadius: '50%',
                position: 'absolute',
                top: '3px',
                left: active ? '27px' : '3px',
                transition: 'left 0.2s'
            }} />
        </div>
    );

    const Section = ({ title, children }) => (
        <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '16px', color: 'var(--secondary)' }}>{title}</h3>
            <div className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
                {children}
            </div>
        </div>
    );

    const Item = ({ icon, label, action, last }) => (
        <div style={{
            padding: '20px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            borderBottom: last ? 'none' : '1px solid rgba(255,255,255,0.05)',
            transition: 'background 0.2s'
        }} className="hover:bg-white/5">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ color: 'var(--text-muted)' }}>{icon}</div>
                <span style={{ fontSize: '1rem' }}>{label}</span>
            </div>
            <div>{action}</div>
        </div>
    );

    return (
        <div style={{ maxWidth: '800px' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>Settings</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>Manage your application preferences.</p>

            <Section title="Appearance & Display">
                <Item
                    icon={<Moon size={20} />}
                    label="Dark Mode"
                    action={<Toggle active={darkMode} onClick={() => setDarkMode(!darkMode)} />}
                />
                <Item
                    icon={<Globe size={20} />}
                    label="Language"
                    action={
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', cursor: 'pointer' }}>
                            English <ChevronRight size={16} />
                        </div>
                    }
                    last
                />
            </Section>

            <Section title="Notifications">
                <Item
                    icon={<Bell size={20} />}
                    label="Push Notifications"
                    action={<Toggle active={notifications} onClick={() => setNotifications(!notifications)} />}
                />
                <Item
                    icon={<Bell size={20} />}
                    label="Email Alerts"
                    action={<Toggle active={emailAlerts} onClick={() => setEmailAlerts(!emailAlerts)} />}
                    last
                />
            </Section>

            <Section title="Privacy & Security">
                <Item
                    icon={<Shield size={20} />}
                    label="Change Password"
                    action={<ChevronRight size={16} color="var(--text-muted)" />}
                />
                <Item
                    icon={<Shield size={20} />}
                    label="Two-Factor Authentication"
                    action={<div style={{ fontSize: '0.85rem', color: '#34d399' }}>Enabled</div>}
                    last
                />
            </Section>
        </div>
    );
};

export default Settings;
