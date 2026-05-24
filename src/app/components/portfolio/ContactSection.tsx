import { Mail, Github, Linkedin, MapPin } from 'lucide-react';
import { MONO } from '../../../constants';

const contacts = [
  { icon: <Mail size={17} />, label: 'Email', value: 'illyriapdy@gmail.com', href: 'mailto:illyriapdy@gmail.com' },
  { icon: <Github size={17} />, label: 'GitHub', value: 'github.com/Ileryadeh', href: 'https://github.com/Ileryadeh' },
  { icon: <Linkedin size={17} />, label: 'LinkedIn', value: 'linkedin.com/in/illyria-dy', href: 'https://www.linkedin.com/in/illyria-dy' },
  { icon: <MapPin size={17} />, label: 'Location', value: 'Cebu City', href: null },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {[[15, 20], [80, 15], [55, 80], [88, 65]].map(([x, y], i) => (
        <svg
          key={i}
          className="absolute pointer-events-none"
          style={{ left: `${x}%`, top: `${y}%`, opacity: 0.06, transform: `rotate(${i * 55}deg)` }}
          width="40"
          height="40"
          viewBox="0 0 40 40"
        >
          <path d="M20 4 Q32 14 26 30 Q14 26 20 4Z" fill="#4a6741" />
        </svg>
      ))}

      <div className="max-w-4xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase text-accent mb-3" style={{ fontFamily: MONO }}>The Root System</p>
          <h2 className="text-4xl md:text-5xl text-foreground" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Let's Grow Together</h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto text-sm">
            Plant a message. I'll water it with a response.
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden border border-border" style={{ background: '#efe9d8' }}>
          <div className="absolute top-0 left-0 right-0 flex justify-around overflow-hidden pointer-events-none">
            {[...Array(14)].map((_, i) => (
              <svg key={i} width="22" height="18" viewBox="0 0 22 18" style={{ marginTop: '-9px', opacity: i % 3 === 0 ? 0.55 : 0.35 }}>
                <path d="M11 18 Q5 10 8 0 Q10 7 11 10 Q12 7 14 0 Q17 10 11 18Z" fill="#4a6741" />
              </svg>
            ))}
          </div>

          <div className="px-8 pt-12 pb-8">
            <p className="text-center text-xs tracking-widest uppercase text-muted-foreground mb-8" style={{ fontFamily: MONO }}>
              Find me here
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {contacts.map(({ icon, label, value, href }) => {
                const inner = (
                  <>
                    <div style={{ color: '#4a6741' }}>{icon}</div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-0.5" style={{ fontFamily: MONO }}>{label}</div>
                      <div className="text-sm font-medium text-foreground">{value}</div>
                    </div>
                    {href && (
                      <svg className="ml-auto" width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: '#4a6741', opacity: 0.5 }}>
                        <path d="M2 12 L12 2 M7 2 L12 2 L12 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </>
                );

                return href ? (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"   
                    className="flex items-center gap-3 rounded-xl px-4 py-3.5 border border-border transition-all duration-200 hover:border-primary/40 hover:bg-background group"
                    style={{ background: '#f7f3ec' }}
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-xl px-4 py-3.5 border border-border"
                    style={{ background: '#f7f3ec' }}
                  >
                    {inner}
                  </div>
                );
              })}
            </div>

            <p className="text-center text-xs text-muted-foreground mt-8" style={{ fontFamily: MONO }}>
              © 2026 Illyria Dy — Built with passion, not just tech.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
