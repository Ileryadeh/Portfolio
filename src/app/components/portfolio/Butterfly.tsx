import type { ButterflyConfig } from '../../../types';

type ButterflyProps = {
  cfg: ButterflyConfig;
};

export function Butterfly({ cfg }: ButterflyProps) {
  return (
    <div
      style={{
        position: 'fixed',
        left: `${cfg.startX}vw`,
        top: `${cfg.startY}vh`,
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 0.18,
        animation: `butterflyFloat${cfg.id} ${cfg.duration}s ease-in-out ${cfg.delay}s infinite`,
        transform: `scale(${cfg.scale})`,
      }}
    >
      <svg width="36" height="28" viewBox="0 0 36 28" fill="none" style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))' }}>
        <ellipse cx="10" cy="12" rx="10" ry="12" fill={cfg.color1} opacity="0.88" style={{ animation: 'wingFlapL 0.35s ease-in-out infinite alternate', transformOrigin: '18px 14px' }} />
        <ellipse cx="8" cy="20" rx="7" ry="8" fill={cfg.color2} opacity="0.78" style={{ animation: 'wingFlapL 0.35s ease-in-out infinite alternate', transformOrigin: '18px 14px' }} />
        <ellipse cx="26" cy="12" rx="10" ry="12" fill={cfg.color1} opacity="0.88" style={{ animation: 'wingFlapR 0.35s ease-in-out infinite alternate', transformOrigin: '18px 14px' }} />
        <ellipse cx="28" cy="20" rx="7" ry="8" fill={cfg.color2} opacity="0.78" style={{ animation: 'wingFlapR 0.35s ease-in-out infinite alternate', transformOrigin: '18px 14px' }} />
        <circle cx="12" cy="10" r="2" fill={cfg.color2} opacity="0.55" />
        <circle cx="24" cy="10" r="2" fill={cfg.color2} opacity="0.55" />
        <ellipse cx="18" cy="14" rx="2" ry="12" fill="#2a1a00" opacity="0.85" />
        <circle cx="18" cy="3" r="2.5" fill="#2a1a00" opacity="0.8" />
        <path d="M17 2 Q14 -2 12 -3" stroke="#2a1a00" strokeWidth="0.9" strokeLinecap="round" fill="none" opacity="0.7" />
        <path d="M19 2 Q22 -2 24 -3" stroke="#2a1a00" strokeWidth="0.9" strokeLinecap="round" fill="none" opacity="0.7" />
        <circle cx="11.5" cy="-3.5" r="1.2" fill="#2a1a00" opacity="0.7" />
        <circle cx="24.5" cy="-3.5" r="1.2" fill="#2a1a00" opacity="0.7" />
      </svg>
      <style>{`
        @keyframes butterflyFloat${cfg.id} {
          0%   { transform: scale(${cfg.scale}) translate(0vw, 0vh); }
          25%  { transform: scale(${cfg.scale}) translate(${cfg.driftX * 0.4}vw, ${cfg.driftY * 0.6}vh); }
          50%  { transform: scale(${cfg.scale}) translate(${cfg.driftX}vw, ${cfg.driftY}vh); }
          75%  { transform: scale(${cfg.scale}) translate(${cfg.driftX * 0.6}vw, ${cfg.driftY * 0.3}vh); }
          100% { transform: scale(${cfg.scale}) translate(0vw, 0vh); }
        }
        @keyframes wingFlapL {
          from { transform: rotateY(0deg); }
          to   { transform: rotateY(55deg); }
        }
        @keyframes wingFlapR {
          from { transform: rotateY(0deg); }
          to   { transform: rotateY(-55deg); }
        }
      `}</style>
    </div>
  );
}
