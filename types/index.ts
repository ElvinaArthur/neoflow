// types/index.ts
export type Outil =
  | "make"
  | "n8n"
  | "openai"
  | "hubspot"
  | "salesforce"
  | "ghl"
  | "whatsapp"
  | "slack"
  | "sheets"
  | "notion"
  | "airtable"
  | "stripe"
  | "docusign";

export type CategorieOffre = "basique" | "niche" | "angle-mort";

export interface OffreInput {
  slug: string;
  titre: string;
  descriptionCourte: string;
  descriptionLongue: string;
  outils: Outil[];
  livrables: string[];
  delaiJours: number;
  prixStarter?: number;
  prixPro?: number;
  prixSurDevis?: boolean;
  prixMensuel?: number;
  categorie: CategorieOffre;
  secteurs?: string[];
  tags: string[];
  featured?: boolean;
}

export interface ContactFormData {
  nom: string;
  email: string;
  telephone?: string;
  entreprise?: string;
  message: string;
}
