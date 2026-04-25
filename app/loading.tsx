// app/(marketing)/loading.tsx
import { Spinner } from "@/components/ui/spinner";

export default function MarketingLoading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl animate-pulse" />
        <Spinner size="lg" color="emerald" />
      </div>
      <p className="mt-6 text-gray-400">Préparation de votre expérience...</p>
    </div>
  );
}
