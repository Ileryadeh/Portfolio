import { useState } from 'react';
import type { MouseEvent } from 'react';
import { MONO } from '../../../constants';

type ImageGalleryProps = {
  screens: string[];
  flowerColor: string;
};

export function ImageGallery({ screens, flowerColor }: ImageGalleryProps) {
  const [idx, setIdx] = useState(0);
  const [animating, setAnimating] = useState(false);

  function next() {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setIdx((i) => (i + 1) % screens.length);
      setAnimating(false);
    }, 200);
  }

  function prev() {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setIdx((i) => (i - 1 + screens.length) % screens.length);
      setAnimating(false);
    }, 200);
  }

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16/9',
          borderRadius: 14,
          overflow: 'hidden',
          background: '#1a1a1a',
          cursor: 'pointer',
          border: `1.5px solid ${flowerColor}44`,
          boxShadow: `0 4px 24px ${flowerColor}22`,
        }}
        onClick={next}
      >
        <img
          src={screens[idx]}
          alt={`photo ${idx + 1}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: animating ? 0 : 1,
            transition: 'opacity 0.2s ease',
          }}
        />

        {[
          { side: 'left', action: (e: MouseEvent<HTMLButtonElement>) => { e.stopPropagation(); prev(); }, symbol: '‹' },
          { side: 'right', action: (e: MouseEvent<HTMLButtonElement>) => { e.stopPropagation(); next(); }, symbol: '›' },
        ].map(({ side, action, symbol }) => (
          <button
            key={side}
            onClick={action}
            style={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              [side]: 10,
              width: 28,
              height: 28,
              borderRadius: '50%',
              background: 'rgba(0,0,0,0.45)',
              border: 'none',
              cursor: 'pointer',
              color: '#fff',
              fontSize: 18,
              lineHeight: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.15s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(0,0,0,0.7)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0,0,0,0.45)'; }}
          >
            {symbol}
          </button>
        ))}

        <div
          style={{
            position: 'absolute',
            bottom: 10,
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(0,0,0,0.48)',
            borderRadius: 99,
            padding: '3px 12px',
          }}
        >
          <span style={{ fontFamily: MONO, fontSize: 8, color: 'rgba(255,255,255,0.9)', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
            tap to switch
          </span>
        </div>

        <div
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            background: 'rgba(0,0,0,0.48)',
            borderRadius: 99,
            padding: '2px 8px',
          }}
        >
          <span style={{ fontFamily: MONO, fontSize: 8, color: 'rgba(255,255,255,0.85)' }}>
            {idx + 1} / {screens.length}
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 5, alignItems: 'center', justifyContent: 'center' }}>
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
