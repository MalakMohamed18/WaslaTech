import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({
  children,
  className,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        `
        rounded-3xl
        border
        border-white/10
        bg-white/5
        shadow-2xl
        backdrop-blur-2xl
        dark:bg-white/[0.04]
        `,
        className,
      )}
    >
      {children}
    </div>
  );
}