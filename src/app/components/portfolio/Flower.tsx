import { useState, useEffect } from 'react';
import { AndroidMockup } from './AndroidMockup';
import { DesktopMockup } from './DesktopMockup';
import { ImageGallery } from './ImageGallery';
import { Project } from '../../../types';
import { COMFEE_SCREENS, AGAP_SCREENS, LUTAW_SCREENS, TARA_SCREENS, BLACKJACK_MAFIA_SCREENS, BODY, DISPLAY, MONO } from '../../../constants';

type FlowerProps = {
  project: Project;
};

export function Flower({ project }: FlowerProps) {
  const [hovered, setHovered] = useState(false);
  const [bloomed, setBloomed] = useState(false);
  const [open, setOpen] = useState(false);
  const angles = [0, 45, 90, 135, 180, 225, 270, 315];
  const isComfee = project.name === 'Comfee';
  const isTara = project.name === 'TARA';
  const isBlackJack = project.name === 'BlackJack Mafia';
  const isAgap = project.name === 'Agap';
  const isLutaw = project.name === 'Lutaw';
  const projectLink = project.github;
  const linkLabel = 'View on GitHub →';

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  function handleClick() {
    setBloomed(true);
    setTimeout(() => setOpen(true), 350);
  }

  function handleClose() {
    setOpen(false);
    setTimeout(() => setBloomed(false), 400);
  }

  return (
    <>
      <div
        className="flex flex-col items-center cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleClick}
      >
        <svg
          width="160"
          height="210"
          viewBox="0 0 160 210"
          style={{
            transition: bloomed ? 'none' : 'transform 0.5s ease',
            transform: hovered && !bloomed ? 'translateY(-8px)' : 'translateY(0)',
            animation: bloomed ? 'flowerBloomPop 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards' : 'none',
          }}
        >
          <path d="M80 205 Q76 170 80 145" stroke={project.stemColor} strokeWidth="4.5" fill="none" strokeLinecap="round" />
          <path d="M80 180 Q50 162 46 142 Q63 152 80 177" fill="#5a8850" opacity="0.88" />
          <path d="M80 163 Q110 144 118 124 Q102 138 80 160" fill="#5a8850" opacity="0.82" />
          {angles.map((a, i) => (
            <g key={i} transform={`rotate(${a}, 80, 100)`}>
              <ellipse
                cx="80"
                cy="65"
                rx={bloomed ? 15 : 13}
                ry={bloomed ? 26 : 23}
                fill={hovered || bloomed ? project.flowerColor : project.petalColor}
                opacity="0.92"
                style={{ transition: 'fill 0.4s ease, rx 0.4s ease, ry 0.4s ease' }}
              />
              {bloomed && <ellipse cx="80" cy="60" rx="5" ry="9" fill="rgba(255,255,255,0.22)" />}
            </g>
          ))}
          <circle cx="80" cy="100" r={bloomed ? 26 : 23} fill={project.centerColor} style={{ transition: 'r 0.4s ease' }} />
          <circle cx="80" cy="100" r={bloomed ? 20 : 17} fill={project.centerColor} opacity="0.72" style={{ transition: 'r 0.4s ease' }} />
          {[[80, 93], [74, 97], [86, 97], [80, 103], [73, 100], [87, 100], [77, 107], [83, 107]].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="2.2" fill="rgba(255,255,255,0.32)" />
          ))}
          {bloomed && <circle cx="80" cy="100" r="8" fill="rgba(255,255,255,0.18)" />}
        </svg>

        <div className="w-44 text-center mt-1" style={{ transition: 'opacity 0.3s ease', opacity: hovered ? 1 : 0.72 }}>
          <h3 className="font-semibold text-foreground text-sm mb-1" style={{ fontFamily: DISPLAY }}>
            {project.name}
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{project.desc}</p>
          <p className="text-xs mt-1" style={{ fontFamily: MONO, color: '#8aaa7c' }}>
            click to bloom
          </p>
        </div>
      </div>

      {open && (
        <div
          onClick={handleClose}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            background: 'rgba(42,51,32,0.55)',
            backdropFilter: 'blur(5px)',
            animation: 'panelFadeIn 0.25s ease forwards',
          }}
        />
      )}

      {open && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            zIndex: 201,
            width: isComfee || isAgap ? 'min(720px, 95vw)' : isTara || isBlackJack || isLutaw ? 'min(660px, 95vw)' : 'min(520px, 92vw)',
            animation: 'panelGrow 0.42s cubic-bezier(0.34,1.56,0.64,1) forwards',
          }}
        >
          <div
            style={{
              background: '#f7f3ec',
              borderRadius: '28px 32px 26px 30px / 30px 26px 32px 28px',
              boxShadow: '0 24px 80px rgba(42,51,32,0.28), 0 4px 16px rgba(42,51,32,0.12)',
              padding: '32px 32px 28px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <svg style={{ position: 'absolute', top: 0, right: 0, opacity: 0.13, pointerEvents: 'none' }} width="110" height="110" viewBox="0 0 120 120" fill="none">
              <path d="M120 0 Q90 50 105 100 Q120 80 120 0Z" fill="#4a6741" />
              <path d="M120 0 Q60 25 70 90" stroke="#4a6741" strokeWidth="1.5" fill="none" />
              <path d="M98 65 Q82 54 75 78" fill="#5a8850" />
              <path d="M112 30 Q100 22 96 40" fill="#5a8850" />
              <circle cx="72" cy="82" r="4" fill="#c4725a" />
            </svg>

            <div className="flex items-center justify-between mb-5">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 14, height: 14, borderRadius: '50%', background: project.flowerColor, boxShadow: `0 0 0 3px ${project.flowerColor}33` }} />
                <span style={{ fontFamily: MONO, fontSize: 11, color: '#8aaa7c', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  project
                </span>
              </div>
              <button
                onClick={handleClose}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  background: '#efe9d8',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#6b6245',
                  fontSize: 18,
                  lineHeight: 1,
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#d4c9af'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#efe9d8'; }}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {(isTara || isBlackJack) && (
              <div style={{ marginBottom: 20 }}>
                <DesktopMockup
                  screens={isTara ? TARA_SCREENS : BLACKJACK_MAFIA_SCREENS}
                  flowerColor={project.flowerColor}
                />
              </div>
            )}

            {isLutaw && (
              <div style={{ marginBottom: 20 }}>
                <ImageGallery screens={LUTAW_SCREENS} flowerColor={project.flowerColor} />
              </div>
            )}

            <div style={{ display: 'flex', gap: 28, alignItems: 'flex-start' }}>
              {(isComfee || isAgap) && (
                <div style={{ flexShrink: 0 }}>
                  <AndroidMockup
                    screens={isComfee ? COMFEE_SCREENS : AGAP_SCREENS}
                    flowerColor={project.flowerColor}
                  />
                </div>
              )}

              <div style={{ flex: 1, minWidth: 0 }}>
                <h2 style={{ fontFamily: DISPLAY, fontSize: 28, fontWeight: 700, color: '#2a3320', marginBottom: 8, lineHeight: 1.2 }}>
                  {project.name}
                </h2>
                <p style={{ fontFamily: BODY, fontSize: 14, color: '#6b6245', lineHeight: 1.75, marginBottom: 18 }}>
                  {project.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 24 }}>
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: MONO,
                        fontSize: 11,
                        padding: '4px 12px',
                        borderRadius: 99,
                        background: '#efe9d8',
                        border: '1px solid rgba(74,103,65,0.18)',
                        color: '#6b6245',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
  {projectLink && (
    <button
      onClick={() => window.open(projectLink, '_blank', 'noopener,noreferrer')}
      style={{
        fontFamily: BODY,
        fontSize: 14,
        fontWeight: 600,
        padding: '11px 28px',
        borderRadius: 99,
        background: '#4a6741',
        color: '#f7f3ec',
        border: 'none',
        cursor: 'pointer',
        transition: 'background 0.2s, transform 0.15s',
        letterSpacing: '0.02em',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = '#3a5232'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = '#4a6741'; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      {linkLabel}
           </button>
                  )}
                  {project.apk && (
                    <a
                      href={project.apk}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: BODY,
                        fontSize: 14,
                        fontWeight: 600,
                        padding: '11px 28px',
                        borderRadius: 99,
                        background: 'transparent',
                        color: '#4a6741',
                        border: '1.5px solid rgba(74,103,65,0.4)',
                        cursor: 'pointer',
                        transition: 'background 0.2s, border-color 0.2s',
                        letterSpacing: '0.02em',
                        textDecoration: 'none',
                        display: 'inline-block',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(74,103,65,0.06)'; e.currentTarget.style.borderColor = '#4a6741'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(74,103,65,0.4)'; }}
                    >
                      Download APK
                    </a>
                  )}
                  </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
