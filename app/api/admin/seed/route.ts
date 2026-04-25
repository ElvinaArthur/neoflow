// app/api/admin/seed/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "API route is working but seeding is disabled in production",
    status: "ok",
  });
}

export async function POST() {
  return NextResponse.json({
    message: "Seeding endpoint - contact admin for manual seed",
    status: "info",
  });
}
