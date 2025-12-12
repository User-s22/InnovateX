import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, Map, LogOut, User, FileText, Pill, MessageSquare, Settings } from 'lucide-react';

const Layout = ({ children, user, setUser }) => {
    const location = useLocation();

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    const navItems = [
        { label: 'Dashboard', path: '/', icon: <Home size={20} /> },
        { label: 'Medical Records', path: '/records', icon: <FileText size={20} /> },
        { label: 'Prescriptions', path: '/prescriptions', icon: <Pill size={20} /> },
        { label: 'Appointments', path: '/appointments', icon: <Calendar size={20} /> },
        { label: 'Hospitals', path: '/hospitals', icon: <Map size={20} /> },
        { label: 'Messages', path: '/messages', icon: <MessageSquare size={20} /> },
        { label: 'Settings', path: '/settings', icon: <Settings size={20} /> },
        { label: 'Profile', path: '/profile', icon: <User size={20} /> },
    ];

    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            {/* Sidebar */}
            <aside style={{
                width: '260px',
                background: 'rgba(15, 23, 42, 0.8)',
                backdropFilter: 'blur(20px)',
                borderRight: '1px solid var(--glass-border)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                position: 'sticky',
                top: 0,
                height: '100vh'
            }}>
                <div style={{ marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        background: 'var(--primary-gradient)',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: 'white'
                    }}>
                        H
                    </div>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white' }}>Health<span style={{ color: 'var(--secondary)' }}>Vault</span></h1>
                </div>

                <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    padding: '12px 16px',
                                    borderRadius: 'var(--radius-md)',
                                    color: isActive ? 'white' : 'var(--text-muted)',
                                    background: isActive ? 'rgba(79, 70, 229, 0.15)' : 'transparent',
                                    border: isActive ? '1px solid rgba(79, 70, 229, 0.3)' : '1px solid transparent',
                                    textDecoration: 'none',
                                    transition: 'all 0.2s',
                                    fontWeight: isActive ? 600 : 400
                                }}
                            >
                                {item.icon}
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid var(--glass-border)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', padding: '0 12px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <User size={16} />
                        </div>
                        <div>
                            <p style={{ fontSize: '14px', fontWeight: 600 }}>{user?.name || 'User'}</p>
                            <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{user?.role || 'Patient'}</p>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '12px 16px',
                            borderRadius: 'var(--radius-md)',
                            color: '#ef4444',
                            background: 'rgba(239, 68, 68, 0.1)',
                            border: '1px solid rgba(239, 68, 68, 0.2)',
                            cursor: 'pointer',
                            fontSize: '14px'
                        }}
                    >
                        <LogOut size={18} />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
                <div className="animate-fade-in">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default Layout;
