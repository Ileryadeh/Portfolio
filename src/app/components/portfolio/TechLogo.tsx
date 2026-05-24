type TechLogoProps = {
  name: string;
  size?: number;
};

export function TechLogo({ name, size = 44 }: TechLogoProps) {
  const s = size;

  switch (name) {
    case 'JavaScript':
      return (
        <svg width={s} height={s} viewBox="0 0 44 44">
          <rect width="44" height="44" rx="6" fill="#F7DF1E" />
          <text x="7" y="32" fontFamily="'Arial Black',sans-serif" fontSize="17" fontWeight="900" fill="#222">JS</text>
        </svg>
      );
    case 'TypeScript':
      return (
        <svg width={s} height={s} viewBox="0 0 44 44">
          <rect width="44" height="44" rx="6" fill="#3178C6" />
          <text x="6" y="32" fontFamily="'Arial Black',sans-serif" fontSize="17" fontWeight="900" fill="#fff">TS</text>
        </svg>
      );
    case 'C/C++':
      return (
        <svg width={s} height={s} viewBox="0 0 44 44">
          <circle cx="22" cy="22" r="21" fill="#659AD2" />
          <text x="5" y="29" fontFamily="'Arial Black',sans-serif" fontSize="14" fontWeight="900" fill="#fff">C++</text>
        </svg>
      );
    case 'Python':
      return (
        <svg width={s} height={s} viewBox="0 0 44 44" fill="none">
          <path d="M22 4 C14 4 10 7 10 13 L10 18 L22 18 L22 20 L8 20 C4 20 2 24 2 30 C2 36 5 40 10 40 L14 40 L14 35 C14 32 17 30 22 30 L32 30 C36 30 38 28 38 24 L38 16 C38 10 35 4 22 4 Z" fill="#3776AB" />
          <path d="M22 40 C30 40 34 37 34 31 L34 26 L22 26 L22 24 L36 24 C40 24 42 20 42 14 C42 8 39 4 34 4 L30 4 L30 9 C30 12 27 14 22 14 L12 14 C8 14 6 16 6 20 L6 28 C6 34 9 40 22 40 Z" fill="#FFD343" />
          <circle cx="17" cy="11" r="2" fill="#fff" opacity="0.85" />
          <circle cx="27" cy="33" r="2" fill="#fff" opacity="0.85" />
        </svg>
      );
    case 'HTML':
      return (
        <svg width={s} height={s} viewBox="0 0 44 44" fill="none">
          <path d="M4 2 L8 40 L22 44 L36 40 L40 2 Z" fill="#E44D26" />
          <path d="M22 40.5 L33 37.5 L36.5 6 L22 6 Z" fill="#F16529" />
          <path d="M22 19 L14 19 L13.5 14 L22 14 L22 10 L9 10 L10.5 27 L22 27 Z" fill="#fff" />
          <path d="M22 31 L22 27 L29.5 25 L30 19 L22 19 L22 14 L35 14 L33.5 31 Z" fill="#fff" />
        </svg>
      );
    case 'CSS':
      return (
        <svg width={s} height={s} viewBox="0 0 44 44" fill="none">
          <path d="M4 2 L8 40 L22 44 L36 40 L40 2 Z" fill="#1572B6" />
          <path d="M22 40.5 L33 37.5 L36.5 6 L22 6 Z" fill="#33A9DC" />
          <path d="M22 20 L15 20 L14.5 15 L22 15 L22 10 L9.5 10 L11 28 L22 28 Z" fill="#fff" />
          <path d="M22 32.5 L22 28 L28 26 L28.5 20 L22 20 L22 15 L33.5 15 L32 32.5 Z" fill="#fff" />
        </svg>
      );
    case 'React.js':
      return (
        <svg width={s} height={s} viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="21" fill="#20232a" />
          <ellipse cx="22" cy="22" rx="19" ry="8" stroke="#61DAFB" strokeWidth="1.8" fill="none" />
          <ellipse cx="22" cy="22" rx="19" ry="8" stroke="#61DAFB" strokeWidth="1.8" fill="none" transform="rotate(60 22 22)" />
          <ellipse cx="22" cy="22" rx="19" ry="8" stroke="#61DAFB" strokeWidth="1.8" fill="none" transform="rotate(120 22 22)" />
          <circle cx="22" cy="22" r="3.5" fill="#61DAFB" />
        </svg>
      );
    case 'React Native':
      return (
        <svg width={s} height={s} viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="21" fill="#1a1a2e" />
          <ellipse cx="22" cy="22" rx="19" ry="8" stroke="#61DAFB" strokeWidth="1.8" fill="none" />
          <ellipse cx="22" cy="22" rx="19" ry="8" stroke="#61DAFB" strokeWidth="1.8" fill="none" transform="rotate(60 22 22)" />
          <ellipse cx="22" cy="22" rx="19" ry="8" stroke="#61DAFB" strokeWidth="1.8" fill="none" transform="rotate(120 22 22)" />
          <circle cx="22" cy="22" r="3.5" fill="#61DAFB" />
          <text x="12" y="42" fontFamily="'Arial',sans-serif" fontSize="6" fill="#61DAFB" fontWeight="bold">NATIVE</text>
        </svg>
      );
    case 'Flutter':
      return (
        <svg width={s} height={s} viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="21" fill="#0553B1" />
          <path d="M12 22 L22 12 L32 12 L19 25 Z" fill="#54C5F8" />
          <path d="M12 22 L22 32 L32 32 L22 22 Z" fill="#01579B" />
          <path d="M22 22 L32 32 L26 38 L16 28 Z" fill="#29B6F6" />
        </svg>
      );
    case 'Git':
      return (
        <svg width={s} height={s} viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="21" fill="#F05032" />
          <path d="M38 20.6 L23.4 6 C22.6 5.2 21.4 5.2 20.6 6 L17.8 8.8 L21.4 12.4 C22.2 12 23.2 12.2 23.8 13 C24.4 13.8 24.4 14.8 23.8 15.6 L27.2 19 C28 18.4 29 18.4 29.8 19.2 C30.8 20.2 30.8 21.8 29.8 22.8 C28.8 23.8 27.2 23.8 26.2 22.8 C25.4 22 25.4 20.8 26 20 L22.8 16.8 L22.8 27.2 C23.4 27.5 24 28 24.4 28.6 C25.4 29.6 25.4 31.2 24.4 32.2 C23.4 33.2 21.8 33.2 20.8 32.2 C19.8 31.2 19.8 29.6 20.8 28.6 C21.3 28.1 22 27.7 22.4 27.4 L22.4 16.6 L20.8 15 C20.2 15.6 19.2 15.6 18.4 15 L14.8 11.4 L6 20.2 C5.2 21 5.2 22.2 6 23 L20.6 37.6 C21.4 38.4 22.6 38.4 23.4 37.6 L38 23 C38.8 22.2 38.8 21.4 38 20.6 Z" fill="#fff" />
        </svg>
      );
    case 'GitHub':
      return (
        <svg width={s} height={s} viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="21" fill="#24292e" />
          <path d="M22 8 C14.3 8 8 14.3 8 22 C8 28.2 12 33.4 17.6 35.2 C18.3 35.4 18.6 34.9 18.6 34.5 L18.6 32 C14.7 32.9 13.9 30.3 13.9 30.3 C13.3 28.7 12.4 28.3 12.4 28.3 C11.2 27.5 12.5 27.5 12.5 27.5 C13.8 27.6 14.5 28.9 14.5 28.9 C15.7 31 17.7 30.4 18.6 30 C18.7 29.2 19 28.6 19.4 28.3 C16.2 27.9 12.8 26.7 12.8 21.2 C12.8 19.7 13.3 18.5 14.2 17.5 C14 17.1 13.6 15.8 14.4 14 C14.4 14 15.5 13.6 18.5 15.3 C19.7 15 21 14.8 22.2 14.8 C23.4 14.8 24.7 15 25.9 15.3 C28.9 13.6 30 14 30 14 C30.8 15.8 30.4 17.1 30.2 17.5 C31.1 18.5 31.6 19.7 31.6 21.2 C31.6 26.7 28.2 27.9 25 28.3 C25.5 28.7 26 29.5 26 30.8 L26 34.5 C26 34.9 26.3 35.4 27 35.2 C32.6 33.4 36.6 28.2 36.6 22 C36.6 14.3 30.3 8 22 8 Z" fill="#f0f6fc" />
        </svg>
      );
    // Figma logo removed
    default:
      return (
        <svg width={s} height={s} viewBox="0 0 44 44">
          <circle cx="22" cy="22" r="21" fill="#d4c9af" />
        </svg>
      );
  }
}
