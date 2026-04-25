// app/(marketing)/about/page.tsx
"use client";

import Link from "next/link";
import {
  Shield,
  Zap,
  Users,
  Target,
  Award,
  Clock,
  TrendingUp,
  Globe,
  CheckCircle,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
  Code,
  Sparkles,
  Rocket,
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Expertise certifiée",
    description:
      "Spécialiste Make.com et n8n avec des centaines d'heures d'expérience sur des projets variés.",
  },
  {
    icon: Zap,
    title: "Innovation constante",
    description:
      "Je suis les dernières avancées en no-code et IA pour vous offrir les meilleures solutions.",
  },
  {
    icon: Target,
    title: "Résultats mesurables",
    description:
      "Chaque automation est conçue pour avoir un ROI clair et démontrable en moins de 30 jours.",
  },
  {
    icon: Users,
    title: "Accompagnement humain",
    description:
      "Pas de boîte noire — je vous forme et reste disponible après la livraison.",
  },
];

const stats = [
  { value: "60+", label: "Offres disponibles", icon: Award },
  { value: "50+", label: "Clients accompagnés", icon: Users },
  { value: "15h", label: "Gain de temps moyen/semaine", icon: Clock },
  { value: "100%", label: "Satisfaction client", icon: TrendingUp },
];

const process = [
  {
    step: "01",
    title: "Audit & Découverte",
    description:
      "On analyse vos processus actuels et on identifie les gains potentiels.",
  },
  {
    step: "02",
    title: "Proposition sur mesure",
    description:
      "Je vous présente une solution adaptée avec devis transparent.",
  },
  {
    step: "03",
    title: "Construction & Tests",
    description:
      "Je développe et teste les workflows dans votre environnement.",
  },
  {
    step: "04",
    title: "Livraison & Formation",
    description:
      "Je vous forme et vous livre toute la documentation nécessaire.",
  },
];

const technologies = [
  "Make.com",
  "n8n",
  "OpenAI",
  "HubSpot",
  "Salesforce",
  "Shopify",
  "Slack",
  "Google Sheets",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
              <Users className="h-4 w-4 text-emerald-500" />
              <span className="text-sm text-gray-300">Qui sommes-nous</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Votre expert en{" "}
              <span className="gradient-text">automatisation no-code</span>
            </h1>

            <p className="text-xl text-gray-400">
              Basé à Madagascar, je vous aide à automatiser vos processus métier
              avec Make.com et n8n, pour que vous puissiez vous concentrer sur
              ce qui compte vraiment : votre cœur de métier.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="card-premium p-6 text-center">
                <stat.icon className="h-8 w-8 text-emerald-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-emerald-500 font-semibold text-sm uppercase tracking-wider">
                Notre mission
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Démocratiser l'automatisation pour tous
              </h2>
              <p className="text-gray-400 mb-4">
                Je crois que la technologie doit servir votre business, pas
                l'inverse. Avec les bons outils no-code (Make, n8n, IA), on peut
                automatiser 80% des tâches répétitives en quelques jours.
              </p>
              <p className="text-gray-400 mb-6">
                Ma mission : vous aider à identifier ces leviers et à les mettre
                en place simplement, sans dépendre d'une équipe technique.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span className="text-gray-300">
                    Expertise Make.com & n8n certifiée
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span className="text-gray-300">
                    Solutions sur mesure, pas de templates
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span className="text-gray-300">
                    Support et formation inclus
                  </span>
                </div>
              </div>
            </div>

            <div className="card-premium p-8">
              <div className="text-center">
                <Globe className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-white">
                  Pourquoi Madagascar ?
                </h3>
                <p className="text-gray-400 mb-4">
                  Excellente maîtrise du français, fuseau horaire compatible
                  Europe/Afrique (UTC+3), et des tarifs compétitifs pour un
                  service de qualité premium.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300">
                    🇫🇷 Français courant
                  </span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300">
                    ⏰ UTC+3
                  </span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300">
                    💎 Rapport qualité/prix
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-emerald-500 font-semibold text-sm uppercase tracking-wider">
              Nos valeurs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Ce qui me guide au quotidien
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card-premium p-6 text-center">
                <div className="h-12 w-12 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-emerald-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-emerald-500 font-semibold text-sm uppercase tracking-wider">
              Comment je travaille
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Un processus simple et transparent
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step) => (
              <div key={step.step} className="card-premium p-6 relative">
                <div className="text-5xl font-bold text-white/5 absolute top-4 right-4">
                  {step.step}
                </div>
                <div className="relative z-10">
                  <div className="h-12 w-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
                    <span className="text-emerald-500 font-bold text-lg">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-emerald-500 font-semibold text-sm uppercase tracking-wider">
              Technologies maîtrisées
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Les outils que j'utilise
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white/5 rounded-full text-gray-300 hover:bg-emerald-500/20 hover:text-emerald-400 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-premium p-12 text-center bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-emerald-500/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Prêt à automatiser votre entreprise ?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Discutons de vos besoins et voyons comment l'automatisation peut
              transformer votre quotidien.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                Démarrer maintenant
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
