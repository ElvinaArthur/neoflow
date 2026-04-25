// app/no-code-automatisation/loading.tsx
"use client";

import { Container } from "@/components/shared/Container";

export default function NoCodeLoading() {
  return (
    <Container className="pt-32 pb-20">
      {/* Hero skeleton */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <div className="h-8 w-40 bg-white/5 rounded-full mx-auto mb-6 animate-pulse" />
        <div className="h-14 w-3/4 bg-white/5 rounded-lg mx-auto mb-6 animate-pulse" />
        <div className="h-6 w-1/2 bg-white/5 rounded mx-auto mb-10 animate-pulse" />
        <div className="flex gap-4 justify-center">
          <div className="h-12 w-36 bg-white/5 rounded-full animate-pulse" />
          <div className="h-12 w-36 bg-white/5 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Stats skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="text-center">
            <div className="h-10 w-20 bg-white/5 rounded mx-auto mb-2 animate-pulse" />
            <div className="h-4 w-24 bg-white/5 rounded mx-auto animate-pulse" />
          </div>
        ))}
      </div>

      {/* What is no-code skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <div className="h-5 w-32 bg-white/5 rounded mb-3 animate-pulse" />
          <div className="h-10 w-3/4 bg-white/5 rounded mb-6 animate-pulse" />
          <div className="h-4 w-full bg-white/5 rounded mb-2 animate-pulse" />
          <div className="h-4 w-full bg-white/5 rounded mb-2 animate-pulse" />
          <div className="h-4 w-5/6 bg-white/5 rounded mb-6 animate-pulse" />
          <div className="flex gap-3">
            <div className="h-10 w-24 bg-white/5 rounded-lg animate-pulse" />
            <div className="h-10 w-16 bg-white/5 rounded-lg animate-pulse" />
            <div className="h-10 w-20 bg-white/5 rounded-lg animate-pulse" />
          </div>
        </div>
        <div className="card-premium p-8">
          <div className="space-y-4">
            <div className="h-16 w-full bg-white/5 rounded animate-pulse" />
            <div className="h-16 w-full bg-white/5 rounded animate-pulse" />
            <div className="h-20 w-full bg-white/5 rounded animate-pulse" />
          </div>
        </div>
      </div>

      {/* Benefits skeleton */}
      <div className="text-center mb-12">
        <div className="h-5 w-40 bg-white/5 rounded mx-auto mb-3 animate-pulse" />
        <div className="h-10 w-96 bg-white/5 rounded mx-auto animate-pulse" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="card-premium p-6 text-center">
            <div className="h-12 w-12 bg-white/5 rounded-full mx-auto mb-4 animate-pulse" />
            <div className="h-6 w-32 bg-white/5 rounded mx-auto mb-2 animate-pulse" />
            <div className="h-4 w-full bg-white/5 rounded animate-pulse" />
          </div>
        ))}
      </div>

      {/* Use cases skeleton */}
      <div className="text-center mb-12">
        <div className="h-5 w-32 bg-white/5 rounded mx-auto mb-3 animate-pulse" />
        <div className="h-10 w-80 bg-white/5 rounded mx-auto animate-pulse" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="card-premium p-6">
            <div className="h-8 w-8 bg-white/5 rounded mb-4 animate-pulse" />
            <div className="h-6 w-40 bg-white/5 rounded mb-2 animate-pulse" />
            <div className="h-4 w-full bg-white/5 rounded mb-4 animate-pulse" />
            <div className="flex gap-2">
              <div className="h-6 w-16 bg-white/5 rounded-full animate-pulse" />
              <div className="h-6 w-20 bg-white/5 rounded-full animate-pulse" />
            </div>
          </div>
        ))}
      </div>

      {/* Make vs n8n skeleton */}
      <div className="text-center mb-12">
        <div className="h-5 w-32 bg-white/5 rounded mx-auto mb-3 animate-pulse" />
        <div className="h-10 w-80 bg-white/5 rounded mx-auto animate-pulse" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {[1, 2].map((i) => (
          <div key={i} className="card-premium p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 bg-white/5 rounded-full animate-pulse" />
              <div className="h-8 w-32 bg-white/5 rounded animate-pulse" />
            </div>
            <div className="space-y-3">
              <div className="h-6 w-full bg-white/5 rounded animate-pulse" />
              <div className="h-6 w-full bg-white/5 rounded animate-pulse" />
              <div className="h-6 w-3/4 bg-white/5 rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>

      {/* CTA skeleton */}
      <div className="card-premium p-12 text-center">
        <div className="h-10 w-96 bg-white/5 rounded mx-auto mb-4 animate-pulse" />
        <div className="h-6 w-2/3 bg-white/5 rounded mx-auto mb-8 animate-pulse" />
        <div className="flex gap-4 justify-center">
          <div className="h-12 w-48 bg-white/5 rounded-full animate-pulse" />
          <div className="h-12 w-40 bg-white/5 rounded-full animate-pulse" />
        </div>
      </div>
    </Container>
  );
}
