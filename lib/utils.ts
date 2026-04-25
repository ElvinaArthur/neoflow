// lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function getOutilIcon(outil: string): string {
  const icons: Record<string, string> = {
    make: "⚙️",
    n8n: "🔄",
    openai: "🤖",
    hubspot: "📊",
    salesforce: "☁️",
    slack: "💬",
    sheets: "📝",
    notion: "📚",
    stripe: "💳",
    whatsapp: "📱",
  };
  return icons[outil] || "🔧";
}
