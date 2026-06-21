import { cn } from "@/lib/utils";
import { Truck } from "lucide-react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export function SectionTitle({ title, subtitle, centered = false, className, light = false }: SectionTitleProps) {
  const titleColor = light ? "text-white" : "text-[var(--color-primary)]";
  const subtitleColor = light ? "text-white/70" : "text-gray-500";
  
  return (
    <div className={cn("mb-16", centered && "text-center", className)}>
      {subtitle && (
        <span className={`text-sm ${subtitleColor} font-medium tracking-wide mb-3 block`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-4xl md:text-5xl font-heading font-bold mb-6 ${titleColor}`}>
        {title}
      </h2>
      
      {centered ? (
        <div className="flex items-center justify-center gap-2">
          <div className="w-16 h-[1.5px] bg-[var(--color-accent)]" />
          <Truck className="w-6 h-6 text-[var(--color-accent)]" strokeWidth={1.5} />
          <div className="w-16 h-[1.5px] bg-[var(--color-accent)]" />
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <div className="w-20 h-[1.5px] bg-[var(--color-accent)]" />
          <Truck className="w-6 h-6 text-[var(--color-accent)]" strokeWidth={1.5} />
        </div>
      )}
    </div>
  );
}
