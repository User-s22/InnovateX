import { MessageSquare, Send, MoreVertical, Phone } from 'lucide-react';
import { useState } from 'react';

const Messages = () => {
    const [activeChat, setActiveChat] = useState(1);
    const [input, setInput] = useState('');

    const contacts = [
        { id: 1, name: 'Dr. Sarah Wilson', role: 'Cardiologist', online: true, lastMsg: 'Your test results look good.', time: '10:30 AM' },
        { id: 2, name: 'Dr. James Carter', role: 'General Practitioner', online: false, lastMsg: 'See you next week.', time: 'Yesterday' },
        { id: 3, name: 'Front Desk', role: 'Support', online: true, lastMsg: 'Appointment confirmed.', time: 'Mon' },
    ];

    const [messages, setMessages] = useState([
        { id: 1, sender: 'them', text: 'Hello! How have you been feeling since started the new medication?', time: '10:00 AM' },
        { id: 2, sender: 'me', text: 'Much better, thank you properly. The dizziness has gone away.', time: '10:15 AM' },
        { id: 3, sender: 'them', text: 'That is great to hear. I have reviewed your latest blood work.', time: '10:25 AM' },
        { id: 4, sender: 'them', text: 'Your test results look good. We can keep the current dosage.', time: '10:30 AM' },
    ]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        setMessages([...messages, { id: messages.length + 1, sender: 'me', text: input, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
        setInput('');
    };

    return (
        <div style={{ height: 'calc(100vh - 120px)', display: 'flex', gap: '24px' }}>
            {/* Contacts List */}
            <div className="glass-card" style={{ width: '350px', padding: '0', display: 'flex', flexDirection: 'column' }}>
                <div style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '4px' }}>Messages</h2>
                </div>
                <div style={{ overflowY: 'auto', flex: 1 }}>
                    {contacts.map(contact => (
                        <div
                            key={contact.id}
                            onClick={() => setActiveChat(contact.id)}
                            style={{
                                padding: '16px 20px',
                                borderBottom: '1px solid rgba(255,255,255,0.05)',
                                cursor: 'pointer',
                                background: activeChat === contact.id ? 'rgba(255,255,255,0.05)' : 'transparent',
                                transition: 'background 0.2s',
                                display: 'flex', gap: '12px'
                            }}
                        >
                            <div style={{ position: 'relative' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--bg-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                                    {contact.name.charAt(0)}
                                </div>
                                {contact.online && <div style={{ position: 'absolute', bottom: '2px', right: '2px', width: '12px', height: '12px', background: '#34d399', borderRadius: '50%', border: '2px solid rgba(30, 41, 59, 1)' }}></div>}
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                                    <h4 style={{ fontWeight: 600, fontSize: '0.95rem' }}>{contact.name}</h4>
                                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{contact.time}</span>
                                </div>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{contact.lastMsg}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Area */}
            <div className="glass-card" style={{ flex: 1, padding: '0', display: 'flex', flexDirection: 'column' }}>
                {/* Header */}
                <div style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {contacts.find(c => c.id === activeChat)?.name.charAt(0)}
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{contacts.find(c => c.id === activeChat)?.name}</h3>
                            <p style={{ fontSize: '0.8rem', color: '#34d399' }}>Online</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <button className="btn-icon"><Phone size={20} /></button>
                        <button className="btn-icon"><MoreVertical size={20} /></button>
                    </div>
                </div>

                {/* Messages */}
                <div style={{ flex: 1, overflowY: 'auto', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {messages.map(msg => (
                        <div key={msg.id} style={{ alignSelf: msg.sender === 'me' ? 'flex-end' : 'flex-start', maxWidth: '70%' }}>
                            <div style={{
                                padding: '12px 16px',
                                borderRadius: '16px',
                                borderBottomRightRadius: msg.sender === 'me' ? '4px' : '16px',
                                borderBottomLeftRadius: msg.sender === 'them' ? '4px' : '16px',
                                background: msg.sender === 'me' ? 'var(--primary)' : 'rgba(255,255,255,0.1)',
                                color: 'white',
                                lineHeight: '1.5'
                            }}>
                                {msg.text}
                            </div>
                            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px', textAlign: msg.sender === 'me' ? 'right' : 'left' }}>{msg.time}</p>
                        </div>
                    ))}
                </div>

                {/* Input */}
                <form onSubmit={handleSend} style={{ padding: '20px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '12px' }}>
                    <input
                        type="text"
                        className="glass-input"
                        placeholder="Type a message..."
                        style={{ flex: 1 }}
                        value={input}
                        onChange={e => setInput(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary" style={{ width: '48px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Send size={20} />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Messages;
