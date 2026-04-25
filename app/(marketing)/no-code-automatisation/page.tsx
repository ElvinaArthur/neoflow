// app/no-code-automatisation/page.tsx
"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Workflow,
  Database,
  TrendingUp,
  Clock,
  Shield,
  Zap,
  Sparkles,
  BarChart3,
  Mail,
  Users,
  ShoppingBag,
  Building2,
  CheckCircle,
  Globe,
  Cpu,
  GitBranch,
  Cloud,
  Lock,
  Smartphone,
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Gain de temps immédiat",
    description:
      "Automatisez les tâches répétitives et libérez 5 à 15 heures par semaine.",
  },
  {
    icon: TrendingUp,
    title: "ROI mesurable",
    description:
      "Chaque automation a un retour sur investissement clair et rapide.",
  },
  {
    icon: Shield,
    title: "Sans risque",
    description:
      "Modifiez et ajustez vos workflows sans jamais casser votre infrastructure.",
  },
  {
    icon: Zap,
    title: "Rapide à déployer",
    description:
      "Des solutions opérationnelles en quelques jours, pas en quelques mois.",
  },
];

const useCases = [
  {
    icon: Users,
    title: "CRM Automation",
    description:
      "Sync automatique entre votre CRM, vos emails, Slack et Google Sheets.",
    tools: ["Make", "n8n", "HubSpot"],
  },
  {
    icon: Bot,
    title: "Agents IA",
    description:
      "Chatbots intelligents, scoring de leads, RAG sur documents internes.",
    tools: ["n8n", "OpenAI", "Make"],
  },
  {
    icon: Mail,
    title: "Email & Marketing",
    description:
      "Séquences automatisées, relances intelligentes, nurturing client.",
    tools: ["Make", "n8n", "ActiveCampaign"],
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    description:
      "Paniers abandonnés, synchronisation stocks, facturation auto.",
    tools: ["Make", "Shopify", "Stripe"],
  },
  {
    icon: BarChart3,
    title: "Reporting Auto",
    description: "Agrégation multi-sources, rapports PDF, alertes Slack.",
    tools: ["n8n", "Google Sheets", "Looker"],
  },
  {
    icon: Building2,
    title: "Lead Generation",
    description: "Scraping, enrichissement, injection CRM, outreach auto.",
    tools: ["n8n", "Make", "Apify"],
  },
];

const deadAngles = [
  {
    title: "AI Voice Agent",
    description:
      "Réceptionniste IA qui prend les appels, qualifie et prend RDV.",
    price: "dès 1200€",
    tag: "Innovant",
  },
  {
    title: "Marché Africain Francophone",
    description: "Solutions localisées avec WhatsApp Business et Mobile Money.",
    price: "dès 200€",
    tag: "Local",
  },
  {
    title: "Retainer Maintenance",
    description: "Suivi mensuel, corrections, évolutions — revenu récurrent.",
    price: "dès 200€/mois",
    tag: "Stable",
  },
  {
    title: "RAG Agent",
    description:
      "Chatbot sur votre documentation interne (PDF, Notion, Drive).",
    price: "dès 1000€",
    tag: "IA Avancée",
  },
];

const stats = [
  { value: "60+", label: "Offres disponibles" },
  { value: "15h", label: "Gain de temps/semaine" },
  { value: "50+", label: "Clients accompagnés" },
  { value: "100%", label: "Satisfaction client" },
];

