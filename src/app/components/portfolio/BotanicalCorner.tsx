export function BotanicalCorner({ className }: { className?: string }) {
  return (
    <svg className={className} width="120" height="120" viewBox="0 0 120 120" fill="none">
      <path d="M0 0 Q30 50 15 100 Q0 80 0 0Z" fill="#4a6741" opacity="0.12" />
      <path d="M0 0 Q60 25 50 90" stroke="#4a6741" strokeWidth="1.5" fill="none" opacity="0.18" />
      <path d="M22 65 Q38 54 45 78" fill="#5a8850" opacity="0.14" />
      <path d="M8 30 Q20 22 24 40" fill="#5a8850" opacity="0.12" />
      <circle cx="48" cy="82" r="4" fill="#c4725a" opacity="0.2" />
      <circle cx="24" cy="42" r="3" fill="#4a6741" opacity="0.18" />
    </svg>
  );
}
