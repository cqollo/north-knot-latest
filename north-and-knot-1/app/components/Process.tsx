'use client';
import { processSteps } from '../data';

export default function Process() {
  return (
    <section id="process" style={{ padding: '7rem 3rem', background: 'var(--ink-2)', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>

      {/* Header */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'end', marginBottom: '5rem' }}>
        <div>
          <p className="eyebrow" style={{ marginBottom: '1rem' }}>How we work</p>
          <h2 className="section-title">
            From conversation<br />to completed piece
          </h2>
        </div>
        <p style={{ fontSize: '0.925rem', lineHeight: 1.9, color: 'var(--parch-2)', fontWeight: 300, maxWidth: '44ch' }}>
          Every commission follows the same unhurried path. We take no shortcuts and make no compromises on the quality of material or craft.
        </p>
      </div>

      {/* Steps — numbered timeline */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        {processSteps.map((step, i) => (
          <div
            key={step.numeral}
            style={{
              display: 'grid',
              gridTemplateColumns: '4rem 1fr 2fr',
              gap: '2.5rem',
              alignItems: 'start',
              padding: '2.25rem 0',
              borderTop: '1px solid var(--rule)',
              borderBottom: i === processSteps.length - 1 ? '1px solid var(--rule)' : 'none',
            }}
          >
            {/* Numeral */}
            <div
              className="serif"
              style={{
                fontSize: '0.875rem',
                fontWeight: 400,
                color: 'var(--gold)',
                paddingTop: '0.15rem',
                fontStyle: 'italic',
              }}
            >
              {step.numeral}
            </div>

            {/* Title */}
            <h3
              className="serif"
              style={{
                fontSize: '1.2rem',
                fontWeight: 400,
                color: 'var(--white)',
                lineHeight: 1.3,
              }}
            >
              {step.title}
            </h3>

            {/* Description */}
            <p style={{ fontSize: '0.875rem', lineHeight: 1.9, color: 'var(--parch-2)', fontWeight: 300 }}>
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          #process > div:last-child > div {
            grid-template-columns: 2.5rem 1fr !important;
            grid-template-rows: auto auto;
          }
          #process > div:last-child > div > p:last-child {
            grid-column: 2;
          }
        }
        @media (max-width: 480px) {
          #process { padding: 5rem 1.5rem !important; }
          #process > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
