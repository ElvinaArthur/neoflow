// app/offres/[slug]/loading.tsx
import { Container } from "@/components/shared/Container";
import { Skeleton } from "@/components/ui/skeleton";

export default function OffreDetailLoading() {
  return (
    <Container className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Skeleton variant="button" className="h-10 w-32 mb-8" />

        {/* Title */}
        <Skeleton variant="text" className="h-12 w-3/4 mb-4" />
        <Skeleton variant="text" className="h-6 w-full mb-2" />
        <Skeleton variant="text" className="h-6 w-5/6 mb-6" />

        {/* Badges */}
        <div className="flex gap-3 mb-8">
          <Skeleton variant="button" className="h-8 w-24" />
          <Skeleton variant="button" className="h-8 w-24" />
          <Skeleton variant="button" className="h-8 w-24" />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Skeleton variant="text" className="h-8 w-48 mb-4" />
            <Skeleton variant="text" className="h-4 w-full mb-2" />
            <Skeleton variant="text" className="h-4 w-full mb-2" />
            <Skeleton variant="text" className="h-4 w-3/4 mb-6" />

            <Skeleton variant="text" className="h-8 w-48 mb-4" />
            <Skeleton variant="text" className="h-4 w-full mb-2" />
            <Skeleton variant="text" className="h-4 w-full mb-2" />
            <Skeleton variant="text" className="h-4 w-5/6 mb-6" />
          </div>

          <div>
            <div className="card-premium p-6 sticky top-24">
              <Skeleton variant="text" className="h-6 w-32 mb-4" />
              <Skeleton variant="text" className="h-10 w-40 mb-6" />
              <Skeleton variant="button" className="h-12 w-full mb-3" />
              <Skeleton variant="button" className="h-12 w-full" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
