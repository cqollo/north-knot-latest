'use client';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 3rem 5.5rem',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(to right, rgba(12,12,10,0.85) 0%, rgba(12,12,10,0.4) 100%),
          linear-gradient(to top, rgba(12,12,10,1) 0%, rgba(12,12,10,0.1) 40%),
          url('https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1800&q=85')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
      }} />

      {/* Content */}
      <div style={{ position: 'relative', maxWidth: '680px' }}>

        <p className="eyebrow" style={{ marginBottom: '1.75rem', opacity: 0.9 }}>
          Bespoke furniture & functional art — Nairobi
        </p>

        <h1
          className="serif"
          style={{
            fontSize: 'clamp(3rem, 7vw, 6.5rem)',
            fontWeight: 400,
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
            color: 'var(--white)',
            marginBottom: '2rem',
          }}
        >
          Wood shaped<br />
          by{' '}
          <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>patient</em>
          <br />hands.
        </h1>

        <p style={{
          fontSize: '0.95rem',
          fontWeight: 300,
          lineHeight: 1.85,
          color: 'var(--parch-2)',
          maxWidth: '42ch',
          marginBottom: '2.75rem',
        }}>
          Heirloom-quality furniture built to outlast trends.
          Every joint cut by hand. Every surface finished with intention.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#work" className="btn-solid">View our work</a>
          <a href="#contact" className="btn-ghost">Commission a piece</a>
        </div>
      </div>

      {/* Bottom scroll hint */}
      <div
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          right: '3rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
        }}
      >
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--parch-3)', fontWeight: 500 }}>Scroll</span>
        <div style={{ width: '40px', height: '1px', background: 'var(--rule-2)' }} />
      </div>
    </section>
  );
}
