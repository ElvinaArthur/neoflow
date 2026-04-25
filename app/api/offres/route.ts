// app/api/offres/route.ts
import { NextResponse } from "next/server";
import { allOffres } from "@/lib/offres";

export async function GET() {
  try {
    // Retourne toutes les offres (uniquement les infos publiques)
    const offresPublic = allOffres.map((offre) => ({
      id: offre.id,
      slug: offre.slug,
      titre: offre.titre,
      descriptionCourte: offre.descriptionCourte,
      categorie: offre.categorie,
      prixMin: offre.prixTiers[0]?.prix || 0,
      outils: offre.outils.slice(0, 3),
    }));

    return NextResponse.json({
      success: true,
      count: offresPublic.length,
      offres: offresPublic,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de la récupération des offres" },
      { status: 500 },
    );
  }
}
