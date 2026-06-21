"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Briefcase,
  Layers,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Route,
  Package,
  Truck,
  ShieldCheck,
  ClipboardList,
} from "lucide-react";

const services = [
  {
    id: "conseil",
    icon: Briefcase,
    title: "Conseil Stratégique",
    subtitle: "Optimisation & Performance logistique",
    color: "accent",
    borderColor: "border-t-[var(--color-accent)]",
    iconBg: "bg-[var(--color-primary)]",
    iconColor: "text-white",
    badgeColor: "bg-[var(--color-accent)] text-white",
    description:
      "Notre équipe d'experts accompagne vos équipes dans l'optimisation complète de votre chaîne logistique. Nous analysons vos flux physiques, diagnostiquons vos points de blocage et proposons des solutions mesurables adaptées à la réalité guinéenne.",
    prestations: [
      { icon: Route, text: "Diagnostic de la chaîne logistique" },
      { icon: BarChart3, text: "Planification et optimisation des routes" },
      { icon: Package, text: "Réorganisation entrepôt et flux internes" },
      { icon: ClipboardList, text: "Stratégie d'approvisionnement régionale" },
    ],
    deliverables: [
      "Rapport de diagnostic détaillé",
      "Plan d'action priorisé",
      "Indicateurs de performance (KPI)",
      "Accompagnement à la mise en œuvre",
    ],
  },
  {
    id: "etudes",
    icon: Layers,
    title: "Études & Audits",
    subtitle: "Diagnostics chiffrés & Recommandations",
    color: "accent",
    borderColor: "border-t-[var(--color-accent)]",
    iconBg: "bg-[var(--color-primary)]",
    iconColor: "text-white",
    badgeColor: "bg-[var(--color-accent)] text-white",
    description:
      "Nous réalisons des études et audits approfondis de vos processus logistiques et de transport. De l'analyse des coûts opérationnels à la cartographie complète de vos flux, nos diagnostics vous fournissent des données précises pour éclairer vos décisions stratégiques.",
    prestations: [
      { icon: BarChart3, text: "Audit de la chaîne d'approvisionnement" },
      { icon: Truck, text: "Étude de faisabilité transport" },
      { icon: ClipboardList, text: "Analyse des coûts opérationnels" },
      { icon: ShieldCheck, text: "Évaluation des risques logistiques" },
    ],
    deliverables: [
      "Rapport d'audit complet",
      "Cartographie des processus",
      "Benchmark sectoriel",
      "Recommandations opérationnelles",
    ],
  },
  {
    id: "formation",
    icon: GraduationCap,
    title: "Formation Professionnelle",
    subtitle: "Montée en compétences & Certification",
    color: "accent",
    borderColor: "border-t-[var(--color-accent)]",
    iconBg: "bg-[var(--color-primary)]",
    iconColor: "text-white",
    badgeColor: "bg-[var(--color-accent)] text-white",
    description:
      "Nos programmes de formation sont conçus par des praticiens du terrain pour répondre aux besoins réels des opérateurs guinéens. 100% pratiques, animés par des experts certifiés, ils couvrent l'ensemble des métiers de la logistique, du transport et du commerce international.",
    prestations: [
      { icon: Package, text: "Gestion des stocks et approvisionnement" },
      { icon: Truck, text: "Optimisation du transport routier" },
      { icon: ShieldCheck, text: "Réglementation douanière & transit" },
      { icon: Route, text: "Management de la Supply Chain" },
    ],
    deliverables: [
      "Attestation de formation certifiée",
      "Supports pédagogiques complets",
      "Cas pratiques sectoriels",
      "Suivi post-formation",
    ],
  },
];

const processSteps = [
  { num: "01", title: "Prise de contact", desc: "Échange initial pour comprendre vos besoins et définir le périmètre d'intervention." },
  { num: "02", title: "Diagnostic", desc: "Analyse de votre situation actuelle, identification des leviers d'amélioration." },
  { num: "03", title: "Proposition", desc: "Remise d'une proposition détaillée avec planning, livrables et budget." },
  { num: "04", title: "Mise en œuvre", desc: "Déploiement de la solution avec suivi régulier et ajustements." },
];

