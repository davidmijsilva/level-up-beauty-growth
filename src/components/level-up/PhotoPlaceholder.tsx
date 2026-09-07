import { ImagePlus } from "lucide-react";

export function PhotoPlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-brand-soft bg-brand-tint p-6 text-center ${className}`}
    >
      <ImagePlus className="h-6 w-6 text-brand" strokeWidth={1.4} aria-hidden="true" />
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}
