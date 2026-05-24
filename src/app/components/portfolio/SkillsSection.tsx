import { skillRow1, skillRow2, MONO } from '../../../constants';
import { Pot } from './Pot';

export function SkillsSection() {
  return (
    <section id="skills" className="py-28">
      <div className="max-w-5xl mx-auto px-8">
        <div className="text-center mb-14">
          <p className="text-xs tracking-widest uppercase text-accent mb-3" style={{ fontFamily: MONO }}>The Toolshed</p>
          <h2 className="text-4xl md:text-5xl text-foreground" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Tools of the Trade</h2>
          <p className="text-muted-foreground mt-3 max-w-sm mx-auto text-sm">
            The technologies I cultivate daily.
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden" style={{ background: '#e8e0cc', border: '1px solid rgba(74,103,65,0.15)' }}>
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: [
            'repeating-linear-gradient(180deg, transparent 0px, transparent 31px, rgba(0,0,0,0.025) 31px, rgba(0,0,0,0.025) 32px)',
            'repeating-linear-gradient(90deg, transparent 0px, transparent 47px, rgba(0,0,0,0.018) 47px, rgba(0,0,0,0.018) 48px)',
          ].join(', ') }} />
          <div style={{ position: 'absolute', left: 32, top: 0, bottom: 0, width: 12, background: 'linear-gradient(90deg, #a07828, #8b6220, #7a5218)', borderRadius: 4, boxShadow: '2px 0 6px rgba(0,0,0,0.15)' }} />
          <div style={{ position: 'absolute', right: 32, top: 0, bottom: 0, width: 12, background: 'linear-gradient(90deg, #7a5218, #8b6220, #a07828)', borderRadius: 4, boxShadow: '-2px 0 6px rgba(0,0,0,0.15)' }} />
          <svg style={{ position: 'absolute', left: 14, top: 0, pointerEvents: 'none' }} width="36" height="100%" viewBox="0 0 36 400" preserveAspectRatio="none" fill="none">
            <path d="M28 0 Q24 50 28 100 Q32 150 28 200 Q24 250 28 300 Q32 350 28 400" stroke="#4a6741" strokeWidth="1.5" opacity="0.4" />
            {[40, 110, 180, 260, 330].map((y, i) => (
              <path key={i} d={`M28 ${y} Q${i % 2 === 0 ? 10 : 20} ${y - 12} ${i % 2 === 0 ? 6 : 16} ${y - 6} Q${i % 2 === 0 ? 12 : 22} ${y + 4} 28 ${y}Z`} fill="#5a8850" opacity="0.35" />
            ))}
          </svg>
          <svg style={{ position: 'absolute', right: 14, top: 0, pointerEvents: 'none' }} width="36" height="100%" viewBox="0 0 36 400" preserveAspectRatio="none" fill="none">
            <path d="M8 0 Q12 50 8 100 Q4 150 8 200 Q12 250 8 300 Q4 350 8 400" stroke="#4a6741" strokeWidth="1.5" opacity="0.4" />
            {[60, 140, 210, 290, 360].map((y, i) => (
              <path key={i} d={`M8 ${y} Q${i % 2 === 0 ? 26 : 18} ${y - 12} ${i % 2 === 0 ? 30 : 22} ${y - 6} Q${i % 2 === 0 ? 24 : 16} ${y + 4} 8 ${y}Z`} fill="#5a8850" opacity="0.35" />
            ))}
          </svg>

          <div style={{ padding: '44px 64px 0' }}>
            <div className="flex justify-center gap-5 flex-wrap">
              {skillRow1.map((name) => <Pot key={name} name={name} />)}
            </div>
          </div>

          <div style={{ margin: '10px 20px 0', height: 15, background: 'linear-gradient(180deg, #d4a848 0%, #b88828 40%, #9a7020 70%, #8b6220 100%)', borderRadius: '4px 4px 3px 3px', boxShadow: '0 5px 14px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.22)' }}>
            <div style={{ height: '100%', backgroundImage: 'repeating-linear-gradient(90deg, transparent 0px, transparent 18px, rgba(0,0,0,0.05) 18px, rgba(0,0,0,0.05) 19px)', borderRadius: '4px 4px 3px 3px' }} />
          </div>
          <div style={{ margin: '0 24px', height: 8, background: 'linear-gradient(to bottom, rgba(0,0,0,0.14), transparent)' }} />

          <div style={{ padding: '36px 64px 0' }}>
            <div className="flex justify-center gap-5 flex-wrap">
              {skillRow2.map((name) => <Pot key={name} name={name} />)}
            </div>
          </div>

          <div style={{ margin: '10px 20px 0', height: 15, background: 'linear-gradient(180deg, #d4a848 0%, #b88828 40%, #9a7020 70%, #8b6220 100%)', borderRadius: '4px 4px 3px 3px', boxShadow: '0 5px 14px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.22)' }}>
            <div style={{ height: '100%', backgroundImage: 'repeating-linear-gradient(90deg, transparent 0px, transparent 18px, rgba(0,0,0,0.05) 18px, rgba(0,0,0,0.05) 19px)', borderRadius: '4px 4px 3px 3px' }} />
          </div>
          <div style={{ margin: '0 24px', height: 8, background: 'linear-gradient(to bottom, rgba(0,0,0,0.14), transparent)' }} />

          <div style={{ padding: '16px 64px 0', display: 'flex', justifyContent: 'space-around' }}>
            {[...Array(16)].map((_, i) => (
              <svg key={i} width="18" height="22" viewBox="0 0 18 22" style={{ opacity: i % 3 === 1 ? 0.5 : 0.35 }}>
                <path d="M9 22 Q4 12 6 0 Q8 8 9 11 Q10 8 12 0 Q14 12 9 22Z" fill="#4a6741" />
              </svg>
            ))}
          </div>
          <div style={{ height: 20, background: 'linear-gradient(to bottom, rgba(74,103,65,0.08), transparent)' }} />
        </div>
      </div>
    </section>
  );
}
