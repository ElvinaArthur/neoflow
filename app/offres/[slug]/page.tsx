// app/offres/[slug]/page.tsx
"use client";

import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { allOffres, getOffreBySlug } from "@/lib/offres";
import { Check, X, Star, ArrowLeft } from "lucide-react";

function PricingTierSimple({
  tier,
  isPopular,
}: {
  tier: any;
  isPopular?: boolean;
}) {
  return (
    <div
      className={`card-premium p-6 ${isPopular ? "border-emerald-500/50 relative" : ""}`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
            <Star className="h-3 w-3" />
            Le plus choisi
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white">{tier.nom}</h3>
        <div className="mt-2">
          <span className="text-3xl font-bold text-white">{tier.prix}€</span>
          <span className="text-gray-400"> / projet</span>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          Livraison {tier.delaiJours} jours
        </p>
      </div>

      <p className="text-sm text-gray-400 mb-4 text-center">
        {tier.description}
      </p>

      <div className="border-t border-white/10 my-4 pt-4">
        <p className="text-xs text-gray-500 mb-2">✅ Inclus :</p>
        <div className="space-y-2">
          {tier.features?.map((feature: string, i: number) => (
            <div key={i} className="flex items-center gap-3">
              <Check className="h-4 w-4 text-emerald-500 flex-shrink-0" />
              <span className="text-gray-300 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {tier.missingFeatures && tier.missingFeatures.length > 0 && (
        <div className="border-t border-white/10 my-4 pt-4">
          <p className="text-xs text-gray-500 mb-2">❌ Non inclus :</p>
          <div className="space-y-2">
            {tier.missingFeatures.map((feature: string, i: number) => (
              <div key={i} className="flex items-center gap-3">
                <X className="h-4 w-4 text-red-500 flex-shrink-0" />
                <span className="text-gray-500 text-sm line-through">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {tier.workflows && tier.workflows.length > 0 && (
        <div className="border-t border-white/10 my-4 pt-4">
          <p className="text-xs text-gray-500 mb-2">📋 Workflows :</p>
          <ul className="space-y-1">
            {tier.workflows.map((wf: string, i: number) => (
              <li key={i} className="text-sm text-gray-400">
                • {wf}
              </li>
            ))}
          </ul>
        </div>
      )}

      {tier.livrables && tier.livrables.length > 0 && (
        <div className="border-t border-white/10 my-4 pt-4">
          <p className="text-xs text-gray-500 mb-2">📦 Livrables :</p>
          <ul className="space-y-1">
            {tier.livrables.map((item: string, i: number) => (
              <li key={i} className="text-sm text-gray-400">
                • {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="border-t border-white/10 my-4 pt-4">
        <p className="text-xs text-gray-500 mb-2">🛡️ Support :</p>
        <p className="text-sm text-gray-400">
          {tier.supportJours} jours inclus
        </p>
      </div>

      <div className="mt-6">
        <Link
          href="/contact"
          className="block w-full text-center bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-2 rounded-full font-medium hover:from-emerald-600 hover:to-teal-700 transition-all"
        >
          Choisir cette offre
        </Link>
      </div>
    </div>
  );
}

export default function OffrePage() {
  const params = useParams();
  const slug = params.slug as string;
  const offre = getOffreBySlug(slug);

  if (!offre) {
    notFound();
  }

  return (
    <Container className="pt-32 pb-20">
      <div className="max-w-5xl mx-auto">
        {/* Back button */}
        <Link
          href="/catalogue"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-emerald-500 transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour au catalogue
        </Link>

        {/* Hero */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs px-3 py-1 bg-emerald-500/20 text-emerald-500 rounded-full">
              Service #{offre.id.toString().padStart(2, "0")}
            </span>
            <span className="text-xs px-3 py-1 bg-white/10 text-gray-300 rounded-full">
              {offre.categorie === "basique"
                ? "⚡ Basique"
                : offre.categorie === "niche"
                  ? "🎯 Niche"
                  : "💎 Angle mort"}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{offre.titre}</h1>
          <p className="text-xl text-gray-400">{offre.descriptionLongue}</p>
        </div>

        {/* Outils */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-3">Outils utilisés</h2>
          <div className="flex flex-wrap gap-2">
            {offre.outils.map((outil: string) => (
              <span
                key={outil}
                className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300"
              >
                {outil}
              </span>
            ))}
          </div>
        </div>

        {/* Secteurs */}
        {offre.secteurs && offre.secteurs.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-3">Secteurs concernés</h2>
            <div className="flex flex-wrap gap-2">
              {offre.secteurs.map((secteur: string) => (
                <span
                  key={secteur}
                  className="px-3 py-1 bg-emerald-500/10 rounded-full text-sm text-emerald-400"
                >
                  {secteur}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Les 3 offres */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Les offres disponibles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {offre.prixTiers.map((tier: any, index: number) => (
              <PricingTierSimple
                key={tier.nom}
                tier={tier}
                isPopular={tier.popular}
              />
            ))}
          </div>
        </div>

        {/* Workflows */}
        {offre.workflows && offre.workflows.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Les workflows inclus</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {offre.workflows.map((wf: any) => (
                <div key={wf.id} className="card-premium p-4">
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
                    <p className="text-sm text-gray-500 mt-1">
                      {wf.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
