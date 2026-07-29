"use client";

import { useState, useCallback } from "react";

export default function EstimatorForm() {
  const [area, setArea] = useState(1000);
  const [material, setMaterial] = useState("asphalt");
  const [pitch, setPitch] = useState("low");
  const [laborRate, setLaborRate] = useState(3.5);
  const [overheadPct, setOverheadPct] = useState(0.15);
  const [msg, setMsg] = useState("");

  const materials = {
    asphalt: { label: "Asphalt Shingles", cost: 2.5 },
    metal: { label: "Metal Roofing", cost: 6.0 },
    tile: { label: "Tile", cost: 8.5 },
  };

  const pitchMultipliers = {
    low: 1.0,
    medium: 1.15,
    steep: 1.35,
  };

  const safeNum = (v, fallback) => {
    if (v === "" || v == null) return fallback;
    const n = parseFloat(v);
    return Number.isFinite(n) ? n : fallback;
  };

  const a = Math.max(0, safeNum(area, 0));
  const matCost = materials[material]?.cost ?? 0;
  const pitchMul = pitchMultipliers[pitch] ?? 1;
  const lr = Math.max(0, safeNum(laborRate, 0));
  const overhead = Math.max(0, safeNum(overheadPct, 0));

  const materialsCost = a * matCost;
  const laborCost = a * lr * pitchMul;
  const subtotal = materialsCost + laborCost;
  const overheadCost = subtotal * overhead;
  const total = subtotal + overheadCost;

  const handleRequestQuote = useCallback(() => {
    setMsg(`Estimated total: $${total.toFixed(2)} — reach out to request a formal quote.`);
    const el =
      document.getElementById("quote-estimator") ||
      document.getElementById("quote");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [total]);

  return (
    <div style={{ maxWidth: 680 }}>
      <form onSubmit={(e) => e.preventDefault()}>
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="est-area">Area (sq ft)</label>
          <input
            id="est-area"
            type="number"
            min="0"
            step="1"
            value={area}
            onChange={(e) => setArea(safeNum(e.target.value, 0))}
            style={{ width: 120, marginLeft: 8 }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label htmlFor="est-material">Material</label>
          <select
            id="est-material"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            style={{ marginLeft: 8 }}
          >
            {Object.entries(materials).map(([k, v]) => (
              <option key={k} value={k}>
                {v.label} — ${v.cost.toFixed(2)}/sqft
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: 12 }}>
          <label htmlFor="est-pitch">Pitch</label>
          <select
            id="est-pitch"
            value={pitch}
            onChange={(e) => setPitch(e.target.value)}
            style={{ marginLeft: 8 }}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="steep">Steep</option>
          </select>
        </div>

        <div style={{ marginBottom: 12 }}>
          <label htmlFor="est-labor">Labor rate ($/sqft)</label>
          <input
            id="est-labor"
            type="number"
            min="0"
            step="0.1"
            value={laborRate}
            onChange={(e) => setLaborRate(safeNum(e.target.value, 0))}
            style={{ width: 120, marginLeft: 8 }}
          />
        </div>

        <div style={{ marginBottom: 18 }}>
          <label htmlFor="est-overhead">Overhead (%)</label>
          <input
            id="est-overhead"
            type="number"
            min="0"
            max="100"
            step="0.01"
            value={overheadPct}
            onChange={(e) => setOverheadPct(safeNum(e.target.value, 0))}
            style={{ width: 120, marginLeft: 8 }}
          />
        </div>

        <div
          style={{
            padding: 12,
            border: "1px solid #eee",
            borderRadius: 6,
          }}
        >
          <div style={{ marginBottom: 6 }}>
            Materials: ${materialsCost.toFixed(2)}
          </div>
          <div style={{ marginBottom: 6 }}>
            Labor: ${laborCost.toFixed(2)}
          </div>
          <div style={{ marginBottom: 6 }}>
            Subtotal: ${subtotal.toFixed(2)}
          </div>
          <div style={{ marginBottom: 6 }}>
            Overhead ({(overhead * 100).toFixed(1)}%): $
            {overheadCost.toFixed(2)}
          </div>
          <div style={{ fontWeight: 700, marginTop: 8 }}>
            Estimated Total: ${total.toFixed(2)}
          </div>
        </div>

        <div style={{ marginTop: 14 }}>
          <button
            type="button"
            onClick={handleRequestQuote}
            style={{ padding: "8px 14px" }}
          >
            Request Quote
          </button>
          {msg && (
            <p
              style={{
                color: "var(--green, #37d67a)",
                fontWeight: 600,
                marginTop: 12,
                fontSize: ".9rem",
              }}
            >
              {msg}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
