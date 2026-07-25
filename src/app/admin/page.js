'use client';
import { useState } from 'react';
import { brand } from '@/lib/brand';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8100';

export default function AdminPage() {
  const [pass, setPass] = useState('');
  const [leads, setLeads] = useState(null);
  const [err, setErr] = useState('');

  async function load(e) {
    e.preventDefault();
    setErr('');
    try {
      const res = await fetch(`${API_URL}/api/leads`, {
        headers: { Authorization: 'Basic ' + btoa(`admin:${pass}`) }
      });
      if (!res.ok) throw new Error('Invalid password');
      const data = await res.json();
      setLeads(data.leads || []);
    } catch (e) {
      setErr('Could not load leads. Check the password and that the API is running.');
    }
  }

  return (
    <div className="admin-wrap">
      <h1>Lead Inbox — {brand.name}</h1>
      {leads === null && (
        <form onSubmit={load} style={{ maxWidth: 360 }}>
          <p>Enter the admin password to view submissions.</p>
          <div className="field">
            <label htmlFor="ap">Admin password</label>
            <input id="ap" type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
          </div>
          <button className="btn" type="submit">View leads</button>
          {err && <p style={{ color: '#b00', fontWeight: 600, marginTop: 10 }}>{err}</p>}
        </form>
      )}
      {leads !== null && (
        <>
          <p><button className="btn btn-secondary" onClick={() => setLeads(null)}>Log out</button></p>
          {leads.length === 0 && <p>No leads yet. Submissions from the quote form will appear here.</p>}
          {leads.map((l) => (
            <div className="lead-detail" key={l.id}>
              <strong>{l.full_name}</strong> · {l.phone}
              {l.email ? ` · ${l.email}` : ''}<br />
              <span style={{ color: 'var(--muted)' }}>
                {l.service || '—'} · {l.how_soon || '—'} · {l.address || 'no address'}
              </span>
              {l.message ? <div style={{ marginTop: 6 }}>“{l.message}”</div> : null}
              <div className="small" style={{ color: 'var(--slate-400)', marginTop: 4 }}>
                {new Date(l.created_at).toLocaleString()}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
