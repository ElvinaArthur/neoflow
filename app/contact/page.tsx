// app/contact/page.tsx
"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    entreprise: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Simulation d'envoi (à remplacer par ton API route plus tard)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        nom: "",
        email: "",
        telephone: "",
        entreprise: "",
        message: "",
      });

      // Reset le message de succès après 5 secondes
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "contact@neoflow.com",
      href: "mailto:contact@neoflow.com",
      color: "emerald",
    },
    {
      icon: Phone,
      title: "Téléphone",
      details: "+261 34 123 4567",
      href: "tel:+261341234567",
      color: "blue",
    },
    {
      icon: MapPin,
      title: "Localisation",
      details: "Antananarivo, Madagascar",
      href: null,
      color: "purple",
    },
    {
      icon: Clock,
      title: "Disponibilités",
      details: "Lun-Ven, 9h - 18h (UTC+3)",
      href: null,
      color: "orange",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
              <Mail className="h-4 w-4 text-emerald-500" />
              <span className="text-sm text-gray-300">Contactez-nous</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Parlons de votre{" "}
              <span className="gradient-text">automatisation</span>
            </h1>

            <p className="text-xl text-gray-400">
              Une question ? Un projet ? Remplissez le formulaire et je vous
              réponds sous 24h.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <div className="card-premium p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">
                Envoyez-moi un message
              </h2>

              {isSubmitted ? (
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-6 w-6 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Message envoyé !
                  </h3>
                  <p className="text-gray-400">
                    Merci pour votre message. Je vous réponds dans les plus
                    brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="nom"
                        required
                        value={formData.nom}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
                        placeholder="Jean Dupont"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
                        placeholder="jean@entreprise.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
                        placeholder="+261 34 123 4567"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Entreprise
                      </label>
                      <input
                        type="text"
                        name="entreprise"
                        value={formData.entreprise}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                      placeholder="Décrivez votre projet ou votre besoin..."
                    />
                  </div>

                  {error && (
                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-center gap-3">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                      <p className="text-red-400 text-sm">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Envoyer le message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    En soumettant ce formulaire, j'accepte d'être contacté. Vos
                    données ne seront pas partagées.
                  </p>
                </form>
              )}
            </div>

            {/* Informations de contact */}
            <div>
              <div className="card-premium p-6 md:p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">
                  Informations de contact
                </h2>

                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-5 w-5 text-emerald-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">
                          {info.title}
                        </h3>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-gray-400 hover:text-emerald-400 transition-colors"
                          >
                            {info.details}
                          </a>
                        ) : (
                          <p className="text-gray-400">{info.details}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Diagnostic gratuit */}
              <div className="card-premium p-6 md:p-8 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-emerald-500/20">
                <div className="text-center">
                  <div className="h-14 w-14 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-7 w-7 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Diagnostic gratuit</h3>
                  <p className="text-gray-400 mb-4">
                    Offrez-vous 30 minutes d'audit de vos processus pour
                    identifier les gains potentiels.
                  </p>
                  <Link
                    href="/catalogue"
                    className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 font-medium"
                  >
                    En savoir plus
                    <span className="text-lg">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-subtitle">Questions fréquentes</span>
            <h2 className="section-title">Vous avez des questions ?</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Les réponses aux questions les plus courantes sur mes services
              d'automatisation.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Quel est le délai moyen pour une automatisation ?",
                a: "En moyenne, une automatisation simple prend 3 à 5 jours. Pour des projets plus complexes, comptez 1 à 2 semaines.",
              },
              {
                q: "Comment se passe la collaboration ?",
                a: "1. Découverte gratuite de votre besoin → 2. Proposition et devis → 3. Construction → 4. Livraison + formation → 5. Support 14 jours",
              },
              {
                q: "Quels outils utilisez-vous ?",
                a: "Je suis spécialisé sur Make.com et n8n, mais je peux aussi intégrer Zapier, Pabbly, et toutes les APIs REST.",
              },
              {
                q: "Que faire si un workflow ne fonctionne plus ?",
                a: "Chaque projet inclut 14 jours de support. Au-delà, je propose un retainer de maintenance à partir de 200€/mois.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="card-premium p-6 hover:border-emerald-500/30 transition-all"
              >
                <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
