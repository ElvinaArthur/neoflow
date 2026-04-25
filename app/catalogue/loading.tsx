// app/catalogue/loading.tsx
import { Container } from "@/components/shared/Container";
import { CardSkeleton } from "@/components/ui/skeleton";

export default function CatalogueLoading() {
  return (
    <Container className="pt-32 pb-20">
      {/* Header skeleton */}
      <div className="text-center mb-12">
        <div className="h-8 w-32 bg-white/5 rounded-full mx-auto mb-4 animate-pulse" />
        <div className="h-12 w-96 bg-white/5 rounded-lg mx-auto mb-4 animate-pulse" />
        <div className="h-6 w-2/3 bg-white/5 rounded mx-auto animate-pulse" />
      </div>

      {/* Filters skeleton */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-10 w-24 bg-white/5 rounded-full animate-pulse"
          />
        ))}
      </div>

      {/* Grid skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </Container>
  );
}
