export function Logo() {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <svg viewBox="0 0 48 48" className="h-10 w-10 shrink-0" aria-hidden="true">
        <circle cx="24" cy="24" r="22.5" fill="none" stroke="var(--brand)" strokeWidth="1.2" />
        <text
          x="24"
          y="30.5"
          textAnchor="middle"
          fontFamily="var(--font-display)"
          fontSize="19"
          fill="var(--brand)"
          letterSpacing="0.5"
        >
          SP
        </text>
      </svg>
      <div className="min-w-0 leading-tight">
        <p className="truncate font-display text-base text-foreground">Sara Pereira</p>
        <p className="label-caps truncate text-[0.6rem] text-brand">Level Up</p>
      </div>
    </div>
  );
}
