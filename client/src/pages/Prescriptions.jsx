import { Pill, RefreshCw, Clock, AlertCircle } from 'lucide-react';

const Prescriptions = () => {
    const medications = [
        { id: 1, name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily', supply: '30 days', remaining: 5, status: 'Active', refills: 2 },
        { id: 2, name: 'Atorvastatin', dosage: '20mg', frequency: 'Once daily at bedtime', supply: '90 days', remaining: 45, status: 'Active', refills: 1 },
        { id: 3, name: 'Amoxicillin', dosage: '500mg', frequency: 'Every 8 hours', supply: '7 days', remaining: 0, status: 'Expired', refills: 0 },
    ];

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                <div>
                    <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>Prescriptions</h2>
                    <p style={{ color: 'var(--text-muted)' }}>Manage your active medications and refill requests.</p>
                </div>
                <button className="btn btn-primary">+ New Request</button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '24px' }}>
                {medications.map((med) => (
                    <div key={med.id} className="glass-card" style={{ position: 'relative', overflow: 'hidden' }}>
                        {med.remaining <= 7 && med.status === 'Active' && (
                            <div style={{ position: 'absolute', top: '16px', right: '16px', color: '#facc15' }} title="Low Supply">
                                <AlertCircle size={20} />
                            </div>
                        )}
                        <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
                            <div style={{
                                width: '48px', height: '48px',
                                borderRadius: '12px',
                                background: 'rgba(16, 185, 129, 0.15)',
                                color: '#34d399',
                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Pill size={24} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>{med.name}</h3>
                                <p style={{ color: 'var(--text-muted)' }}>{med.dosage}</p>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px', fontSize: '0.9rem' }}>
                            <div>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '4px' }}>Frequency</p>
                                <p>{med.frequency}</p>
                            </div>
                            <div>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '4px' }}>Supply</p>
                                <p>{med.supply}</p>
                            </div>
                        </div>

                        <div style={{
                            padding: '16px',
                            background: 'rgba(0,0,0,0.2)',
                            borderRadius: '12px',
                            marginBottom: '20px',
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                        }}>
                            <div>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Refills Remaining</p>
                                <p style={{ fontWeight: 600 }}>{med.refills}</p>
                            </div>
                            {med.status === 'Active' ? (
                                <div style={{ textAlign: 'right' }}>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Days Left</p>
                                    <p style={{ fontWeight: 600, color: med.remaining <= 7 ? '#facc15' : 'white' }}>{med.remaining} days</p>
                                </div>
                            ) : (
                                <span style={{ color: '#ef4444', fontWeight: 600, fontSize: '0.9rem' }}>Expired</span>
                            )}
                        </div>

                        <button
                            className="btn btn-secondary"
                            style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                            disabled={med.status !== 'Active' || med.refills === 0}
                        >
                            <RefreshCw size={16} /> Request Refill
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Prescriptions;
