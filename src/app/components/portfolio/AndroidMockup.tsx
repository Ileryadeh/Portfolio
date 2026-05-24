import { useState } from 'react';
import { MONO } from '../../../constants';

type AndroidMockupProps = {
  screens: string[];
  flowerColor: string;
};

export function AndroidMockup({ screens, flowerColor }: AndroidMockupProps) {
  const [idx, setIdx] = useState(0);
  const [animating, setAnimating] = useState(false);

  function nextScreen() {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setIdx((i) => (i + 1) % screens.length);
      setAnimating(false);
    }, 180);
  }

  const W = 170;
  const H = 340;
  const rx = 36;          // very rounded corners for modern look
  const bezel = 6;        // thin bezel
  const screenX = bezel;
  const screenY = bezel;
  const screenW = W - bezel * 2;
  const screenH = H - bezel * 2;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
      <div style={{ position: 'relative', width: W, height: H, flexShrink: 0 }}>

        {/* SVG shell — sits on top with pointer-events: none */}
        <svg
          width={W} height={H}
          viewBox={`0 0 ${W} ${H}`}
          style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2 }}
        >
          <defs>
            <mask id="modern-phone-mask">
              {/* White = visible, Black = transparent hole */}
              <rect x="0" y="0" width={W} height={H} rx={rx} fill="white" />
              <rect x={screenX} y={screenY} width={screenW} height={screenH}
                rx={rx - bezel} fill="black" />
            </mask>
          </defs>

          {/* Phone body with screen hole */}
          <rect x="0" y="0" width={W} height={H} rx={rx} fill="#0a0a0a"
            mask="url(#modern-phone-mask)" />

          {/* Thin side buttons */}
          <rect x={W - 2} y="90" width="2.5" height="50" rx="1.5" fill="#2a2a2a" />
          <rect x={W - 2} y="150" width="2.5" height="35" rx="1.5" fill="#2a2a2a" />
          <rect x="-0.5" y="100" width="2.5" height="40" rx="1.5" fill="#2a2a2a" />

          {/* Punch-hole camera */}
          <circle cx={W / 2} cy={screenY + 18} r="5" fill="#0a0a0a" />
          <circle cx={W / 2} cy={screenY + 18} r="3" fill="#111" />
          <circle cx={W / 2 - 1} cy={screenY + 17} r="1" fill="rgba(255,255,255,0.12)" />

          {/* Pill home indicator */}
          <rect
            x={W / 2 - 28} y={H - bezel - 8}
            width="56" height="4" rx="2"
            fill="rgba(255,255,255,0.35)"
          />

          {/* Colored accent ring */}
          <rect x="1" y="1" width={W - 2} height={H - 2} rx={rx}
            fill="none" stroke={flowerColor} strokeWidth="1.2" opacity="0.4" />
        </svg>

        {/* Clickable screen image */}
        <div
          onClick={nextScreen}
          style={{
            position: 'absolute',
            left: screenX,
            top: screenY,
            width: screenW,
            height: screenH,
            borderRadius: rx - bezel,
            overflow: 'hidden',
            cursor: 'pointer',
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

          {/* tap to switch label */}
          <div style={{
            position: 'absolute',
            bottom: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(0,0,0,0.45)',
            borderRadius: 99,
            padding: '4px 12px',
          }}>
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
        </div>
      </div>

      {/* Dot indicators */}
      <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
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
    </div>
  );
}