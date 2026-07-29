'use client';
import { useState } from 'react';
import QuoteForm from './QuoteForm';

// --- pricing model (Dallas, GA market, 2026) ---
const MATERIALS = {
  architectural: { label: 'Architectural Asphalt (most popular)', base: 475 },
  premium: { label: 'Premium / Designer Asphalt', base: 625 },
  metal: { label: 'Standing-Seam Metal', base: 1050 },
  threeTab: { label: '3-Tab Asphalt (budget)', base: 375 },
};
const PITCH = {
  low: { label: 'Low slope / flat', mult: 1.0 },
  medium: { label: 'Medium pitch', mult: 1.12 },
  steep: { label: 'Steep pitch', mult: 1.32 },
};
const STORIES = { '1': 1.0, '2': 1.08, '3+': 1.18 };
const EXTRAS = {
  tearoff: { label: 'Full tear-off of old roof', perSq: 110 },
  deck: { label: 'Deck repair / replacement', perSq: 140 },
  ventilation: { label: 'New ridge ventilation', flat: 650 },
  gutters: { label: 'New gutters & downspouts', flat: 1100 },
  skylight: { label: 'Skylight replacement', flat: 750 },
  permit: { label: 'Permit & disposal fees', flat: 450 },
};

function fmt(n) {
  return '$' + Math.round(n).toLocaleString('en-US');
}

export default function RoofEstimator() {
  const [sqft, setSqft] = useState(2000);
  const [material, setMaterial] = useState('architectural');
  const [pitch, setPitch] = useState('medium');
  const [stories, setStories] = useState('1');
  const [extras, setExtras] = useState({ tearoff: true, ventilation: true, permit: true });

  const squares = Math.max(1, sqft / 100); // 1 square = 100 sqft
  const m = MATERIALS[material];
  const p = PITCH[pitch];

  let perSq = m.base * p.mult * STORIES[stories];
  let materialCost = perSq * squares;

  let extrasCost = 0;
  Object.keys(EXTRAS).forEach((k) => {
    if (!extras[k]) return;
    const e = EXTRAS[k];
    extrasCost += e.perSq ? e.perSq * squares : e.flat;
  });

  const subtotal = materialCost + extrasCost;
  const low = subtotal * 0.92;
  const high = subtotal * 1.12;

  const toggle = (k) => setExtras((s) => ({ ...s, [k]: !s[k] }));

  return (
    <div className="estimator">
      <div className="est-grid">
        <div className="est-form">
          <div className="field">
            <label htmlFor="sqft">Roof size (square feet)</label>
            <div className="est-slider">
              <input
                id="sqft" type="range" min="800" max="6000" step="50" value={sqft}
                onChange={(e) => setSqft(Number(e.target.value))}
                style={{
                  padding: 0,
                  background: `linear-gradient(90deg, var(--orange) 0%, var(--orange) ${((sqft - 800) / (6000 - 800)) * 100}%, #d7dee0 ${((sqft - 800) / (6000 - 800)) * 100}%, #d7dee0 100%)`,
                }}
              />
              <output className="est-bubble">{sqft.toLocaleString('en-US')} sq ft</output>
            </div>
            <div className="est-presets">
              {[1500, 2000, 3500].map((v) => (
                <button key={v} type="button" className={`est-preset${sqft === v ? ' active' : ''}`} onClick={() => setSqft(v)}>
                  {v.toLocaleString('en-US')}
                </button>
              ))}
            </div>
            <div className="est-sqft-val">{(squares).toFixed(1)} squares · ~{(squares * 100).toLocaleString('en-US')} sq ft of roof</div>
          </div>

          <div className="field">
            <label htmlFor="mat">Roofing material</label>
            <select id="mat" value={material} onChange={(e) => setMaterial(e.target.value)}>
              {Object.entries(MATERIALS).map(([k, v]) => (
                <option key={k} value={k}>{v.label} (~{fmt(v.base)}/square)</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="pitch">Roof pitch</label>
            <select id="pitch" value={pitch} onChange={(e) => setPitch(e.target.value)}>
              {Object.entries(PITCH).map(([k, v]) => (
                <option key={k} value={k}>{v.label}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="stories">Stories</label>
            <select id="stories" value={stories} onChange={(e) => setStories(e.target.value)}>
              <option value="1">1 story</option>
              <option value="2">2 stories</option>
              <option value="3+">3+ stories</option>
            </select>
          </div>

          <div className="field">
            <label>Included / add-ons</label>
            <div className="est-checks">
              {Object.entries(EXTRAS).map(([k, v]) => (
                <label key={k} className={`est-check${extras[k] ? ' on' : ''}`}>
                  <input type="checkbox" checked={!!extras[k]} onChange={() => toggle(k)} />
                  <span>{v.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <aside className="est-result">
          <div className="est-result-card">
            <span className="eyebrow">Estimated range</span>
            <div className="est-price">
              {fmt(low)} <span className="est-dash">–</span> {fmt(high)}
            </div>
            <p className="est-note">
              Rough estimate for a {m.label.toLowerCase()} roof at {sqft.toLocaleString('en-US')} sq ft.
              Final price depends on inspection — book a free on-site quote for an exact number.
            </p>
            <ul className="est-break">
              <li><span>Materials &amp; labor</span><b>{fmt(materialCost)}</b></li>
              <li><span>Add-ons</span><b>{fmt(extrasCost)}</b></li>
            </ul>
            <a className="btn btn-solid btn-block" href="#book">Get This Quote Locked In <span className="arr">→</span></a>
            <p className="form-note">No obligation. A real roofer calls you back.</p>
          </div>
        </aside>
      </div>

      <div className="est-book" id="book">
        <QuoteForm
          variant="contact"
          id="quote-estimator"
          source="Online Estimator"
          estimateData={{
            size: `${sqft.toLocaleString('en-US')} sq ft (${squares.toFixed(1)} squares)`,
            material: m.label,
            pitch: p.label,
            stories: `${stories} story${stories === '1' ? '' : 'ies'}`,
            extras: Object.keys(EXTRAS).filter((k) => extras[k]).map((k) => EXTRAS[k].label).join(', ') || 'None',
            range: `${fmt(low)} – ${fmt(high)}`,
            breakdown: `Materials & labor: ${fmt(materialCost)}, Add-ons: ${fmt(extrasCost)}`,
          }}
        />
      </div>
    </div>
  );
}
