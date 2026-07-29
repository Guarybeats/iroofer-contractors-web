'use client';
import { useState } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://iroofer-lead-api-556154145006.us-central1.run.app';

export default function HeroForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | ok | error
  const [msg, setMsg] = useState('');
  const [errors, setErrors] = useState({});

  function validate(fd) {
    const errs = {};
    if (!fd.get('fullName')?.trim()) errs.fullName = 'Please enter your name';
    if (!fd.get('phone')?.trim()) errs.phone = 'Please enter your phone number';
    return errs;
  }

  async function onSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const errs = validate(fd);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus('sending');
    const payload = {
      fullName: fd.get('fullName') || '',
      phone: fd.get('phone') || '',
      email: '',
      address: '',
      service: '',
      howSoon: '',
      message: '',
      source: 'hero'
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
    <form className="hform" id="hform" onSubmit={onSubmit}>
      <div className="bar" />
      <div className="pad">
        <h4>Free estimate in 60 seconds</h4>
        <p className="sub">No spam. A real roofer calls you back.</p>
        <div className="field">
          <label htmlFor="hn">Your name</label>
          <input id="hn" name="fullName" type="text" required placeholder="Jane Doe" className={errors.fullName ? 'err' : ''} />
          {errors.fullName && <span className="field-error">{errors.fullName}</span>}
        </div>
        <div className="field">
          <label htmlFor="hp">Phone number</label>
          <input id="hp" name="phone" type="tel" required placeholder="(470) 236-1410" className={errors.phone ? 'err' : ''} />
          {errors.phone && <span className="field-error">{errors.phone}</span>}
        </div>
        <button className="btn btn-solid" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : <>Get My Free Quote <span className="arr">→</span></>}
        </button>
        {status === 'ok' && <p style={{ color: 'var(--rust-600)', fontWeight: 600, marginTop: 12, fontSize: '.9rem' }}>{msg}</p>}
        {status === 'error' && <p style={{ color: '#b00', fontWeight: 600, marginTop: 12, fontSize: '.9rem' }}>{msg}</p>}
      </div>
    </form>
  );
}
