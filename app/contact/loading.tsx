// app/contact/loading.tsx
import { Container } from "@/components/shared/Container";
import { Skeleton } from "@/components/ui/skeleton";

export default function ContactLoading() {
  return (
    <Container className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Skeleton variant="button" className="h-8 w-32 mx-auto mb-4" />
          <Skeleton variant="text" className="h-12 w-96 mx-auto mb-4" />
          <Skeleton variant="text" className="h-6 w-2/3 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Skeleton variant="text" className="h-8 w-48 mb-4" />
            <Skeleton variant="text" className="h-4 w-full mb-2" />
            <Skeleton variant="text" className="h-4 w-3/4 mb-6" />

            <div className="space-y-4">
              <Skeleton variant="text" className="h-12 w-full" />
              <Skeleton variant="text" className="h-12 w-full" />
              <Skeleton variant="text" className="h-24 w-full" />
              <Skeleton variant="button" className="h-12 w-full" />
            </div>
          </div>

          <div>
            <div className="card-premium p-6">
              <Skeleton variant="text" className="h-6 w-40 mb-4" />
              <Skeleton variant="text" className="h-4 w-full mb-2" />
              <Skeleton variant="text" className="h-4 w-5/6 mb-4" />
              <Skeleton variant="text" className="h-6 w-40 mt-4 mb-2" />
              <Skeleton variant="text" className="h-4 w-full mb-2" />
              <Skeleton variant="text" className="h-4 w-5/6" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
