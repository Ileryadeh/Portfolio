import { FLOWER_COLORS, PETAL_ANGLES, MONO } from '../../../constants';
import { TechLogo } from './TechLogo';

type PotProps = {
  name: string;
};

export function Pot({ name }: PotProps) {
  const fc = FLOWER_COLORS[name] ?? { petal: '#b8d888', center: '#5a9040' };

  return (
    <div className="flex flex-col items-center group cursor-default">
      <div
        className="relative group-hover:-translate-y-2"
        style={{ width: 66, height: 132, transition: 'transform 0.35s ease' }}
      >
        <svg width="66" height="132" viewBox="0 0 66 132" fill="none" style={{ position: 'absolute', inset: 0 }}>
          <path d="M33 73 Q30 56 33 38" stroke="#4a6741" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M32 58 Q19 51 17 42 Q27 48 33 57Z" fill="#5a8850" opacity="0.85" />

          {PETAL_ANGLES.map((angle, i) => (
            <g key={i} transform={`rotate(${angle}, 33, 38)`}>
              <ellipse cx="33" cy="25" rx="5.5" ry="10" fill={fc.petal} opacity="0.92" />
            </g>
          ))}
          {PETAL_ANGLES.map((angle, i) => (
            <g key={i} transform={`rotate(${angle}, 33, 38)`}>
              <ellipse cx="33" cy="25" rx="2" ry="4" fill="rgba(255,255,255,0.22)" />
            </g>
          ))}
          <circle cx="33" cy="38" r="9" fill={fc.center} />
          <circle cx="33" cy="38" r="6" fill={fc.center} opacity="0.72" />
          {[[33, 35], [29, 38], [37, 38], [33, 41], [31, 36], [35, 36], [31, 40], [35, 40]].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="1.4" fill="rgba(255,255,255,0.38)" />
          ))}

          <rect x="5" y="63" width="56" height="10" rx="3" fill="#9a4e32" />
          <rect x="7" y="63" width="52" height="8" rx="2.5" fill="#b56040" />
          <rect x="7" y="63" width="52" height="2.5" rx="1" fill="rgba(255,255,255,0.2)" />
          <path d="M9 73 L5 120 L61 120 L57 73 Z" fill="#c4725a" />
          <path d="M9 73 L15 73 L11 120 L5 120 Z" fill="rgba(255,255,255,0.1)" />
          <path d="M57 73 L61 73 L61 120 L55 120 Z" fill="rgba(0,0,0,0.12)" />
          <rect x="14" y="120" width="38" height="9" rx="3" fill="#8b4428" />
          <rect x="14" y="126" width="38" height="3" rx="1.5" fill="rgba(0,0,0,0.18)" />
          <ellipse cx="33" cy="72" rx="23" ry="5.5" fill="#3a2210" opacity="0.68" />
          <ellipse cx="27" cy="71" rx="9" ry="2.5" fill="#5c3d1e" opacity="0.3" />
        </svg>

        <div style={{ position: 'absolute', top: 74, left: 11, width: 44, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <TechLogo name={name} size={30} />
        </div>
      </div>
      <span style={{ fontFamily: MONO, fontSize: 10, color: '#6b6245', textAlign: 'center', maxWidth: 66, marginTop: 6, lineHeight: 1.3 }}>
        {name}
      </span>
    </div>
  );
}
