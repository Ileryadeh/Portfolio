import { useState } from 'react';
import { BODY, navLinks, BUTTERFLIES } from '../constants';
import { useActiveSection } from './hooks/useActiveSection';
import { BeeCursor } from './components/portfolio/BeeCursor';
import { Butterfly } from './components/portfolio/Butterfly';
import { VineSidebar } from './components/portfolio/VineSidebar';
import { QuoteSection } from './components/portfolio/QuoteSection';
import { AboutSection } from './components/portfolio/AboutSection';
import { ProjectsSection } from './components/portfolio/ProjectsSection';
import { SkillsSection } from './components/portfolio/SkillsSection';
import { ContactSection } from './components/portfolio/ContactSection';

export default function App() {
  const activeSection = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: BODY, cursor: 'none' }}>
      <style>{`
        *, *::before, *::after { cursor: none !important; }
        @keyframes signSway {
          0%,100% { transform: rotate(0deg); }
          25%      { transform: rotate(0.45deg); }
          75%      { transform: rotate(-0.3deg); }
        }
        @keyframes vineSway {
          0%,100% { transform: translateY(-50%) rotate(0deg); }
          30%      { transform: translateY(-50%) rotate(0.9deg); }
          70%      { transform: translateY(-50%) rotate(-0.6deg); }
        }
        @keyframes leafGlowPulse {
          0%,100% { filter: drop-shadow(0 0 3px rgba(107,154,94,0.6)); }
          50%      { filter: drop-shadow(0 0 9px rgba(107,154,94,1)) drop-shadow(0 0 18px rgba(107,154,94,0.35)); }
        }
        @keyframes dotPulse {
          0%,100% { transform: scale(1); opacity: 0.55; }
          50%      { transform: scale(1.6); opacity: 0.85; }
        }
        @keyframes navLeafSway {
          0%,100% { transform: rotate(-5deg); }
          50%      { transform: rotate(5deg); }
        }
        @keyframes flowerBloomPop {
          0%   { transform: scale(1) translateY(0); }
          35%  { transform: scale(1.22) translateY(-18px); }
          65%  { transform: scale(1.1) translateY(-12px); }
          100% { transform: scale(1.12) translateY(-14px); }
        }
        @keyframes panelGrow {
          0%   { transform: translate(-50%,-50%) scale(0.05); opacity: 0; }
          55%  { transform: translate(-50%,-50%) scale(1.04); opacity: 1; }
          100% { transform: translate(-50%,-50%) scale(1); opacity: 1; }
        }
        @keyframes panelFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes beeWingL {
          from { transform: rotateX(0deg) scaleY(1); }
          to   { transform: rotateX(30deg) scaleY(0.7); }
        }
        @keyframes beeWingR {
          from { transform: rotateX(0deg) scaleY(0.7); }
          to   { transform: rotateX(30deg) scaleY(1); }
        }
      `}</style>

      <BeeCursor />
      {BUTTERFLIES.map((cfg) => (
        <Butterfly key={cfg.id} cfg={cfg} />
      ))}
      <VineSidebar activeSection={activeSection} />

      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          animation: 'signSway 8s ease-in-out infinite',
          transformOrigin: '50% 0%',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 72px', pointerEvents: 'none' }}>
          {[0, 1].map((i) => (
            <svg key={i} width="24" height="12" viewBox="0 0 24 12" fill="none">
              <path d="M12 0 Q8 4 5 9 Q3 11 1 12" stroke="#4a6741" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.4" />
              <path d="M12 0 Q16 4 19 9 Q21 11 23 12" stroke="#4a6741" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.4" />
              <circle cx="12" cy="0" r="2" fill="#4a6741" opacity="0.5" />
            </svg>
          ))}
        </div>

        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #eee6d0 0%, #e4d9be 50%, #d8cead 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(91deg, transparent 0px, transparent 28px, rgba(74,103,65,0.04) 28px, rgba(74,103,65,0.04) 29px)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'rgba(255,255,255,0.55)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: '#4a6741', opacity: 0.3 }} />

          <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 28px', height: '60px' }}>
            <button onClick={() => scrollTo('quote')} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'none', border: 'none' }}>
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                <circle cx="13" cy="13" r="12" fill="#4a6741" opacity="0.1" />
                <path d="M13 3 Q17 7 15 13 Q13 19 9 17 Q5 15 9 9 Q11 5 13 3Z" fill="#4a6741" />
                <path d="M13 7 Q19 9 19 15 Q19 21 13 21 Q9 19 13 13Z" fill="#6b9a5e" opacity="0.75" />
              </svg>
              <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '18px', fontWeight: 600, color: '#2a3320' }}>
                Sage Devlin
              </span>
            </button>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(({ id, label }) => {
                const isActive = activeSection === id;
                return (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      padding: '5px 13px',
                      background: isActive ? '#4a6741' : 'transparent',
                      border: isActive ? '1px solid #3a5232' : '1px solid transparent',
                      borderRadius: '20px',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    {isActive && (
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ animation: 'navLeafSway 3s ease-in-out infinite', flexShrink: 0 }}>
                        <path d="M6.5 1 Q10 3.5 9 7.5 Q8 11 5.5 10 Q3 9 4.5 5.5 Q5.5 2.5 6.5 1Z" fill="#a8d88a" style={{ filter: 'drop-shadow(0 0 3px rgba(140,210,100,0.85))' }} />
                        <path d="M6.5 4 L6.5 10" stroke="rgba(255,255,255,0.35)" strokeWidth="0.6" strokeLinecap="round" />
                      </svg>
                    )}
                    <span style={{ fontFamily: BODY, fontSize: '13px', fontWeight: isActive ? 600 : 400, color: isActive ? '#f7f3ec' : '#6b6245', letterSpacing: '0.01em' }}>
                      {label}
                    </span>
                  </button>
                );
              })}
            </nav>

            <button
              onClick={() => scrollTo('contact')}
              className="hidden md:flex items-center gap-2"
              style={{
                padding: '6px 16px',
                background: '#c4725a',
                border: 'none',
                borderRadius: '20px',
                fontFamily: BODY,
                fontSize: '13px',
                fontWeight: 600,
                color: '#f7f3ec',
                letterSpacing: '0.01em',
              }}
            >
              Get in Touch
            </button>

            <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none' }}>
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="block w-5 h-0.5"
                  style={{
                    background: '#2a3320',
                    transition: 'all 0.25s ease',
                    transform: i === 0 && menuOpen ? 'rotate(45deg) translateY(8px)' : i === 2 && menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none',
                    opacity: i === 1 && menuOpen ? 0 : 1,
                  }}
                />
              ))}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div style={{ background: '#e4d9be', borderTop: '1px solid rgba(74,103,65,0.2)', padding: '8px 16px 12px' }}>
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '10px 16px',
                  background: 'none',
                  border: 'none',
                  fontFamily: BODY,
                  fontSize: '14px',
                  color: activeSection === id ? '#4a6741' : '#6b6245',
                  fontWeight: activeSection === id ? 600 : 400,
                }}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </header>

      <main style={{ paddingTop: '74px' }}>
        <QuoteSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
}
