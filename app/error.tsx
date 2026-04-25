// app/error.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="h-20 w-20 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="h-10 w-10 text-red-500" />
        </div>

        <h1 className="text-2xl font-bold text-white mb-2">
          Une erreur est survenue
        </h1>

        <p className="text-gray-400 mb-6">
          Désolé, quelque chose s'est mal passé. Notre équipe a été notifiée.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full font-medium hover:from-emerald-600 hover:to-teal-700 transition-all"
          >
            <RefreshCw className="h-4 w-4" />
            Réessayer
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full font-medium hover:bg-white/5 transition-all"
          >
            <Home className="h-4 w-4" />
            Retour à l'accueil
          </Link>
        </div>

        {error.digest && (
          <p className="text-xs text-gray-500 mt-6">
            Code d'erreur: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
