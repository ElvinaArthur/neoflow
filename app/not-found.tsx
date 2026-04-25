// app/not-found.tsx
"use client";

import Link from "next/link";
import { Home, Search, ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* 404 Animation */}
        <div className="relative mb-8">
          <div className="text-8xl md:text-9xl font-bold text-white/5 select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Compass className="h-20 w-20 text-emerald-500/50" />
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Page non trouvée
        </h1>

        <p className="text-gray-400 mb-8 text-lg">
          Oups ! La page que vous recherchez n'existe pas ou a été déplacée.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full font-medium hover:from-emerald-600 hover:to-teal-700 transition-all"
          >
            <Home className="h-4 w-4" />
            Accueil
          </Link>

          <Link
            href="/catalogue"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full font-medium hover:bg-white/5 transition-all"
          >
            <Search className="h-4 w-4" />
            Explorer le catalogue
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full font-medium hover:bg-white/5 transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour
          </button>
        </div>

        {/* Suggestions */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-sm text-gray-500 mb-4">Pages populaires :</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/"
              className="text-gray-400 hover:text-emerald-400 text-sm transition-colors"
            >
              Accueil
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/catalogue"
              className="text-gray-400 hover:text-emerald-400 text-sm transition-colors"
            >
              Catalogue
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/no-code-automatisation"
              className="text-gray-400 hover:text-emerald-400 text-sm transition-colors"
            >
              No-code & IA
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/about"
              className="text-gray-400 hover:text-emerald-400 text-sm transition-colors"
            >
              À propos
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/contact"
              className="text-gray-400 hover:text-emerald-400 text-sm transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
