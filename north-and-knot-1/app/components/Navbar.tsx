'use client';
import { useState, useEffect } from 'react';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      {/* Progress rule */}
      <div
        className="fixed top-0 left-0 z-[70] h-px transition-all duration-150"
        style={{ width: `${progress}%`, background: 'var(--gold)' }}
      />

      {/* Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(12,12,10,0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--rule)' : '1px solid transparent',
        }}
      >
        <div
          className="flex items-center justify-between"
          style={{ padding: scrolled ? '0 3rem' : '0 3rem', height: scrolled ? '64px' : '80px', transition: 'height 0.4s ease' }}
        >
          {/* Logo */}
          <a
            href="#hero"
            className="serif tracking-wide select-none"
            style={{ fontSize: '1.25rem', color: 'var(--white)', fontWeight: 400, textDecoration: 'none' }}
          >
            North <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>&</span> Knot
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center" style={{ gap: '2.75rem', listStyle: 'none' }}>
            {links.map(l => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="hover-gold"
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 500,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--parch-2)',
                    textDecoration: 'none',
                  }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a href="#contact" className="btn-solid hidden md:inline-block" style={{ fontSize: '0.65rem', padding: '0.7rem 1.6rem' }}>
            Commission
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center"
            style={{ width: '32px', height: '32px', gap: '6px', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span style={{
              display: 'block', width: '22px', height: '1px', background: 'var(--parch)',
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }} />
            <span style={{
              display: 'block', width: '22px', height: '1px', background: 'var(--parch)',
              transition: 'opacity 0.3s ease',
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: 'block', width: '22px', height: '1px', background: 'var(--parch)',
              transition: 'transform 0.3s ease',
              transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className="fixed md:hidden z-40"
        style={{
          top: '64px', left: 0, right: 0,
          background: 'var(--ink-2)',
          borderBottom: '1px solid var(--rule)',
          padding: menuOpen ? '2rem 3rem 2.5rem' : '0 3rem',
          maxHeight: menuOpen ? '400px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.4s ease, padding 0.3s ease',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              onClick={close}
              className="hover-gold"
              style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--parch-2)', textDecoration: 'none' }}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={close} className="btn-solid" style={{ textAlign: 'center', marginTop: '0.5rem' }}>
            Commission a piece
          </a>
        </div>
      </div>
    </>
  );
}