export default function ServicesPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative bg-[var(--color-primary)] pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="flex items-center text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-5 gap-2">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight className="w-4 h-4" />
              <span>Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Nos Domaines d'Expertise
            </h1>
            <div className="w-20 h-1 bg-[var(--color-accent)] mb-8" />
            <p className="text-white/70 text-[15px] leading-relaxed max-w-2xl font-sans">
              Trois piliers d'expertise au service de l'efficacité logistique en Guinée. 
              Des solutions concrètes, mesurables et adaptées à votre secteur d'activité.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== SERVICES DETAIL ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map(({ id, icon: Icon, title, subtitle, borderColor, iconBg, iconColor, badgeColor, description, prestations, deliverables }, index) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid md:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? "md:[direction:rtl]" : ""}`}
              >
                {/* Left: description */}
                <div className={index % 2 === 1 ? "[direction:ltr]" : ""}>
                  <div className={`w-14 h-14 ${iconBg} flex items-center justify-center mb-6 ${iconColor}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className={`inline-block text-[9px] font-bold px-2.5 py-1 uppercase tracking-widest mb-3 ${badgeColor}`}>
                    {subtitle}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-heading font-black text-primary uppercase mb-5">
                    {title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed font-sans mb-8">
                    {description}
                  </p>
                  <div className="space-y-3">
                    {prestations.map(({ icon: PIcon, text }) => (
                      <div key={text} className="flex items-center gap-3 text-sm font-bold text-gray-700">
                        <PIcon className={`w-4 h-4 flex-shrink-0 ${iconColor}`} />
                        {text}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors bg-[var(--color-primary)] text-white hover:bg-[var(--color-accent)]"
                    >
                      Demander un devis
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Right: livrables */}
                <div className={`bg-surface border border-gray-200 border-t-4 ${borderColor} p-8 ${index % 2 === 1 ? "[direction:ltr]" : ""}`}>
                  <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-6">
                    Ce que vous recevez
                  </h3>
                  <ul className="space-y-4">
                    {deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-gray-700 font-sans">
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${iconColor}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 border-t border-gray-200 pt-6">
                    <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-1">Secteurs couverts</p>
                    <p className="text-xs text-gray-600 font-sans leading-relaxed">
                      Entreprises commerciales, industries minières, organisations humanitaires, 
                      PME import/export, opérateurs de transport routier
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NOTRE PROCESSUS ===== */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm text-gray-500 font-medium tracking-wide mb-3 block">Notre Méthodologie</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[var(--color-primary)] mb-6">
              Notre Processus d'Intervention
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="w-16 h-[1.5px] bg-[var(--color-accent)]" />
              <Truck className="w-6 h-6 text-[var(--color-accent)]" strokeWidth={1.5} />
              <div className="w-16 h-[1.5px] bg-[var(--color-accent)]" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {processSteps.map(({ num, title, desc }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-white border border-gray-200 p-8 text-center hover:border-primary hover:shadow-md transition-all duration-300"
              >
                <div className="text-5xl font-heading font-black text-gray-100 mb-3 leading-none">{num}</div>
                <h3 className="text-sm font-heading font-black text-primary uppercase mb-3">{title}</h3>
                <p className="text-xs text-gray-600 font-sans leading-relaxed">{desc}</p>
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 z-10">
                    <ArrowRight className="w-5 h-5 text-accent" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent)]" />
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <span className="inline-flex items-center text-accent text-[10px] font-black uppercase tracking-widest mb-4">
            Passez à l'action
          </span>
          <h2 className="text-2xl md:text-4xl font-heading font-black mb-4 uppercase tracking-tight">
            Parlons de votre projet
          </h2>
          <p className="text-white/70 text-xs leading-relaxed max-w-lg mx-auto mb-8 font-sans">
            Quel que soit votre besoin — optimisation de flux, audit logistique ou formation de vos équipes — 
            notre équipe vous répond sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[var(--color-accent)] hover:bg-[#e0b000] text-white font-sans font-bold text-[13px] uppercase tracking-wider transition-colors"
            >
              Demander un devis
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/formations"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-white hover:bg-white hover:text-[var(--color-primary)] text-white font-sans font-bold text-[13px] uppercase tracking-wider transition-colors"
            >
              Voir les formations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
