// lib/offres/index.ts
export type { OffreComplet, Categorie, PrixTier } from "./types";
export { basicsOffres } from "./basics";
export { nichesOffres } from "./niches";
export { deadAnglesOffres } from "./dead-angles";

// Toutes les offres fusionnées
import { basicsOffres } from "./basics";
import { nichesOffres } from "./niches";
import { deadAnglesOffres } from "./dead-angles";

export const allOffres = [
  ...basicsOffres,
  ...nichesOffres,
  ...deadAnglesOffres,
];

export function getOffreBySlug(slug: string) {
  return allOffres.find((offre) => offre.slug === slug);
}
