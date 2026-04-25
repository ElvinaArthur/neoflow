// components/shared/SectionTitle.tsx
"use client";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  description,
  centered = true,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      {subtitle && (
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
          {subtitle}
        </span>
      )}
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
