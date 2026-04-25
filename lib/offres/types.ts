// lib/offres/types.ts
export type Categorie = "basique" | "niche" | "angle-mort";

export interface PrixTier {
  nom: "Basique" | "Standard" | "Pro";
  prix: number;
  delaiJours: number;
  description: string;
  features: string[];
  missingFeatures?: string[];
  workflows: string[];
  livrables: string[];
  supportJours: number;
  popular?: boolean;
}

export interface OffreComplet {
  id: number;
  slug: string;
  titre: string;
  descriptionCourte: string;
  descriptionLongue: string;
  outils: string[];
  categorie: Categorie;
  secteurs: string[];
  imageId: number;
  prixTiers: PrixTier[];
  workflows: {
    id: string;
    titre: string;
    description: string;
    categoriePrix: "basique" | "standard" | "pro";
  }[];
}