export default function NoCodePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-emerald-500" />
              <span className="text-sm text-gray-300">
                No-code & Intelligence Artificielle
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Le no-code n'est pas une{" "}
              <span className="gradient-text">limitation</span>
              <br />
              c'est un levier stratégique
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Connectez vos applications, automatisez vos processus et créez des
              agents IA sans écrire une ligne de code — 10x plus rapide, 10x
              moins cher.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/catalogue"
                className="btn-primary inline-flex items-center gap-2"
              >
                Voir les offres
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="btn-outline inline-flex items-center gap-2"
              >
                Diagnostic gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-emerald-500">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is no-code */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-emerald-500 font-semibold text-sm uppercase tracking-wider">
                Qu'est-ce que le no-code ?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Automatisez sans savoir coder
              </h2>
              <p className="text-gray-400 mb-4">
                Le no-code, c'est la possibilité de créer des applications, des
                workflows et des automatisations sans écrire une seule ligne de
                code. À la place, on utilise des interfaces visuelles, des
                glisser-déposer et des connecteurs préfabriqués.
              </p>
              <p className="text-gray-400 mb-6">
                Avec des outils comme{" "}
                <span className="text-emerald-500 font-semibold">Make.com</span>{" "}
                et <span className="text-emerald-500 font-semibold">n8n</span>,
                je peux connecter vos applications (CRM, email, Google Sheets,
                Slack, etc.) et créer des chaînes d'automatisation complexes en
                quelques jours.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/5 rounded-lg text-emerald-400 font-medium">
                  Make.com
                </span>
                <span className="px-4 py-2 bg-white/5 rounded-lg text-emerald-400 font-medium">
                  n8n
                </span>
                <span className="px-4 py-2 bg-white/5 rounded-lg text-emerald-400 font-medium">
                  OpenAI
                </span>
                <span className="px-4 py-2 bg-white/5 rounded-lg text-emerald-400 font-medium">
                  Zapier
                </span>
              </div>
            </div>

            <div className="card-premium p-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Avant l'automatisation
                    </h3>
                    <p className="text-gray-400 text-sm">
                      8h/semaine de copier-coller entre 5 outils différents
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                    <ArrowRight className="h-3 w-3 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Après l'automatisation
                    </h3>
                    <p className="text-gray-400 text-sm">
                      30 min/semaine — tout est synchronisé automatiquement
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <div className="text-3xl font-bold text-emerald-500">
                    -94%
                  </div>
                  <p className="text-sm text-gray-400">
                    de temps passé sur les tâches administratives
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-emerald-500 font-semibold text-sm uppercase tracking-wider">
              Pourquoi passer au no-code
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Les avantages pour votre entreprise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card-premium p-6 text-center">
                <div className="h-12 w-12 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-6 w-6 text-emerald-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-emerald-500 font-semibold text-sm uppercase tracking-wider">
              Cas d'usage
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Ce qu'on peut automatiser
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Des exemples concrets d'automatisations que je réalise pour mes
              clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="card-premium p-6">
                <useCase.icon className="h-8 w-8 text-emerald-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {useCase.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {useCase.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {useCase.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-2 py-1 bg-white/5 rounded-full text-gray-400"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Make vs n8n */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-emerald-500 font-semibold text-sm uppercase tracking-wider">
              Nos outils
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Make.com vs n8n
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Je maîtrise les deux plateformes et choisis la meilleure pour
              chaque projet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-premium p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <span className="text-emerald-500 font-bold text-xl">M</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Make.com</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  Interface très visuelle, idéal pour les débutants
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  Large bibliothèque de connecteurs (1500+ apps)
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  Parfait pour le marketing, CRM, notifications
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  Pricing basé sur les opérations
                </li>
              </ul>
            </div>

            <div className="card-premium p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <span className="text-emerald-500 font-bold text-xl">n</span>
                </div>
                <h3 className="text-2xl font-bold text-white">n8n</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  Open-source, auto-hébergeable
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  Idéal pour les données sensibles et le scraping
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  Parfait pour les agents IA et webhooks avancés
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  Pricing à la demande ou auto-hébergé gratuit
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dead angles */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-emerald-500 font-semibold text-sm uppercase tracking-wider">
              Nos spécialités
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Les angles morts du marché
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Des services rares, à forte valeur ajoutée, avec quasi zéro
              concurrence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deadAngles.map((angle) => (
              <div
                key={angle.title}
                className="card-premium p-6 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0">
                  <span className="inline-block px-2 py-1 bg-emerald-500/20 text-emerald-500 text-xs rounded-bl-lg">
                    {angle.tag}
                  </span>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {angle.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {angle.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-500 font-semibold">
                      {angle.price}
                    </span>
                    <Link
                      href="/contact"
                      className="text-white hover:text-emerald-400 text-sm transition-colors"
                    >
                      → Me contacter
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-premium p-12 text-center bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-emerald-500/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Prêt à passer au no-code ?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Obtenez un diagnostic gratuit de vos processus et découvrez les
              opportunités d'automatisation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                Commencer mon diagnostic
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/catalogue"
                className="btn-outline inline-flex items-center gap-2"
              >
                Explorer le catalogue
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
