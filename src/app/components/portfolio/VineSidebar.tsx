import { navLinks, VINE_H, VINE_PATH, VINE_PATH_LEN, VINE_SECTION_Y } from '../../../constants';

type VineSidebarProps = {
  activeSection: string;
};

export function VineSidebar({ activeSection }: VineSidebarProps) {
  const activeIdx = navLinks.findIndex((link) => link.id === activeSection);
  const growLen = VINE_PATH_LEN * ((activeIdx + 1) / navLinks.length);

  return (
    <div
      className="hidden lg:flex"
      style={{
        position: 'fixed',
        left: '14px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 45,
        pointerEvents: 'none',
        animation: 'vineSway 7s ease-in-out infinite',
        transformOrigin: 'top center',
      }}
    >
      <svg width="48" height={VINE_H + 20} viewBox={`0 0 48 ${VINE_H + 20}`} fill="none" overflow="visible">
        <path d={VINE_PATH} stroke="#4a6741" strokeWidth="2" opacity="0.12" strokeLinecap="round" />
        <path
          d={VINE_PATH}
          stroke="#4a6741"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{
            strokeDasharray: VINE_PATH_LEN,
            strokeDashoffset: VINE_PATH_LEN - growLen,
            transition: 'stroke-dashoffset 1.4s cubic-bezier(0.4,0,0.2,1)',
          }}
        />
        {navLinks.map((link, i) => {
          const y = VINE_SECTION_Y[i];
          const side = i % 2 === 0 ? 1 : -1;
          const isPast = i <= activeIdx;
          const isActive = link.id === activeSection;
          const leafFill = isActive ? '#6b9a5e' : '#4a6741';
          const leafOpacity = isPast ? (isActive ? 1 : 0.7) : 0.15;

          return (
            <g key={link.id} style={{ transition: 'opacity 0.5s ease' }}>
              {isPast && (
                <path
                  d={`M22 ${y} Q${22 + side * 11} ${y - 9} ${22 + side * 16} ${y - 3} Q${22 + side * 12} ${y + 6} ${22} ${y}Z`}
                  fill="none"
                  stroke="#5a8850"
                  strokeWidth="1.1"
                  opacity="0.5"
                  strokeLinecap="round"
                />
              )}
              <path
                d={`M22 ${y} Q${22 + side * 12} ${y - 8} ${22 + side * 17} ${y - 2} Q${22 + side * 11} ${y + 7} ${22} ${y}Z`}
                fill={leafFill}
                opacity={leafOpacity}
                style={{
                  animation: isActive ? 'leafGlowPulse 2.2s ease-in-out infinite' : 'none',
                  transition: 'opacity 0.6s ease, fill 0.4s ease',
                }}
              />
              {isPast && (
                <path
                  d={`M22 ${y} L${22 + side * 14} ${y - 1}`}
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="0.7"
                  strokeLinecap="round"
                />
              )}
              {isActive && (
                <circle
                  cx="22"
                  cy={y}
                  r="4.5"
                  fill="#a8d89a"
                  opacity="0.55"
                  style={{ animation: 'dotPulse 2s ease-in-out infinite', transformOrigin: `22px ${y}px` }}
                />
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
