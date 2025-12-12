import { FileText, Download, Eye, Search } from 'lucide-react';

const Records = () => {
    // Mock Data
    const records = [
        { id: 1, date: '2024-03-15', type: 'Lab Report', name: 'Comprehensive Metabolic Panel', doctor: 'Dr. Sarah Wilson', status: 'Available' },
        { id: 2, date: '2024-02-28', type: 'Imaging', name: 'Chest X-Ray', doctor: 'Dr. James Carter', status: 'Available' },
        { id: 3, date: '2024-01-10', type: 'Prescription', name: 'Annual Physical Summary', doctor: 'Dr. Sarah Wilson', status: 'Archived' },
        { id: 4, date: '2023-11-05', type: 'Lab Report', name: 'Lipid Panel', doctor: 'Dr. Emily Chen', status: 'Available' },
    ];

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                <div>
                    <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>Medical Records</h2>
                    <p style={{ color: 'var(--text-muted)' }}>Access and manage your health documentation.</p>
                </div>
                <div className="glass-input" style={{ display: 'flex', alignItems: 'center', padding: '8px 16px', gap: '8px', width: '300px' }}>
                    <Search size={18} color="var(--text-muted)" />
                    <input type="text" placeholder="Search records..." style={{ background: 'transparent', border: 'none', color: 'white', width: '100%', outline: 'none' }} />
                </div>
            </div>

            <div className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)' }}>
                            <th style={{ padding: '16px 24px', textAlign: 'left', color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.9rem' }}>Date</th>
                            <th style={{ padding: '16px 24px', textAlign: 'left', color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.9rem' }}>Type</th>
                            <th style={{ padding: '16px 24px', textAlign: 'left', color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.9rem' }}>Record Name</th>
                            <th style={{ padding: '16px 24px', textAlign: 'left', color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.9rem' }}>Doctor</th>
                            <th style={{ padding: '16px 24px', textAlign: 'right', color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.9rem' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record) => (
                            <tr key={record.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', transition: 'background 0.2s' }} className="table-row-hover">
                                <td style={{ padding: '16px 24px' }}>{record.date}</td>
                                <td style={{ padding: '16px 24px' }}>
                                    <span style={{
                                        padding: '4px 12px',
                                        borderRadius: '99px',
                                        fontSize: '0.8rem',
                                        background: record.type === 'Lab Report' ? 'rgba(56, 189, 248, 0.15)' : record.type === 'Imaging' ? 'rgba(168, 85, 247, 0.15)' : 'rgba(234, 179, 8, 0.15)',
                                        color: record.type === 'Lab Report' ? '#38bdf8' : record.type === 'Imaging' ? '#a855f7' : '#facc15'
                                    }}>
                                        {record.type}
                                    </span>
                                </td>
                                <td style={{ padding: '16px 24px', fontWeight: 500 }}>{record.name}</td>
                                <td style={{ padding: '16px 24px', color: 'var(--text-muted)' }}>{record.doctor}</td>
                                <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                                        <button className="btn-icon" title="View"><Eye size={18} /></button>
                                        <button className="btn-icon" title="Download"><Download size={18} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Records;
