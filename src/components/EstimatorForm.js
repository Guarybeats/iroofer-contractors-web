"use client"

import React, { useState } from "react"

export default function EstimatorForm() {
  const [area, setArea] = useState(1000)
  const [material, setMaterial] = useState("asphalt")
  const [pitch, setPitch] = useState("low")
  const [laborRate, setLaborRate] = useState(3.5)
  const [overheadPct, setOverheadPct] = useState(0.15)

  const materials = {
    asphalt: { label: "Asphalt Shingles", cost: 2.5 },
    metal: { label: "Metal Roofing", cost: 6.0 },
    tile: { label: "Tile", cost: 8.5 },
  }

  const pitchMultipliers = {
    low: 1.0,
    medium: 1.15,
    steep: 1.35,
  }

  const parseNumber = (v, fallback = 0) => {
    const n = parseFloat(String(v))
    return Number.isFinite(n) ? n : fallback
  }

  const a = Math.max(0, parseNumber(area, 0))
  const matCost = materials[material]?.cost ?? 0
  const pitchMul = pitchMultipliers[pitch] ?? 1
  const lr = Math.max(0, parseNumber(laborRate, 0))
  const overhead = Math.max(0, parseNumber(overheadPct, 0))

  const materialsCost = a * matCost
  const laborCost = a * lr * pitchMul
  const subtotal = materialsCost + laborCost
  const overheadCost = subtotal * overhead
  const total = subtotal + overheadCost

  return (
    <div style={{maxWidth:680}}>
      <form onSubmit={(e)=>e.preventDefault()}>
        <div style={{marginBottom:12}}>
          <label>Area (sq ft)</label>
          <input type="number" value={area} onChange={e=>setArea(e.target.value)} style={{width:120, marginLeft:8}} />
        </div>

        <div style={{marginBottom:12}}>
          <label>Material</label>
          <select value={material} onChange={e=>setMaterial(e.target.value)} style={{marginLeft:8}}>
            {Object.entries(materials).map(([k,v])=> (
              <option key={k} value={k}>{v.label} — ${v.cost.toFixed(2)}/sqft</option>
            ))}
          </select>
        </div>

        <div style={{marginBottom:12}}>
          <label>Pitch</label>
          <select value={pitch} onChange={e=>setPitch(e.target.value)} style={{marginLeft:8}}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="steep">Steep</option>
          </select>
        </div>

        <div style={{marginBottom:12}}>
          <label>Labor rate ($/sqft)</label>
          <input type="number" value={laborRate} onChange={e=>setLaborRate(e.target.value)} style={{width:120, marginLeft:8}} />
        </div>

        <div style={{marginBottom:18}}>
          <label>Overhead (%)</label>
          <input type="number" value={overheadPct} onChange={e=>setOverheadPct(e.target.value)} step="0.01" style={{width:120, marginLeft:8}} />
        </div>

        <div style={{padding:12, border:'1px solid #eee', borderRadius:6}}>
          <div style={{marginBottom:6}}>Materials: ${materialsCost.toFixed(2)}</div>
          <div style={{marginBottom:6}}>Labor: ${laborCost.toFixed(2)}</div>
          <div style={{marginBottom:6}}>Subtotal: ${subtotal.toFixed(2)}</div>
          <div style={{marginBottom:6}}>Overhead ({(overhead*100).toFixed(1)}%): ${overheadCost.toFixed(2)}</div>
          <div style={{fontWeight:700, marginTop:8}}>Estimated Total: ${total.toFixed(2)}</div>
        </div>

        <div style={{marginTop:14}}>
          <button type="button" onClick={()=>alert(`Estimated total: $${total.toFixed(2)} — reach out to request a formal quote.`)} style={{padding:'8px 14px'}}>Request Quote</button>
        </div>
      </form>
    </div>
  )
}
