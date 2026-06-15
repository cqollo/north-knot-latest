'use client';
import Image from 'next/image';

const details = [
  { label: 'Based in', value: 'Nairobi, Kenya' },
  { label: 'Lead time', value: '8 – 14 weeks' },
  { label: 'Commissions', value: 'Open' },
  { label: 'Species', value: 'Mvule, Elgon Olive, Oak, Walnut' },
];

export default function About() {
  return (
    <section
      id="about"
      style={{ padding: '7rem 3rem' }}
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '6rem',
        alignItems: 'center',
      }}>

        {/* Image stack */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5' }}>
            <Image
              src="https://images.unsplash.com/photo-1565600444102-65b7a7b09c10?w=900&q=85"
              alt="Craftsman at work in the workshop"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* Accent frame — offset bottom right */}
          <div style={{
            position: 'absolute',
            bottom: '-1.75rem',
            right: '-1.75rem',
            width: '55%',
            aspectRatio: '1',
            border: '1px solid var(--gold)',
            opacity: 0.18,
            pointerEvents: 'none',
          }} />
          {/* Floating stat */}
          <div style={{
            position: 'absolute',
            bottom: '2rem',
            left: '-2rem',
            background: 'var(--ink)',
            border: '1px solid var(--rule)',
            padding: '1.25rem 1.75rem',
          }}>
            <div className="serif" style={{ fontSize: '2rem', fontWeight: 400, color: 'var(--gold)', lineHeight: 1 }}>12</div>
            <div className="eyebrow" style={{ marginTop: '0.4rem', color: 'var(--parch-3)' }}>Years crafting</div>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="eyebrow" style={{ marginBottom: '1rem' }}>About</p>

          <h2
            className="section-title"
            style={{ marginBottom: '2rem' }}
          >
            Craft is a long<br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>conversation</em><br />
            with material
          </h2>

          <div style={{ height: '1px', background: 'var(--rule)', marginBottom: '2rem' }} />

          <p style={{ fontSize: '0.925rem', lineHeight: 1.9, color: 'var(--parch-2)', fontWeight: 300, marginBottom: '1.25rem' }}>
            I grew up watching my father repair furniture in our home in Kisumu. What started as weekend repair work became a twelve-year obsession with how wood moves, fails, and lasts.
          </p>
          <p style={{ fontSize: '0.925rem', lineHeight: 1.9, color: 'var(--parch-2)', fontWeight: 300, marginBottom: '1.25rem' }}>
            My workshop in Nairobi is small by design. I work alone or with one apprentice. Every piece has my hands on it from the first mark to the last coat of oil.
          </p>
          <p style={{ fontSize: '0.925rem', lineHeight: 1.9, color: 'var(--parch-2)', fontWeight: 300, marginBottom: '2.5rem' }}>
            I work primarily in East African hardwoods — Mvule, Elgon Olive, and Podo — alongside imported European Oak and Walnut for commissions that call for them.
          </p>

          <a href="#contact" className="btn-ghost" style={{ marginBottom: '3rem', display: 'inline-block' }}>
            Work with me
          </a>

          {/* Detail grid */}
          <div style={{ borderTop: '1px solid var(--rule)', paddingTop: '2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem 2rem' }}>
              {details.map(d => (
                <div key={d.label}>
                  <div className="eyebrow" style={{ color: 'var(--parch-3)', marginBottom: '0.4rem' }}>{d.label}</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--parch)', fontWeight: 400 }}>{d.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div { grid-template-columns: 1fr !important; gap: 4rem !important; }
          #about > div > div:first-child { max-width: 420px; }
        }
        @media (max-width: 480px) {
          #about { padding: 5rem 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}
