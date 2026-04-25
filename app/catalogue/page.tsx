// app/catalogue/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { allOffres } from "@/lib/offres";
import type { OffreComplet } from "@/lib/offres/types";

const ITEMS_PER_PAGE = 12;

export default function CataloguePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategorie, setSelectedCategorie] = useState<
    "all" | "basique" | "niche" | "angle-mort"
  >("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = allOffres.filter((o: OffreComplet) => {
    const matchCategorie =
      selectedCategorie === "all" || o.categorie === selectedCategorie;
    const matchSearch =
      o.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.descriptionCourte.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategorie && matchSearch;
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginated = filtered.slice(start, start + ITEMS_PER_PAGE);

  const getCategorieBadge = (categorie: string) => {
    switch (categorie) {
      case "basique":
        return (
          <span className="text-xs text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded-full">
            ⚡ Basique
          </span>
        );
      case "niche":
        return (
          <span className="text-xs text-purple-400 bg-purple-400/10 px-2 py-0.5 rounded-full">
            🎯 Niche
          </span>
        );
      case "angle-mort":
        return (
          <span className="text-xs text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
            💎 Angle mort
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <Container className="pt-32 pb-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Catalogue d'<span className="gradient-text">automatisations</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          {allOffres.length} offres prêtes à l'emploi
        </p>
      </div>

      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Rechercher une offre..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {[
          { id: "all", label: "Toutes", count: allOffres.length },
          {
            id: "basique",
            label: "Basiques",
            count: allOffres.filter(
              (o: OffreComplet) => o.categorie === "basique",
            ).length,
          },
          {
            id: "niche",
            label: "Niches",
            count: allOffres.filter(
              (o: OffreComplet) => o.categorie === "niche",
            ).length,
          },
          {
            id: "angle-mort",
            label: "Angles morts",
            count: allOffres.filter(
              (o: OffreComplet) => o.categorie === "angle-mort",
            ).length,
          },
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setSelectedCategorie(cat.id as any);
              setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              selectedCategorie === cat.id
                ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white"
                : "bg-white/5 text-gray-400 hover:bg-white/10"
            }`}
          >
            {cat.label} ({cat.count})
          </button>
        ))}
      </div>

      <div className="text-sm text-gray-500 mb-4">
        {filtered.length} offre(s) trouvée(s)
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {paginated.map((offre: OffreComplet) => (
          <Link
            key={offre.id}
            href={`/offres/${offre.slug}`}
            className="card-premium p-5 hover:scale-[1.02] transition-all block group"
          >
            <div className="flex justify-between items-start mb-3">
              <span className="text-xs text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                #{offre.id.toString().padStart(2, "0")}
              </span>
              {getCategorieBadge(offre.categorie)}
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-400 transition-colors line-clamp-1">
              {offre.titre}
            </h3>
            <p className="text-gray-400 text-sm mb-3 line-clamp-2">
              {offre.descriptionCourte}
            </p>
            <div className="flex flex-wrap gap-1 mb-3">
              {offre.outils.slice(0, 3).map((outil: string, idx: number) => (
                <span
                  key={idx}
                  className="text-xs px-1.5 py-0.5 bg-white/5 rounded text-gray-500"
                >
                  {outil.split(" ")[0]}
                </span>
              ))}
              {offre.outils.length > 3 && (
                <span className="text-xs text-gray-600">
                  +{offre.outils.length - 3}
                </span>
              )}
            </div>
            <div className="flex justify-between items-center mt-2 pt-2 border-t border-white/10">
              <span className="text-emerald-500 font-bold">
                dès {offre.prixTiers[0]?.prix || 0}€
              </span>
              <span className="text-gray-500 text-sm group-hover:text-emerald-400 transition-colors">
                Voir →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-10">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-white/5 rounded-full disabled:opacity-30 hover:bg-white/10"
          >
            ←
          </button>
          <span className="px-4 py-1 text-gray-400">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-white/5 rounded-full disabled:opacity-30 hover:bg-white/10"
          >
            →
          </button>
        </div>
      )}
    </Container>
  );
}
