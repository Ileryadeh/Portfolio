import { useState } from 'react';
import { MONO } from '../../../constants';

type DesktopMockupProps = {
  screens: string[];
  flowerColor: string;
};

export function DesktopMockup({ screens, flowerColor }: DesktopMockupProps) {
  const [idx, setIdx] = useState(0);
  const [animating, setAnimating] = useState(false);
  const clickable = screens.length > 1;

  function nextScreen() {
    if (!clickable || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setIdx((i) => (i + 1) % screens.length);
      setAnimating(false);
    }, 180);
  }

  const MW = 340;
  const MH = 210;
  const bezelT = 18;
  const bezelSide = 10;
  const bezelB = 10;
  const screenW = MW - bezelSide * 2;
  const screenH = MH - bezelT - bezelB;
  const standW = 60;
  const standH = 28;
  const baseW = 100;
  const baseH = 8;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0, width: '100%' }}>
      <div style={{ position: 'relative', width: MW, height: MH, flexShrink: 0 }}>
        <svg width={MW} height={MH} viewBox={`0 0 ${MW} ${MH}`}
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2 }}>

        <defs>
          <mask id="desktop-mask">
            <rect x="0" y="0" width={MW} height={MH} rx="10" fill="white" />
            {/* Black = transparent hole where screen goes */}
            <rect x={bezelSide} y={bezelT} width={screenW} height={screenH} rx="4" fill="black" />
          </mask>
        </defs>

        {/* Monitor body with screen hole */}
        <rect x="0" y="0" width={MW} height={MH} rx="10" ry="10" fill="#1c1c1e" mask="url(#desktop-mask)" />

        {/* Delete the old black screen rect — it's gone */}

        {/* Power LED */}
        <circle cx={MW / 2} cy={MH - 5} r="2.5" fill={flowerColor} opacity="0.7" />

        {/* Accent border */}
        <rect x="1" y="1" width={MW - 2} height={MH - 2} rx="9" ry="9"
          fill="none" stroke={flowerColor} strokeWidth="1.2" opacity="0.3" />
      </svg>

        <div
          onClick={nextScreen}
          style={{
            position: 'absolute',
            left: bezelSide,
            top: bezelT,
            width: screenW,
            height: screenH,
            borderRadius: 4,
            overflow: 'hidden',
            cursor: clickable ? 'pointer' : 'default',
            zIndex: 1,
          }}
        >
          <img
            src={screens[idx]}
            alt={`screen ${idx + 1}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
              opacity: animating ? 0 : 1,
              transition: 'opacity 0.18s ease',
            }}
          />
          {clickable && (
            <div
              style={{
                position: 'absolute',
                bottom: 8,
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(0,0,0,0.45)',
                borderRadius: 10,
                padding: '4px 10px',
              }}
            >
              <span style={{
                fontFamily: MONO,
                fontSize: 8,
                color: 'rgba(255,255,255,0.9)',
                letterSpacing: '0.05em',
                whiteSpace: 'nowrap',
                display: 'block',
                lineHeight: 1,
              }}>
                tap to switch
              </span>
            </div>
          )}
        </div>
      </div>

      {clickable && (
        <div style={{ display: 'flex', gap: 5, alignItems: 'center', marginTop: 10 }}>
          {screens.map((_, i) => (
            <div
              key={i}
              onClick={() => setIdx(i)}
              style={{
                width: i === idx ? 16 : 6,
                height: 6,
                borderRadius: 3,
                background: i === idx ? flowerColor : '#d4c9af',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
