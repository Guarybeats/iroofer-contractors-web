'use client';
import { useState, useRef, useEffect } from 'react';
import brand from '@/lib/brand';

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8100';

// scripted, no-API-key qualification + booking flow
const SERVICES = ['Roof Repair', 'Roof Replacement', 'New Construction', 'Storm / Insurance', 'Not sure yet'];
const TIMING = ['Urgent / leaking now', 'Within a week', 'This month', 'Just exploring'];
const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function bot(text) { return { from: 'bot', text }; }
function user(text) { return { from: 'me', text }; }

export default function LeadChat() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [msgs, setMsgs] = useState([bot(`Hi! I'm the iRoofer assistant. 👋 Let's get you booked for a free roof inspection. What's your name?`)]);
  const [data, setData] = useState({ name: '', phone: '', service: '', timing: '', day: '', time: '', email: '' });
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [msgs, open]);

  function say(m) { setMsgs((p) => [...p, m]); }

  function pick(field, value, nextPrompt) {
    setData((d) => ({ ...d, [field]: value }));
    say(user(value));
    setTimeout(() => {
      say(bot(nextPrompt));
      setStep((s) => s + 1);
    }, 350);
  }

  async function finish() {
    setBusy(true);
    const payload = {
      fullName: data.name,
      phone: data.phone,
      email: data.email || null,
      address: null,
      service: data.service,
      howSoon: data.timing,
      message: `AI chat booking request — preferred day: ${data.day}, time: ${data.time}.`,
      source: 'AI Chat',
    };
    try {
      await fetch(`${API}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch (e) { /* still confirm to user even if API is down */ }
    setBusy(false);
    setDone(true);
    say(bot(`✅ You're booked for a free inspection on ${data.day} at ${data.time}, ${data.name}! Cristian will call ${data.phone} to confirm. Anything else I can help with?`));
  }

  function submit(text) {
    if (!text.trim() || busy) return;
    const v = text.trim();
    if (step === 0) {
      pick('name', v, `Thanks ${v.split(' ')[0]}! What's the best phone number to reach you?`);
    } else if (step === 1) {
      pick('phone', v, 'Got it. What do you need done on the roof?');
    } else if (step === 2) {
      pick('service', v, 'How soon are you looking to get this done?');
    } else if (step === 3) {
      pick('timing', v, 'Which day works best for your free inspection?');
    } else if (step === 4) {
      pick('day', v, 'What time of day? (e.g. 9am, 1pm)');
    } else if (step === 5) {
      pick('time', v, 'Last thing — what email should we send the confirmation to? (or type "skip")');
    } else if (step === 6) {
      const email = v.toLowerCase() === 'skip' ? '' : v;
      pick('email', email, 'Perfect — locking in your appointment…');
      setTimeout(finish, 500);
    }
  }

  function onKey(e) { if (e.key === 'Enter') { submit(input); setInput(''); } }

  return (
    <>
      <button className="chat-fab" onClick={() => setOpen((o) => !o)} aria-label="Open chat">
        {open ? '✕' : '💬'}
      </button>
      {open && (
        <div className="chat-panel">
          <div className="chat-head">
            <div>
              <div className="chat-title">iRoofer Assistant</div>
              <div className="chat-sub">Free inspection · usually same week</div>
            </div>
          </div>
          <div className="chat-body" ref={scrollRef}>
            {msgs.map((m, i) => (
              <div key={i} className={'bubble ' + (m.from === 'bot' ? 'bot' : 'me')}>{m.text}</div>
            ))}
            {step === 2 && !done && (
              <div className="chips">
                {SERVICES.map((s) => <button key={s} onClick={() => submit(s)}>{s}</button>)}
              </div>
            )}
            {step === 3 && !done && (
              <div className="chips">
                {TIMING.map((s) => <button key={s} onClick={() => submit(s)}>{s}</button>)}
              </div>
            )}
            {step === 4 && !done && (
              <div className="chips">
                {DAYS.map((s) => <button key={s} onClick={() => submit(s)}>{s}</button>)}
              </div>
            )}
            {busy && <div className="bubble bot">⏳ …</div>}
          </div>
          {!done && (
            <div className="chat-input">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKey}
                placeholder={step === 0 ? 'Your name…' : step === 1 ? 'Phone number…' : 'Type or tap a choice…'}
              />
              <button onClick={() => { submit(input); setInput(''); }}>➤</button>
            </div>
          )}
          <div className="chat-foot">
            <a href={`tel:${brand.phone}`}>{brand.phone}</a> · <a href={`mailto:${brand.email}`}>{brand.email}</a>
          </div>
        </div>
      )}
    </>
  );
}
