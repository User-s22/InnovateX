import { useState, useEffect } from 'react';
import { Calendar, User, Clock, Check, Map } from 'lucide-react';

const Appointments = ({ user }) => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [booking, setBooking] = useState(null); // { doctorId, date, time }
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/api/doctors')
            .then(res => res.json())
            .then(data => {
                setDoctors(data);
                setLoading(false);
            })
            .catch(err => setLoading(false));
    }, []);

    const handleBook = (doctor) => {
        setBooking({
            doctorId: doctor.id,
            doctorName: doctor.name,
            date: '',
            time: '',
            reason: 'General Checkup' // Default option
        });
        setSuccess(false);
    };

    const confirmBooking = async (e) => {
        e.preventDefault();
        // Simulate API call or use actual if preferred (staying with the fetch logic)
        try {
            const response = await fetch('http://localhost:5000/api/appointments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: user.id,
                    doctorId: booking.doctorId,
                    date: booking.date,
                    time: booking.time,
                    reason: booking.reason
                })
            });
            const data = await response.json();
            if (data.success) {
                setSuccess(true);
                // Hide modal automatically after 2 seconds OR let user close it?
                // "it must show a success message thats it" - implies distinct state.
                // I will keep it in the modal until closed or timeout.
            }
        } catch (err) {
            alert('Error booking appointment');
        }
    };

    if (loading) return <div style={{ color: 'white' }}>Loading...</div>;

    return (
        <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>Book Appointment</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>Choose a specialist and schedule your visit.</p>

            {/* Booking Modal / Overlay */}
            {booking && (
                <div style={{
                    position: 'fixed',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'rgba(0,0,0,0.7)',
                    backdropFilter: 'blur(8px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000
                }}>
                    <div className="glass-card" style={{ width: '450px', maxWidth: '95%', border: '1px solid rgba(255,255,255,0.2)' }}>
                        {success ? (
                            <div style={{ textAlign: 'center', padding: '30px 20px' }}>
                                <div style={{
                                    width: '80px', height: '80px',
                                    borderRadius: '50%',
                                    background: 'rgba(16, 185, 129, 0.2)',
                                    color: '#34d399',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    margin: '0 auto 20px',
                                    boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)'
                                }}>
                                    <Check size={48} />
                                </div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '12px', color: 'white' }}>Booking Confirmed!</h3>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '1.1rem' }}>
                                    Your appointment with <strong>{booking.doctorName}</strong> has been scheduled.
                                </p>
                                <button onClick={() => setBooking(null)} className="btn btn-primary" style={{ width: '100%' }}>
                                    Done
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={confirmBooking}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '4px' }}>Book Appointment</h3>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '0.9rem' }}>with {booking.doctorName}</p>

                                <div style={{ marginBottom: '16px' }}>
                                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--text-muted)' }}>Service / Reason</label>
                                    <select
                                        className="glass-input"
                                        value={booking.reason}
                                        onChange={e => setBooking({ ...booking, reason: e.target.value })}
                                        style={{ background: 'rgba(15, 23, 42, 0.8)', cursor: 'pointer' }}
                                    >
                                        <option value="General Checkup">General Checkup</option>
                                        <option value="Follow-up Visit">Follow-up Visit</option>
                                        <option value="Lab Results Discussion">Lab Results Discussion</option>
                                        <option value="Emergency Consult">Emergency Consult</option>
                                    </select>
                                </div>

                                <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
                                    <div style={{ flex: 1 }}>
                                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--text-muted)' }}>Date</label>
                                        <input type="date" required className="glass-input" style={{ colorScheme: 'dark' }} value={booking.date} onChange={e => setBooking({ ...booking, date: e.target.value })} />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--text-muted)' }}>Time</label>
                                        <input type="time" required className="glass-input" style={{ colorScheme: 'dark' }} value={booking.time} onChange={e => setBooking({ ...booking, time: e.target.value })} />
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '12px', marginTop: '32px' }}>
                                    <button type="button" onClick={() => setBooking(null)} className="btn btn-secondary" style={{ flex: 1 }}>Cancel</button>
                                    <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>Confirm Booking</button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
                {doctors.map(doctor => (
                    <div key={doctor.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div style={{ width: '56px', height: '56px', borderRadius: '12px', background: 'var(--bg-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                                <User size={32} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>{doctor.name}</h3>
                                <p style={{ color: 'var(--secondary)', fontSize: '0.9rem' }}>{doctor.specialty}</p>
                            </div>
                        </div>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Map size={16} /> {doctor.hospital}
                        </div>
                        <button onClick={() => handleBook(doctor)} className="btn btn-primary" style={{ marginTop: 'auto' }}>
                            Book Appointment
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Appointments;
