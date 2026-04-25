// components/ui/skeleton.tsx
"use client";
import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "card" | "text" | "circle" | "button";
}

export function Skeleton({
  className,
  variant = "text",
  ...props
}: SkeletonProps) {
  const variants = {
    card: "rounded-2xl bg-white/5",
    text: "rounded-md bg-white/5",
    circle: "rounded-full bg-white/5",
    button: "rounded-full bg-white/5",
  };

  return (
    <div
      className={cn("animate-pulse", variants[variant], className)}
      {...props}
    />
  );
}

export function CardSkeleton() {
  return (
    <div className="card-premium p-6">
      <Skeleton variant="circle" className="h-12 w-12 mb-4" />
      <Skeleton variant="text" className="h-6 w-3/4 mb-3" />
      <Skeleton variant="text" className="h-4 w-full mb-2" />
      <Skeleton variant="text" className="h-4 w-5/6" />
      <div className="mt-4 flex justify-between items-center">
        <Skeleton variant="text" className="h-6 w-20" />
        <Skeleton variant="button" className="h-8 w-24" />
      </div>
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="pt-32 pb-20 text-center">
      <Skeleton variant="button" className="h-8 w-40 mx-auto mb-6" />
      <Skeleton variant="text" className="h-16 w-3/4 mx-auto mb-4" />
      <Skeleton variant="text" className="h-6 w-1/2 mx-auto mb-8" />
      <div className="flex gap-4 justify-center">
        <Skeleton variant="button" className="h-12 w-36" />
        <Skeleton variant="button" className="h-12 w-36" />
      </div>
    </div>
  );
}
