import { projects, MONO, DISPLAY } from '../../../constants';
import { Flower } from './Flower';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-28" style={{ background: '#efe9d8' }}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase text-accent mb-3" style={{ fontFamily: MONO }}>The Garden</p>
          <h2 className="text-4xl md:text-5xl text-foreground" style={{ fontFamily: DISPLAY }}>Projects in Bloom</h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm leading-relaxed">
            Each project planted from a seed of curiosity, grown with care and intention.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 pb-10">
          {projects.map((project) => (
            <Flower key={project.name} project={project} />
          ))}
        </div>

        <div className="relative h-10 mt-2">
          <div className="absolute inset-x-0 top-0 h-1.5 rounded-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(92,61,30,0.25), transparent)' }} />
          <div className="absolute inset-x-0 top-0 flex justify-around pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <svg key={i} width="22" height="16" viewBox="0 0 22 16" style={{ marginTop: '-8px', opacity: 0.55 }}>
                <path d="M11 16 Q5 8 7 0 Q9 6 11 9 Q13 6 15 0 Q17 8 11 16Z" fill="#4a6741" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
