// app/about/loading.tsx
"use client";

import { Container } from "@/components/shared/Container";
import { Loader2 } from "lucide-react";

export default function AboutLoading() {
  return (
    <Container className="pt-32 pb-20">
      <div className="text-center mb-12">
        <div className="h-8 w-32 bg-white/5 rounded-full mx-auto mb-4 animate-pulse" />
        <div className="h-12 w-96 bg-white/5 rounded-lg mx-auto mb-4 animate-pulse" />
        <div className="h-6 w-2/3 bg-white/5 rounded mx-auto animate-pulse" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="card-premium p-6 text-center">
            <div className="h-8 w-8 bg-white/5 rounded-full mx-auto mb-3 animate-pulse" />
            <div className="h-8 w-16 bg-white/5 rounded mx-auto mb-2 animate-pulse" />
            <div className="h-4 w-20 bg-white/5 rounded mx-auto animate-pulse" />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="h-6 w-32 bg-white/5 rounded mb-3 animate-pulse" />
          <div className="h-10 w-3/4 bg-white/5 rounded mb-4 animate-pulse" />
          <div className="h-4 w-full bg-white/5 rounded mb-2 animate-pulse" />
          <div className="h-4 w-full bg-white/5 rounded mb-2 animate-pulse" />
          <div className="h-4 w-5/6 bg-white/5 rounded mb-4 animate-pulse" />
          <div className="space-y-2">
            <div className="h-6 w-64 bg-white/5 rounded animate-pulse" />
            <div className="h-6 w-56 bg-white/5 rounded animate-pulse" />
            <div className="h-6 w-72 bg-white/5 rounded animate-pulse" />
          </div>
        </div>
        <div className="card-premium p-8">
          <div className="h-12 w-12 bg-white/5 rounded-full mx-auto mb-4 animate-pulse" />
          <div className="h-6 w-40 bg-white/5 rounded mx-auto mb-4 animate-pulse" />
          <div className="h-4 w-full bg-white/5 rounded mb-2 animate-pulse" />
          <div className="h-4 w-5/6 bg-white/5 rounded mx-auto animate-pulse" />
        </div>
      </div>
    </Container>
  );
}
