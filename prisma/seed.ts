// prisma/seed.ts
import { PrismaClient } from "@prisma/client";
import { OffreInput } from "../types";

const prisma = new PrismaClient();

const offres: OffreInput[] = [
  // 20 Basiques
  {
    slug: "crm-automation",
    titre: "Automatisation CRM",
    descriptionCourte:
      "HubSpot, Salesforce ou GHL connectés à vos outils métier",
    descriptionLongue: `Votre CRM est censé centraliser tout — mais en réalité, vos commerciaux copient-collent des infos entre trois outils, reçoivent les leads avec du retard et oublient de relancer les contacts. Ce n'est pas un problème humain, c'est un problème de plomberie.

On construit pour vous les connexions automatiques entre votre CRM et tous vos outils du quotidien. Un nouveau lead entre dans HubSpot ? Une notification Slack part à votre commercial, une ligne s'ajoute dans votre Google Sheet de suivi, et un premier email de bienvenue part sous 2 minutes. Un deal passe en "Gagné" ? Une facture se génère, un accès est créé, votre équipe ops est notifiée. Tout ça sans que personne n'appuie sur un seul bouton.

Le résultat : zéro friction entre vos outils, zéro lead qui tombe dans les cracks, et un gain de temps moyen de 5 à 15 heures par semaine pour votre équipe commerciale.`,
    outils: ["make", "n8n", "hubspot", "salesforce", "slack", "sheets"],
    livrables: [
      "Audit de vos processus CRM actuels",
      "Schéma des flux d'automatisation",
      "Workflows Make ou n8n construits et testés",
      "Documentation PDF",
      "Session de passation vidéo 30 min",
      "14 jours de support post-livraison",
    ],
    delaiJours: 5,
    prixStarter: 300,
    prixPro: 600,
    prixSurDevis: true,
    categorie: "basique",
    secteurs: ["ventes", "marketing", "saas"],
    tags: ["crm", "hubspot", "salesforce", "lead", "productivite"],
    featured: true,
  },
  {
    slug: "email-automation",
    titre: "Email Automation",
    descriptionCourte: "Séquences, relances, tri IA et réponses automatiques",
    descriptionLongue: `Automatisez vos communications emails avec des séquences intelligentes, des relances basées sur le comportement, et un tri automatique des réponses par IA.`,
    outils: ["make", "n8n", "openai"],
    livrables: [
      "Séquences emails configurées",
      "Système de relance auto",
      "Dashboard de suivi",
    ],
    delaiJours: 3,
    prixStarter: 200,
    prixPro: 450,
    categorie: "basique",
    secteurs: ["marketing", "ventes", "ecommerce"],
    tags: ["email", "sequencing", "follow-up", "outreach"],
  },
  // ... je peux générer les 58 autres sur demande
];

async function main() {
  console.log("🌱 Seeding database...");

  for (const offre of offres) {
    await prisma.offre.upsert({
      where: { slug: offre.slug },
      update: {
        titre: offre.titre,
        descriptionCourte: offre.descriptionCourte,
        descriptionLongue: offre.descriptionLongue,
        outils: JSON.stringify(offre.outils),
        livrables: JSON.stringify(offre.livrables),
        delaiJours: offre.delaiJours,
        prixStarter: offre.prixStarter,
        prixPro: offre.prixPro,
        prixSurDevis: offre.prixSurDevis || false,
        prixMensuel: offre.prixMensuel,
        categorie: offre.categorie,
        secteurs: offre.secteurs ? JSON.stringify(offre.secteurs) : null,
        tags: JSON.stringify(offre.tags),
        featured: offre.featured || false,
      },
      create: {
        slug: offre.slug,
        titre: offre.titre,
        descriptionCourte: offre.descriptionCourte,
        descriptionLongue: offre.descriptionLongue,
        outils: JSON.stringify(offre.outils),
        livrables: JSON.stringify(offre.livrables),
        delaiJours: offre.delaiJours,
        prixStarter: offre.prixStarter,
        prixPro: offre.prixPro,
        prixSurDevis: offre.prixSurDevis || false,
        prixMensuel: offre.prixMensuel,
        categorie: offre.categorie,
        secteurs: offre.secteurs ? JSON.stringify(offre.secteurs) : null,
        tags: JSON.stringify(offre.tags),
        featured: offre.featured || false,
      },
    });
  }

  console.log(`✅ ${offres.length} offres créées/mises à jour`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
