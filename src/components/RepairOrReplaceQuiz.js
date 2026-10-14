'use client';
import { useState } from 'react';

// Short, honest self-check. Scores are rough signals only — the real answer
// comes from looking at the roof. No prices here; ranges live on /estimator/.
const QUESTIONS = [
  {
    id: 'age',
    q: 'How old is your roof?',
    opts: [
      { t: 'Less than 10 years', s: 0 },
      { t: '10 to 20 years', s: 1 },
      { t: 'More than 20 years', s: 2 },
      { t: 'Not sure', s: 1 },
    ],
  },
  {
    id: 'leaks',
    q: 'Do you have leaks or ceiling stains?',
    opts: [
      { t: 'No', s: 0 },
      { t: 'One spot', s: 1 },
      { t: 'More than one spot', s: 2 },
    ],
  },
  {
    id: 'missing',
    q: 'Are shingles missing, curling, or cracked?',
    opts: [
      { t: 'No', s: 0 },
      { t: 'A few', s: 1 },
      { t: 'Lots, or on more than one side', s: 2 },
    ],
  },
  {
    id: 'granules',
    q: 'Do you see shingle grit (like coarse sand) in your gutters?',
    opts: [
      { t: 'No', s: 0 },
      { t: 'A little', s: 1 },
      { t: 'A lot', s: 2 },
    ],
  },
  {
    id: 'storm',
    q: 'Did a recent storm hit your home (hail, high wind, or a fallen limb)?',
    opts: [
      { t: 'No', s: 0 },
      { t: 'Yes, or I’m not sure', s: 1 },
    ],
  },
];

function result(score, storm) {
  if (score <= 2 && !storm) {
    return {
      tag: 'Likely a repair (or nothing yet)',
      body: 'Your answers point to a roof with life left. A small fix may be all you need. A free roof check will tell you for sure.',
    };
  }
  if (score >= 7) {
    return {
      tag: 'Likely a new roof',
      body: 'Your answers point to a worn-out roof. Repairs may not hold much longer. We will check it for free and tell you straight. Sometimes a repair still works.',
    };
  }
  return {
    tag: 'Have us look',
    body: storm
      ? 'Storm damage is hard to see from the ground. Let us check it for free and take photos, before you call your insurance company.'
      : 'Your roof could go either way. A free roof check with photos will show if a repair is enough.',
  };
}

export default function RepairOrReplaceQuiz() {
  const [answers, setAnswers] = useState({});
  const done = QUESTIONS.every((q) => answers[q.id] !== undefined);
  const score = QUESTIONS.reduce((n, q) => n + (answers[q.id] ?? 0), 0);
  const r = done ? result(score, answers.storm === 1) : null;

  return (
    <div className="rv" style={{ background: '#fff', border: '1px solid rgba(22,29,37,.12)', borderRadius: 10, padding: '22px 22px 26px' }}>
      {QUESTIONS.map((q, i) => (
        <fieldset key={q.id} style={{ border: 0, padding: 0, margin: i ? '18px 0 0' : 0 }}>
          <legend style={{ fontWeight: 800, color: '#161d25', marginBottom: 8 }}>{i + 1}. {q.q}</legend>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {q.opts.map((o) => {
              const on = answers[q.id] === o.s && answers[`${q.id}_t`] === o.t;
              return (
                <button
                  type="button"
                  key={o.t}
                  aria-pressed={on}
                  onClick={() => setAnswers({ ...answers, [q.id]: o.s, [`${q.id}_t`]: o.t })}
                  className={`est-preset${on ? ' active' : ''}`}
                >
                  {o.t}
                </button>
              );
            })}
          </div>
        </fieldset>
      ))}
      <div aria-live="polite" style={{ marginTop: 22 }}>
        {r ? (
          <div style={{ borderTop: '1px solid #e6e9ee', paddingTop: 16 }}>
            <p style={{ fontWeight: 900, fontSize: '1.25rem', color: 'var(--orange)', margin: 0 }}>{r.tag}</p>
            <p style={{ color: '#52606b', marginTop: 8 }}>{r.body}</p>
            <p style={{ color: '#8ea2b4', fontSize: '.85rem', marginTop: 6 }}>This quiz is a rough guide, not a roof check.</p>
            <a className="btn btn-ink" href="#book" style={{ marginTop: 12 }}>Book my free roof check <span className="arr">→</span></a>
          </div>
        ) : (
          <p style={{ color: '#8ea2b4', fontSize: '.9rem', margin: 0 }}>Answer all 5 to see your result.</p>
        )}
      </div>
    </div>
  );
}
