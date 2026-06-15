'use client';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--rule)', background: 'var(--ink)' }}>

      {/* Main footer */}
      <div style={{
        padding: '4rem 3rem',
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        gap: '2rem',
      }}>
        {/* Brand */}
        <div>
          <div className="serif" style={{ fontSize: '1.35rem', fontWeight: 400, color: 'var(--white)', marginBottom: '0.6rem' }}>
            North <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>&</em> Knot
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--parch-3)', fontWeight: 300, lineHeight: 1.7 }}>
            Bespoke furniture & functional art<br />handcrafted in Nairobi, Kenya
          </p>
        </div>

        {/* Nav links — centred */}
        <nav style={{ display: 'flex', gap: '2rem' }}>
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="hover-gold"
              style={{
                fontSize: '0.65rem',
                fontWeight: 500,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--parch-3)',
                textDecoration: 'none',
                transition: 'color 0.25s ease',
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right — CTA */}
        <div style={{ textAlign: 'right' }}>
          <a href="#contact" className="btn-ghost" style={{ fontSize: '0.65rem', padding: '0.7rem 1.5rem' }}>
            Commission a piece
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid var(--rule)',
        padding: '1.25rem 3rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.75rem',
      }}>
        <p style={{ fontSize: '0.7rem', color: 'var(--parch-3)', fontWeight: 300 }}>
          © {new Date().getFullYear()} North & Knot. All rights reserved.
        </p>
        <p style={{ fontSize: '0.7rem', color: 'var(--parch-3)', fontWeight: 300 }}>
          Industrial Area, Nairobi · hello@northandknot.co.ke
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer > div:first-child { grid-template-columns: 1fr !important; text-align: center; gap: 2.5rem !important; }
          footer > div:first-child > div:last-child { text-align: center !important; }
          footer > div:first-child > nav { justify-content: center; flex-wrap: wrap; gap: 1.25rem !important; }
        }
        @media (max-width: 480px) {
          footer > div:first-child, footer > div:last-child { padding: 2.5rem 1.5rem !important; }
          footer > div:last-child { flex-direction: column; text-align: center; }
        }
      `}</style>
    </footer>
  );
}
