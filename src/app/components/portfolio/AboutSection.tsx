import { useState } from 'react';
import { BODY, DISPLAY, MONO } from '../../../constants/index';
import photo from "../../assets/photo1.png";
import secondPhoto from "../../assets/photo2.png";

export function AboutSection() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [photoHovered, setPhotoHovered] = useState(false);

  return (
    <section id="about" className="min-h-screen flex items-center py-28">
      <div className="max-w-5xl mx-auto px-8 flex flex-col md:flex-row items-center gap-14">
          <div className="absolute inset-0 rounded-2xl border-2 border-border bg-card" />
          {[
            'absolute -top-3 -left-3',
            'absolute -top-3 -right-3 scale-x-[-1]',
            'absolute -bottom-3 -left-3 scale-y-[-1]',
            'absolute -bottom-3 -right-3 scale-x-[-1] scale-y-[-1]',
          ].map((cls, i) => (
            <svg key={i} className={cls} width="30" height="30" viewBox="0 0 36 36" fill="none">
              <path d="M0 36 Q10 18 36 0 Q26 14 13 22 Q4 28 0 36Z" fill="#4a6741" opacity="0.45" />
            </svg>
          ))}
          <div className="relative w-56 h-64 flex-shrink-0 mx-auto"
           onMouseEnter={() => setPhotoHovered(true)}
           onMouseLeave={() => setPhotoHovered(false)}
          >
                <div className="absolute inset-0 rounded-2xl border-2 border-border bg-card" />
                
                <img
                    src={photo}
                    alt="Illyria Dy"
                    className="absolute inset-0 w-full h-full rounded-2xl"
                    style={{ objectFit: 'cover', objectPosition: 'center top', zIndex: 1,  
                        opacity: photoHovered ? 0 : 1, transition: 'opacity 0.4s ease',}}
                />
                <img
                    src={secondPhoto}
                    alt="Illyria Dy"
                    className="absolute inset-0 w-full h-full rounded-2xl"
                    style={{
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    zIndex: 1,
                    opacity: photoHovered ? 1 : 0,
                    transition: 'opacity 0.4s ease',
                    }}
                />

                {[
                    'absolute -top-3 -left-3',
                    'absolute -top-3 -right-3 scale-x-[-1]',
                    'absolute -bottom-3 -left-3 scale-y-[-1]',
                    'absolute -bottom-3 -right-3 scale-x-[-1] scale-y-[-1]',
                ].map((cls, i) => (
                    <svg key={i} className={cls} width="30" height="30" viewBox="0 0 36 36" fill="none"
                      style={{ zIndex: 2, position: 'absolute' }}
                    >
                      <path d="M0 36 Q10 18 36 0 Q26 14 13 22 Q4 28 0 36Z" fill="#4a6741" opacity="0.45" />
                    </svg>
                ))}
                </div>
  

        <div className="space-y-5">
          <div>
            <p className="text-xs tracking-widest uppercase text-accent mb-2" style={{ fontFamily: MONO }}>Hello, I'm</p>
            <h2 className="text-4xl md:text-5xl text-foreground" style={{ fontFamily: DISPLAY }}>Illyria Dy</h2>
            <p className="text-base text-primary font-medium mt-1.5"> Developer &amp; UI Designer</p>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Computer Science student with hands-on experience building responsive web and mobile applications using React, React Native, JavaScript, and Python. I specialize in frontend development and API integration, focusing on creating clean, functional interfaces with practical system logic behind them. 
          </p>          
          <p className="text-muted-foreground leading-relaxed">
            I’ve worked on projects involving real-time data handling and structured backend integration, with a strong emphasis on usability and performance.
          </p>
          <div className="pt-1 flex items-center gap-3 flex-wrap">
            <button
              onClick={() => setAboutOpen(true)}
              className="flex items-center gap-2 px-7 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:opacity-90 active:scale-95"
              style={{ background: '#4a6741', color: '#f7f3ec', fontFamily: BODY }}
            >
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path d="M8 1 Q11 4 10 8 Q9 12 6 11 Q3 10 5 6 Q6 3 8 1Z" fill="#a8d88a" opacity="0.9" />
                <path d="M8 4 L8 11" stroke="rgba(255,255,255,0.4)" strokeWidth="0.7" strokeLinecap="round" />
              </svg>
              Get to know me more
            </button>
            <a
              href="/cv/illyria-dy-cv.pdf"
              download="Illyria_Dy_CV.pdf"
              className="flex items-center gap-2 px-7 py-3 rounded-full text-sm font-medium transition-all duration-300 active:scale-95"
              style={{
                background: 'transparent',
                color: '#4a6741',
                border: '1.5px solid rgba(74,103,65,0.4)',
                fontFamily: BODY,
                cursor: 'pointer',
                transition: 'border-color 0.2s, background 0.2s',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#4a6741'; e.currentTarget.style.background = 'rgba(74,103,65,0.06)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(74,103,65,0.4)'; e.currentTarget.style.background = 'transparent'; }}
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      {aboutOpen && (
        <>
          <div
            onClick={() => setAboutOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 200,
              background: 'rgba(42,51,32,0.55)',
              backdropFilter: 'blur(5px)',
              animation: 'panelFadeIn 0.25s ease forwards',
            }}
          />
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              zIndex: 201,
              width: 'min(640px, 94vw)',
              animation: 'panelGrow 0.42s cubic-bezier(0.34,1.56,0.64,1) forwards',
            }}
          >
            <div
              style={{
                background: '#f7f3ec',
                borderRadius: '28px 32px 26px 30px / 30px 26px 32px 28px',
                boxShadow: '0 24px 80px rgba(42,51,32,0.28), 0 4px 16px rgba(42,51,32,0.12)',
                padding: '28px 32px',
                position: 'relative',
                overflowX: 'hidden',
                overflowY: 'auto',
                maxHeight: '90vh',

              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#4a6741' }} />
                  <span style={{ fontFamily: MONO, fontSize: 11, color: '#8aaa7c', letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>
                    about the gardener
                  </span>
                </div>
                <button
                  onClick={() => setAboutOpen(false)}
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

            <div style={{ marginTop: 10, display: 'flex', justifyContent: 'left' }}>
              <a
                href="/cv/illyria-dy-portfolio.pdf"
                download="Illyria_Dy_Portfolio.pdf"
                style={{
                  fontFamily: BODY,
                  fontSize: 13,
                  fontWeight: 600,
                  padding: '10px 24px',
                  borderRadius: 10,
                  background: 'transparent',
                  color: '#4a6741',
                  border: '1.5px solid rgba(74,103,65,0.4)',
                  cursor: 'pointer',
                  transition: 'background 0.2s, border-color 0.2s',
                  letterSpacing: '0.02em',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 7,
                }}
              >
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2 L8 11 M4 8 L8 12 L12 8" stroke="#4a6741" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 13 L14 13" stroke="#4a6741" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
                Download Portfolio PDF
              </a>
            </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, margin: '20px 0' }}>
                  {[
                    { value: '3+', label: 'Years Coding' },
                    { value: '5+', label: 'Projects Built' },
                    { value: 'Open', label: 'To Opportunities' },
                    { value: '2027', label: 'Expected Grad' },
                  ].map(({ value, label }) => (
                    <div key={label} style={{
                      background: '#efe9d8',
                      borderRadius: 12,
                      padding: '12px 8px',
                      textAlign: 'center',
                    }}>
                      <div style={{ fontFamily: DISPLAY, fontSize: 22, fontWeight: 700, color: '#2a3320' }}>{value}</div>
                      <div style={{ fontFamily: MONO, fontSize: 10, color: '#8aaa7c', marginTop: 4, lineHeight: 1.3 }}>{label}</div>
                    </div>
                  ))}
                </div>

                {/* What I Do Best */}
                <div style={{ marginBottom: 20 }}>
                  <p style={{ fontFamily: MONO, fontSize: 10, color: '#8aaa7c', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>
                    What I Do Best
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {[
                      { label: 'Frontend', desc: 'Building responsive, accessible UIs with React and React Native. I care about the details — spacing, motion, and how things feel to use.' },
                      { label: 'Integration', desc: 'Connecting frontend to real systems — REST APIs, Supabase, and structured backend logic that actually holds up.' },
                      { label: 'Design', desc: 'Interactive prototyping and component systems. I bridge the gap between how something looks and how it works.' },
                    ].map(({ label, desc }) => (
                      <div key={label} style={{
                        display: 'flex', gap: 12, alignItems: 'flex-start',
                        padding: '10px 14px',
                        background: '#f7f3ec',
                        borderRadius: 10,
                        border: '1px solid rgba(74,103,65,0.12)',
                      }}>
                        <div style={{
                          flexShrink: 0,
                          width: 6, height: 6,
                          borderRadius: '50%',
                          background: '#4a6741',
                          marginTop: 6,
                        }} />
                        <div>
                          <div style={{ fontFamily: BODY, fontSize: 13, fontWeight: 600, color: '#2a3320', marginBottom: 3 }}>{label}</div>
                          <div style={{ fontFamily: BODY, fontSize: 12, color: '#6b6245', lineHeight: 1.6 }}>{desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education & Experience */}
                <div style={{ marginBottom: 20 }}>
                  <p style={{ fontFamily: MONO, fontSize: 10, color: '#8aaa7c', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>
                    Education & Experience
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {[
                      { year: '2023 – Present', title: 'BS Computer Science', sub: 'University of the Philippines Cebu' },
                      { year: '2023 - Present ', title: 'UP Computer Science Guild' }, 
                      { year: '2025', title: 'Can You HackIT - The IBPAP Challenge (Hackathon)' }, 
                      { year: '2025 & 2026', title: 'Overall Head of Komsai Week ByteBlitz Programming Competition' }, 
                      { year: '2024', title: 'Technology Application and Promotion Institute CLUSTERICE Finalist ' }, 
                      { year: '2021 – 2023', title: 'Science, Technology, Engineering, and Mathematics (STEM)', sub: 'Science and Technology Education Center (STEC)' },
                    ].map(({ year, title, sub }) => (
                      <div key={title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                        <div style={{ fontFamily: MONO, fontSize: 10, color: '#8aaa7c', flexShrink: 0, paddingTop: 2, minWidth: 80 }}>{year}</div>
                        <div>
                          <div style={{ fontFamily: BODY, fontSize: 13, fontWeight: 600, color: '#2a3320' }}>{title}</div>
                          <div style={{ fontFamily: MONO, fontSize: 11, color: '#8aaa7c' }}>{sub}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Working Style */}
                <div style={{
                  padding: '14px 16px',
                  background: '#efe9d8',
                  borderRadius: 12,
                  borderLeft: '3px solid #4a6741',
                }}>
                  <p style={{ fontFamily: BODY, fontSize: 13, color: '#6b6245', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
                    "I approach codebases the way I tend a garden — with patience, intention, and deep respect for what's already growing. I'm collaborative, detail-oriented, and always thinking about the person on the other side of the screen."
                  </p>
                </div>
            </div>
            
          </div>
        </>
      )}
    </section>
  );
}
