// components/ui/spinner.tsx
"use client";
import { Loader2 } from "lucide-react";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: "emerald" | "white" | "gray";
  className?: string;
}

export function Spinner({
  size = "md",
  color = "emerald",
  className = "",
}: SpinnerProps) {
  const sizes = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  const colors = {
    emerald: "text-emerald-500",
    white: "text-white",
    gray: "text-gray-400",
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Loader2 className={`${sizes[size]} ${colors[color]} animate-spin`} />
    </div>
  );
}
