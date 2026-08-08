"use client";
import { useState } from "react";
import { brand } from "@/lib/brand";

const SQFT = [800, 1200, 1600, 2000, 2400, 3000, 3500, 4000];
const ROOF_TYPES = ["Architectural shingles", "Metal roofing", "Tile/Clay", "Flat TPO"];

const BASE_RATE = 4.5;
const TYPE_MULTIPLIER = { "Architectural shingles": 1.0, "Metal roofing": 2.0, "Tile/Clay": 4.5, "Flat TPO": 2.6 };

export default function QuickEstimator({ compact = false }) {
  const [sqft, setSqft] = useState(1600);
  const [type, setType] = useState("Architectural shingles");
  const [show, setShow] = useState(false);

  const base = Math.round(BASE_RATE * (sqft / 100) * TYPE_MULTIPLIER[type]);
  const low = Math.round(base * 0.8);
  const high = Math.round(base * 1.2);

  return (
    <div className={compact ? "quick-est" : "quick-est full"}>
      <div className="qe-head">
        <span className="eyebrow">Quick estimate</span>
        <h3>Roof size &amp; style</h3>
      </div>

      {!compact && show && (
        <div className="qe-result">
          <div className="qe-price">
            <span className="qe-amount">${low.toLocaleString()}–${high.toLocaleString()}</span>
            <span className="qe-note">For {sqft.toLocaleString()} sq ft • {type}</span>
          </div>
          <p className="qe-cta">
            That’s a starting range. Your exact price depends on pitch, decking, and details.
            A free on-site inspection locks it in.
          </p>
        </div>
      )}

      <div className="qe-form">
        <div className="field">
          <label>Square footage</label>
          <select value={sqft} onChange={(e) => setSqft(+e.target.value)}>
            {SQFT.map((s) => <option key={s} value={s}>{s} sq ft</option>)}
          </select>
        </div>
        <div className="field">
          <label>Roof type</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            {ROOF_TYPES.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
        {compact && (
          <button
            type="button"
            className="btn btn-solid btn-block"
            onClick={() => setShow(true)}
          >
            Show my price range <span className="arr">→</span>
          </button>
        )}
        {compact && show && (
          <div className="qe-result compact">
            <span className="qe-amount">${low.toLocaleString()}–${high.toLocaleString()}</span>
            <span className="qe-hint">Starting range for {type}</span>
          </div>
        )}
        {!compact && (
          <button
            type="button"
            className="btn btn-solid btn-block"
            onClick={() => {
              const tel = `tel:${brand.phone}`;
              window.location.href = `${tel}?estimated=${low}-${high}`;
            }}
          >
            Lock in my price <span className="arr">→</span>
          </button>
        )}
      </div>
    </div>
  );
}
