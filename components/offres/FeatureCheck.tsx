// components/offres/FeatureCheck.tsx
"use client";
import { Check, X } from "lucide-react";

interface FeatureCheckProps {
  included: boolean;
  text: string;
}

export function FeatureCheck({ included, text }: FeatureCheckProps) {
  return (
    <div className="flex items-center gap-3">
      {included ? (
        <Check className="h-4 w-4 text-emerald-500 flex-shrink-0" />
      ) : (
        <X className="h-4 w-4 text-red-500 flex-shrink-0" />
      )}
      <span
        className={included ? "text-gray-300" : "text-gray-500 line-through"}
      >
        {text}
      </span>
    </div>
  );
}
