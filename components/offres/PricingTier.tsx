// components/offres/PricingTier.tsx
"use client";

import { Check, X, Star } from "lucide-react";
import Link from "next/link";
import type { PrixTier } from "@/lib/offres/types";

interface PricingTierProps {
  tier: PrixTier;
}

export function PricingTier({ tier }: PricingTierProps) {
  return (
    <div
      className={`card-premium p-6 ${tier.popular ? "border-emerald-500/50 relative" : ""}`}
    >
      {tier.popular && (
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
          {tier.features.map((feature, i) => (
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
            {tier.missingFeatures.map((feature, i) => (
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
            {tier.workflows.map((wf, i) => (
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
            {tier.livrables.map((item, i) => (
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
          className="block w-full text-center btn-primary py-2"
        >
          Choisir cette offre
        </Link>
      </div>
    </div>
  );
}
