import { BotanicalCorner } from './BotanicalCorner';

export function QuoteSection() {
  return (
    <section id="quote" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <BotanicalCorner className="absolute top-0 left-0" />
      <div className="absolute top-0 right-0" style={{ transform: 'scaleX(-1)' }}>
        <BotanicalCorner />
      </div>
      <div className="absolute bottom-0 left-0" style={{ transform: 'scaleY(-1)' }}>
        <BotanicalCorner />
      </div>
      <div className="absolute bottom-0 right-0" style={{ transform: 'scale(-1,-1)' }}>
        <BotanicalCorner />
      </div>

      {[[18, 35], [82, 12], [52, 88], [90, 72], [10, 68], [70, 20]].map(([x, y], i) => (
        <svg
          key={i}
          className="absolute pointer-events-none"
          style={{ left: `${x}%`, top: `${y}%`, opacity: 0.07, transform: `rotate(${i * 37}deg)` }}
          width="28"
          height="28"
          viewBox="0 0 28 28"
        >
          <path d="M14 2 Q22 10 18 22 Q10 18 14 2Z" fill="#4a6741" />
        </svg>
      ))}

      <div className="text-center max-w-3xl mx-auto px-8 relative z-10">
        <div className="flex items-center gap-5 justify-center mb-14">
          <div className="h-px w-16 bg-primary opacity-30" />
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M11 2 Q15 7 13 12 Q11 17 8 15 Q5 13 8 8 Q10 4 11 2Z" fill="#4a6741" opacity="0.6" />
            <path d="M11 6 Q16 8 16 13 Q16 18 11 18" fill="#6b9a5e" opacity="0.5" />
          </svg>
          <div className="h-px w-16 bg-primary opacity-30" />
        </div>

        <blockquote>
          <p className="text-4xl md:text-[3.5rem] leading-tight text-foreground mb-10" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic', lineHeight: 1.25 }}>
            "If it's beyond<br />your calculations,<br />let the wind decide."
          </p>
        </blockquote>

        <div className="text-xs tracking-widest uppercase text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
          — On uncertainty, growth &amp; code
        </div>

        <div className="mt-20 flex flex-col items-center gap-2 text-muted-foreground opacity-50">
          <span className="text-xs tracking-wider uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>Scroll</span>
          <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, #6b6245, transparent)' }} />
        </div>
      </div>
    </section>
  );
}
