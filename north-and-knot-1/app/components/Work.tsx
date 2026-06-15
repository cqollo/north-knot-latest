'use client';
import { useState } from 'react';
import Image from 'next/image';
import { projects, categories } from '../data';
import { Project } from '../types';
import ProjectModal from './ProjectModal';

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(9);
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = activeFilter === 'all' ? projects : projects.filter(p => p.cat === activeFilter);
  const visible = filtered.slice(0, visibleCount);
  const hasMore = filtered.length > visibleCount;

  return (
    <section id="work" style={{ padding: '7rem 3rem' }}>

      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', marginBottom: '4rem' }}>
        <div>
          <p className="eyebrow" style={{ marginBottom: '1rem' }}>Portfolio</p>
          <h2 className="section-title">Selected work</h2>
        </div>

        {/* Filter pills */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {categories.map(cat => {
            const active = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => { setActiveFilter(cat); setVisibleCount(9); }}
                style={{
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '0.65rem',
                  fontWeight: 500,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  padding: '0.5rem 1.1rem',
                  border: '1px solid',
                  borderColor: active ? 'var(--gold)' : 'var(--rule-2)',
                  background: active ? 'var(--gold)' : 'transparent',
                  color: active ? 'var(--ink)' : 'var(--parch-3)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
              >
                {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid — clean 3 col, uniform cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1.5px',
        background: 'var(--rule)',
      }}>
        {visible.map(p => (
          <div
            key={p.id}
            onClick={() => setSelected(p)}
            style={{ position: 'relative', aspectRatio: '4/5', cursor: 'pointer', overflow: 'hidden', background: 'var(--ink-2)' }}
            className="project-item"
          >
            <Image
              src={p.img}
              alt={p.name}
              fill
              style={{ objectFit: 'cover', transition: 'transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)' }}
              sizes="(max-width: 768px) 100vw, 33vw"
              className="project-img"
            />

            {/* Hover overlay */}
            <div
              className="project-overlay"
              style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(12,12,10,0.95) 0%, rgba(12,12,10,0.15) 60%)',
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                padding: '1.75rem',
                opacity: 0,
                transition: 'opacity 0.35s ease',
              }}
            >
              <p className="eyebrow" style={{ marginBottom: '0.4rem', opacity: 0.85 }}>{p.cat}</p>
              <h3 className="serif" style={{ fontSize: '1.15rem', fontWeight: 400, color: 'var(--white)', lineHeight: 1.25 }}>
                {p.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Load more */}
      {hasMore && (
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <button
            className="btn-ghost"
            onClick={() => setVisibleCount(v => v + 3)}
            style={{ background: 'none', cursor: 'pointer', fontFamily: 'Jost, sans-serif' }}
          >
            Load more
          </button>
        </div>
      )}

      <style>{`
        .project-item:hover .project-img { transform: scale(1.06); }
        .project-item:hover .project-overlay { opacity: 1; }

        @media (max-width: 768px) {
          #work > div:nth-child(2) { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          #work > div:nth-child(2) { grid-template-columns: 1fr; }
        }
      `}</style>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
