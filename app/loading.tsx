// app/loading.tsx
import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <Spinner size="lg" color="emerald" />
      <p className="mt-4 text-gray-400 animate-pulse">Chargement...</p>
    </div>
  );
}
