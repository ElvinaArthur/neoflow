// components/offres/OffreDetailClient.tsx
"use client";

import { useState } from "react";
import { PricingTier } from "./PricingTier";
import type { OffreComplet } from "@/lib/offres/types";

interface OffreDetailClientProps {
  offre: OffreComplet;
}

export function OffreDetailClient({ offre }: OffreDetailClientProps) {
  const [selectedTier, setSelectedTier] = useState<
    "basique" | "standard" | "pro"
  >("standard");

  return (
    <div>
      {/* Hero */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs px-3 py-1 bg-emerald-500/20 text-emerald-500 rounded-full">
            Service #{offre.id.toString().padStart(2, "0")} — Catalogue{" "}
            {offre.categorie === "basique"
              ? "Basique"
              : offre.categorie === "niche"
                ? "Niche"
                : "Angle Mort"}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{offre.titre}</h1>
        <p className="text-xl text-gray-400">
          {offre.descriptionLongue.split(".")[0]}.
        </p>
      </div>

      {/* Les 3 offres */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Les 3 offres</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {offre.prixTiers.map((tier) => (
            <PricingTier key={tier.nom} tier={tier} />
          ))}
        </div>
      </div>

      {/* Workflows par offre */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">
          Les workflows construits — par offre
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {offre.workflows.map((wf) => (
            <div key={wf.id} className="card-premium p-4">
              <div className="flex items-start justify-between">
                <div>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full mb-2 inline-block ${
                      wf.categoriePrix === "basique"
                        ? "bg-gray-500/20 text-gray-400"
                        : wf.categoriePrix === "standard"
                          ? "bg-emerald-500/20 text-emerald-500"
                          : "bg-purple-500/20 text-purple-400"
                    }`}
                  >
                    {wf.categoriePrix === "basique"
                      ? "Basique"
                      : wf.categoriePrix === "standard"
                        ? "Standard"
                        : "Pro"}
                  </span>
                  <h3 className="font-semibold text-white">{wf.titre}</h3>
                  <p className="text-sm text-gray-500 mt-1">{wf.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Outils utilisés */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Outils utilisés</h2>
        <div className="flex flex-wrap gap-2">
          {offre.outils.map((outil) => (
            <span
              key={outil}
              className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300"
            >
              {outil}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
