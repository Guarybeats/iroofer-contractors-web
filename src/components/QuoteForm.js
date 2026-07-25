'use client';
import { useState } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8100';

export default function QuoteForm({ variant = 'top', id = 'quote' }) {
  const [status, setStatus] = useState('idle'); // idle | sending | ok | error
  const [msg, setMsg] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    const fd = new FormData(e.currentTarget);
    const payload = {
      fullName: fd.get('fullName') || '',
      phone: fd.get('phone') || '',
      email: fd.get('email') || '',
      address: fd.get('address') || '',
      service: fd.get('service') || '',
      howSoon: fd.get('howSoon') || '',
      message: fd.get('message') || ''
    };
    try {
      const res = await fetch(`${API_URL}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('ok');
      setMsg('Request received! A member of our local team will reach out shortly.');
      e.currentTarget.reset();
    } catch (err) {
      setStatus('error');
      setMsg('Something went wrong sending your request. Please call us directly — we’re local and happy to help.');
    }
  }

  return (
    <form className="quote-card" id={id} onSubmit={onSubmit}>
      <h3>Get Your Free Roof Quote</h3>
      <p style={{ color: 'var(--muted)', marginTop: -6, marginBottom: 16, fontSize: '.92rem' }}>
        No pressure. No obligation. Just an honest local estimate.
      </p>
      <div className="field">
        <label htmlFor={`${id}-name`}>Full Name</label>
        <input id={`${id}-name`} name="fullName" required placeholder="Jane Homeowner" />
      </div>
      <div className="field">
        <label htmlFor={`${id}-phone`}>Phone</label>
        <input id={`${id}-phone`} name="phone" required type="tel" placeholder="(770) 555-0100" />
      </div>
      <div className="field">
        <label htmlFor={`${id}-email`}>Email</label>
        <input id={`${id}-email`} name="email" type="email" placeholder="jane@email.com" />
      </div>
      <div className="field">
        <label htmlFor={`${id}-address`}>Property Address</label>
        <input id={`${id}-address`} name="address" placeholder="123 Main St, Dallas, GA" />
      </div>
      <div className="field">
        <label htmlFor={`${id}-service`}>Service Needed</label>
        <select id={`${id}-service`} name="service" defaultValue="">
          <option value="" disabled>Select a service…</option>
          <option>Roof Repair</option>
          <option>Roof Replacement</option>
          <option>New Construction</option>
          <option>Not sure yet</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor={`${id}-soon`}>How Soon?</label>
        <select id={`${id}-soon`} name="howSoon" defaultValue="">
          <option value="" disabled>Select timing…</option>
          <option>Urgent / leaking now</option>
          <option>Within a week</option>
          <option>This month</option>
          <option>Just exploring</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor={`${id}-msg`}>Message</label>
        <textarea id={`${id}-msg`} name="message" rows={3} placeholder="Tell us what you’re seeing…" />
      </div>
      <button className="btn btn-block" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Get My Free Quote'}
      </button>
      {status === 'ok' && <p style={{ color: 'var(--rust-600)', fontWeight: 600, marginTop: 12 }}>{msg}</p>}
      {status === 'error' && <p style={{ color: '#b00', fontWeight: 600, marginTop: 12 }}>{msg}</p>}
      <p className="form-note">By submitting you agree to be contacted by iRoofer Contractors about your roof.</p>
    </form>
  );
}
