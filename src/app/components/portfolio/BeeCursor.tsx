import { useBeeCursor } from '../../hooks/useBeeCursor';

export function BeeCursor() {
  const { elRef, angle } = useBeeCursor();

  return (
    <div
      ref={elRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        willChange: 'transform',
        transform: 'translate(-100px,-100px)',
      }}
    >
      <div style={{ transform: `translate(-14px, -14px) rotate(${angle}deg)`, transformOrigin: '14px 14px' }}>
        <svg width="28" height="36" viewBox="0 0 28 36" fill="none">
          <ellipse cx="7" cy="11" rx="7" ry="5" fill="#c8e8f8" opacity="0.82" style={{ animation: 'beeWingL 0.12s ease-in-out infinite alternate' }} />
          <ellipse cx="21" cy="11" rx="7" ry="5" fill="#c8e8f8" opacity="0.82" style={{ animation: 'beeWingR 0.12s ease-in-out infinite alternate' }} />
          <ellipse cx="14" cy="18" rx="7" ry="10" fill="#f5c430" />
          <rect x="7" y="16" width="14" height="3.5" rx="1.5" fill="#2a1a00" opacity="0.75" />
          <rect x="7" y="21" width="14" height="3.5" rx="1.5" fill="#2a1a00" opacity="0.75" />
          <circle cx="14" cy="9" r="5.5" fill="#f5c430" />
          <circle cx="11.5" cy="7.5" r="1.5" fill="#2a1a00" />
          <circle cx="16.5" cy="7.5" r="1.5" fill="#2a1a00" />
          <path d="M11 5 Q8 1 6 0" stroke="#2a1a00" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          <path d="M17 5 Q20 1 22 0" stroke="#2a1a00" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          <circle cx="5.5" cy="0.5" r="1.5" fill="#2a1a00" />
          <circle cx="22.5" cy="0.5" r="1.5" fill="#2a1a00" />
          <path d="M14 28 L12 35 L14 33 L16 35 Z" fill="#8b6914" />
        </svg>
      </div>
    </div>
  );
}
