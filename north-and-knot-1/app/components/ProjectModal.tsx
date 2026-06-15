'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { Project } from '../types';

export default function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKey);
    }
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'rgba(8,8,6,0.94)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1.5rem',
        backdropFilter: 'blur(4px)',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%', maxWidth: '860px',
          background: 'var(--ink-2)',
          border: '1px solid var(--rule)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          maxHeight: '90vh',
          overflow: 'hidden',
        }}
      >
        {/* Image */}
        <div style={{ position: 'relative', aspectRatio: '3/4' }}>
          <Image src={project.img} alt={project.name} fill style={{ objectFit: 'cover' }} sizes="430px" />
        </div>

        {/* Info */}
        <div style={{
          padding: '3rem 2.5rem',
          display: 'flex', flexDirection: 'column', gap: '0',
          overflowY: 'auto',
        }}>
          <p className="eyebrow" style={{ marginBottom: '1.25rem' }}>
            {project.cat.charAt(0).toUpperCase() + project.cat.slice(1)}
          </p>

          <h2 className="serif" style={{ fontSize: '1.75rem', fontWeight: 400, color: 'var(--white)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
            {project.name}
          </h2>

          <div style={{ height: '1px', background: 'var(--rule)', marginBottom: '1.5rem' }} />

          <p style={{ fontSize: '0.875rem', lineHeight: 1.85, color: 'var(--parch-2)', fontWeight: 300, marginBottom: '2rem' }}>
            {project.desc}
          </p>

          {/* Meta */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2.5rem' }}>
            {[
              { label: 'Wood', value: project.wood },
              { label: 'Build time', value: project.time },
              { label: 'Dimensions', value: project.size },
            ].map(m => (
              <div key={m.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 500, color: 'var(--parch-3)' }}>
                  {m.label}
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--parch)', fontWeight: 400 }}>{m.value}</span>
              </div>
            ))}
          </div>

          <div style={{ height: '1px', background: 'var(--rule)', marginBottom: '2rem' }} />

          <a href="#contact" onClick={onClose} className="btn-solid" style={{ textAlign: 'center', marginTop: 'auto' }}>
            Commission something similar
          </a>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute', top: '1.25rem', right: '1.25rem',
            width: '36px', height: '36px',
            background: 'var(--ink)', border: '1px solid var(--rule)',
            color: 'var(--parch-3)', fontSize: '1rem', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'color 0.2s ease',
            fontFamily: 'sans-serif',
          }}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
