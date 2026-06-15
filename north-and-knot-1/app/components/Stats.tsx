import { stats } from '../data';

export default function Stats() {
  return (
    <div style={{ borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
      <div className="stats-grid">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="stat-cell"
            style={{ borderRight: i < stats.length - 1 ? '1px solid var(--rule)' : 'none' }}
          >
            <div
              className="serif"
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 400,
                color: 'var(--gold)',
                lineHeight: 1,
                marginBottom: '0.6rem',
              }}
            >
              {s.num}
            </div>
            <div className="eyebrow" style={{ color: 'var(--parch-3)', letterSpacing: '0.16em' }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .stat-cell {
          padding: 3rem 2rem;
          text-align: center;
        }
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .stat-cell:nth-child(2) { border-right: none !important; }
          .stat-cell:nth-child(3) { border-right: 1px solid var(--rule) !important; border-top: 1px solid var(--rule); }
          .stat-cell:nth-child(4) { border-top: 1px solid var(--rule); }
        }
      `}</style>
    </div>
  );
}
