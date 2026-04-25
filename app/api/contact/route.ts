// app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nom, email, telephone, entreprise, message } = body;

    // Validation basique
    if (!nom || !email || !message) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants" },
        { status: 400 },
      );
    }

    // Ici tu peux ajouter l'envoi d'email ou sauvegarde en BDD plus tard
    console.log("Message reçu:", {
      nom,
      email,
      telephone,
      entreprise,
      message,
    });

    return NextResponse.json({
      success: true,
      message: "Message envoyé avec succès. Je vous réponds dans les 24h.",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message" },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: "Contact API is working" });
}
