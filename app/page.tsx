// app/page.tsx
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Clock,
  Shield,
  Bot,
  Workflow,
  Database,
  Star,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Workflow,
    title: "Workflows sur mesure",
    description:
      "Des automatisations adaptées à vos processus uniques, pas des templates génériques.",
  },
  {
    icon: Bot,
    title: "Agents IA intelligents",
    description:
      "Chatbots, scoring, RAG - des agents qui apprennent et s'améliorent.",
  },
  {
    icon: Clock,
    title: "Gain de temps immédiat",
    description: "Libérez 5 à 15 heures par semaine dès la première semaine.",
  },
  {
    icon: TrendingUp,
    title: "ROI mesurable",
    description:
      "Chaque automation est conçue pour un retour sur investissement clair.",
  },
];

const services = [
  {
    title: "Automatisation CRM",
    description: "Connexion HubSpot, Salesforce ou GHL à vos outils métier.",
    price: "dès 300€",
  },
  {
    title: "Agents IA Support",
    description: "Chatbot intelligent, triage tickets et escalade automatique.",
    price: "dès 500€",
  },
  {
    title: "Lead Generation Auto",
    description: "Scraping, enrichissement et outreach automatisé.",
    price: "dès 350€",
  },
  {
    title: "Reporting Automatique",
    description: "Agrégation multi-sources et envoi automatique.",
    price: "dès 250€",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section - Style Markivo */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
              <Star className="h-4 w-4 text-emerald-500 fill-emerald-500" />
              <span className="text-sm text-gray-300">
                Expert Make.com & n8n
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Smart Automation{" "}
              <span className="gradient-text">For Your Business</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              Automatisez vos processus métier avec le no-code. Agents IA, CRM
              automation, lead gen — Je transforme votre façon de travailler.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/catalogue"
                className="btn-primary inline-flex items-center gap-2"
              >
                Explorer nos offres
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/no-code-automatisation"
                className="btn-outline inline-flex items-center gap-2"
              >
                En savoir plus
              </Link>
            </div>

            <div className="mt-12 flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-xs font-bold border-2 border-black"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-gray-400">+50 clients satisfaits</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-emerald-500 fill-emerald-500" />
                <Star className="h-4 w-4 text-emerald-500 fill-emerald-500" />
                <Star className="h-4 w-4 text-emerald-500 fill-emerald-500" />
                <Star className="h-4 w-4 text-emerald-500 fill-emerald-500" />
                <Star className="h-4 w-4 text-emerald-500 fill-emerald-500" />
                <span className="text-gray-400 ml-2">4.9 (16 avis)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-subtitle">Pourquoi nous choisir</span>
            <h2 className="section-title">
              Des solutions pensées pour votre croissance
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Je ne vends pas des outils, je transforme vos processus pour vous
              faire gagner du temps et de l'argent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="card-premium p-6">
                <div className="h-12 w-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-subtitle">Nos services exclusifs</span>
            <h2 className="section-title">
              Des automatisations qui transforment votre business
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="card-premium p-8 hover:scale-[1.02] transition-transform"
              >
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-emerald-500 font-semibold">
                    {service.price}
                  </span>
                  <Link
                    href="/catalogue"
                    className="text-white hover:text-emerald-400 transition-colors text-sm font-medium"
                  >
                    En savoir plus →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/catalogue"
              className="text-emerald-500 hover:text-emerald-400 font-medium inline-flex items-center gap-2"
            >
              Voir tous nos services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-premium p-12 text-center bg-gradient-to-br from-emerald-500/5 to-teal-500/5 border border-emerald-500/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à automatiser votre entreprise ?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Discutons de vos besoins et voyons comment l'automatisation peut
              transformer votre quotidien.
            </p>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              Démarrer maintenant
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
