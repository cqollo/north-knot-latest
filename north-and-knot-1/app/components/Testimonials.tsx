import { testimonials } from '../data';

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{ padding: '7rem 3rem', background: 'var(--ink-2)', borderTop: '1px solid var(--rule)' }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '4.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div>
          <p className="eyebrow" style={{ marginBottom: '1rem' }}>Testimonials</p>
          <h2 className="section-title">What clients say</h2>
        </div>
        <p style={{ fontSize: '0.85rem', color: 'var(--parch-3)', fontWeight: 300, maxWidth: '36ch', lineHeight: 1.8 }}>
          From homeowners to architects and interior designers across East Africa.
        </p>
      </div>

      {/* Testimonial cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--rule)' }}>
        {testimonials.map((t, i) => (
          <div
            key={i}
            style={{
              background: 'var(--ink-2)',
              padding: '3rem 2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0',
            }}
          >
            {/* Large opening quote */}
            <div
              className="serif"
              style={{
                fontSize: '5rem',
                lineHeight: 0.8,
                color: 'var(--gold)',
                opacity: 0.25,
                marginBottom: '1.75rem',
                fontStyle: 'italic',
                userSelect: 'none',
              }}
            >
              &ldquo;
            </div>

            <p
              className="serif"
              style={{
                fontSize: '1.05rem',
                fontWeight: 400,
                fontStyle: 'italic',
                lineHeight: 1.75,
                color: 'var(--parch)',
                marginBottom: '2.5rem',
                flexGrow: 1,
              }}
            >
              {t.quote}
            </p>

            <div style={{ borderTop: '1px solid var(--rule)', paddingTop: '1.5rem' }}>
              <div style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--white)', letterSpacing: '0.02em' }}>
                {t.author}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--parch-3)', marginTop: '0.3rem', fontWeight: 300 }}>
                {t.role}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          #testimonials > div:last-child { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          #testimonials { padding: 5rem 1.5rem !important; }
          #testimonials > div:first-child { flex-direction: column !important; }
        }
      `}</style>
    </section>
  );
}
