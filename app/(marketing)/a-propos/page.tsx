"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Target,
  Eye,
  GraduationCap,
  Briefcase,
  LifeBuoy,
  Award,
  Users,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const values = [
  {
    icon: Target,
    title: "Disponibilité",
    desc: "Nous sommes disponibles pour accompagner nos clients à chaque étape de leurs projets logistiques.",
    color: "text-rouge border-rouge",
    bg: "bg-rouge/10",
  },
  {
    icon: TrendingUp,
    title: "Efficacité",
    desc: "Des solutions opérationnelles orientées résultats, mesurables et adaptées à la réalité guinéenne.",
    color: "text-[#F5A623] border-[#F5A623]",
    bg: "bg-[#F5A623]/10",
  },
  {
    icon: Award,
    title: "Flexibilité",
    desc: "Une capacité d'adaptation aux contraintes de chaque secteur : minier, commercial ou humanitaire.",
    color: "text-vert border-vert",
    bg: "bg-vert/10",
  },
];

const milestones = [
  { year: "2021", label: "Création du cabinet à Conakry" },
  { year: "2022", label: "Lancement des premières formations certifiantes" },
  { year: "2023", label: "+200 apprenants formés et 15 audits réalisés" },
  { year: "2024", label: "Partenariats institutionnels et régionaux" },
  { year: "2025+", label: "Leader de la logistique & formation en Guinée" },
];

const teamData = [
  {
    name: "Ibrahima Keita",
    role: "Directeur Associé & Expert Transport",
    initials: "IK",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Aissatou Diallo",
    role: "Formatrice Gestion de Stock & Logistique",
    initials: "AD",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Mariam Sow",
    role: "Consultante Supply Chain",
    initials: "MS",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Alseny Diallo",
    role: "Expert Transit & Réglementation Douanière",
    initials: "ALD",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="bg-primary py-24 relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent)] opacity-40" />
        {/* Tricolor strip top */}
        <div className="absolute top-0 left-0 w-full h-[4px] flex">
          <div className="w-1/3 h-full bg-[#CE1126]" />
          <div className="w-1/3 h-full bg-[#FCD116]" />
          <div className="w-1/3 h-full bg-[#009460]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            {/* Breadcrumb */}
            <div className="flex items-center text-[10px] font-bold uppercase tracking-widest text-white/60 mb-5 gap-2">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight className="w-3.5 h-3.5 text-secondary" />
              <span className="text-secondary">À Propos</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-black text-white mb-4 uppercase tracking-tight">
              À Propos du Cabinet
            </h1>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#CE1126]" />
              <span className="w-2 h-2 rounded-full bg-[#FCD116]" />
              <span className="w-2 h-2 rounded-full bg-[#009460]" />
              <span className="text-xs uppercase font-bold tracking-widest text-white/80 ml-1">
                Disponibilité · Efficacité · Flexibilité
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-2xl font-sans">
              Cabinet de conseil, d'étude et de formation spécialisé en logistique et transport à Conakry, Guinée. 
              Depuis 2021, nous accompagnons entreprises, institutions et professionnels du secteur.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== PRESENTATION ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <span className="inline-flex items-center text-primary text-[10px] font-black uppercase tracking-widest mb-3">
                <span className="w-6 h-[2px] bg-primary mr-2" />
                Qui sommes-nous
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-black text-gray-900 leading-tight uppercase mb-6">
                Cabinet Guilogtrans
              </h2>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed font-sans">
                <p>
                  <strong className="text-primary">Cabinet Guilogtrans</strong> est un cabinet de conseil, d'étude et de formation 
                  spécialisé dans les domaines de la <strong>logistique</strong>, du <strong>transport</strong>, de la 
                  <strong> supply chain</strong>, du <strong>transit</strong> et de la <strong>douane</strong>.
                </p>
                <p>
                  Basé à <strong>Conakry, Guinée</strong>, nous intervenons auprès des entreprises de toutes tailles, 
                  des institutions publiques et des organisations humanitaires pour optimiser leurs flux physiques 
                  et renforcer les compétences de leurs équipes.
                </p>
                <p>
                  Notre approche combine l'expertise terrain guinéenne avec les meilleures pratiques internationales 
                  en matière de gestion logistique et d'ingénierie des transports.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  "Formations 100% pratiques",
                  "Experts terrain certifiés",
                  "Audits et diagnostics",
                  "Accompagnement post-formation",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs font-bold text-gray-700 uppercase tracking-wider">
                    <CheckCircle2 className="w-3.5 h-3.5 text-vert flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stats panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="bg-primary text-white p-10 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[3px] flex">
                <div className="w-1/3 h-full bg-[#CE1126]" />
                <div className="w-1/3 h-full bg-[#FCD116]" />
                <div className="w-1/3 h-full bg-[#009460]" />
              </div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/60 mb-8">Notre impact en chiffres</h3>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { value: "2021", label: "Année de création" },
                  { value: "500+", label: "Apprenants formés" },
                  { value: "50+", label: "Formations dispensées" },
                  { value: "95%", label: "Taux de satisfaction" },
                ].map(({ value, label }) => (
                  <div key={label} className="border-l-2 border-accent pl-4">
                    <div className="text-3xl font-heading font-black text-[#FCD116]">{value}</div>
                    <div className="text-[10px] text-white/60 font-bold uppercase tracking-widest mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center text-primary text-[10px] font-black uppercase tracking-widest mb-3">
              <span className="w-6 h-[2px] bg-primary mr-2" />
              Notre Raison d'Être
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-black text-gray-900 uppercase">Mission & Vision</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 border-t-4 border-t-rouge p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-rouge/10 flex items-center justify-center mb-5 text-rouge">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-heading font-black text-primary uppercase mb-3">Notre Mission</h3>
              <p className="text-gray-600 leading-relaxed text-sm font-sans">
                Fournir des formations certifiantes et des conseils stratégiques de haute qualité qui permettent 
                aux professionnels guinéens et aux organisations d'optimiser leurs performances logistiques, 
                de maîtriser leur chaîne d'approvisionnement et de sécuriser leurs opérations de transport.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-white border border-gray-200 border-t-4 border-t-vert p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-vert/10 flex items-center justify-center mb-5 text-vert">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-heading font-black text-primary uppercase mb-3">Notre Vision</h3>
              <p className="text-gray-600 leading-relaxed text-sm font-sans">
                Devenir le cabinet de référence en logistique et transport en République de Guinée et dans 
                la sous-région ouest-africaine, reconnu pour l'excellence de nos formations, la pertinence 
                de nos audits et notre impact positif sur la compétitivité économique locale.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== VALEURS ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center text-primary text-[10px] font-black uppercase tracking-widest mb-3">
              <span className="w-6 h-[2px] bg-primary mr-2" />
              Ce qui nous guide
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-black text-gray-900 uppercase">Nos Valeurs</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, desc, color, bg }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-surface p-8 border border-gray-100 hover:shadow-md transition-all duration-300 text-center"
              >
                <div className={`w-14 h-14 ${bg} flex items-center justify-center mx-auto mb-5 ${color}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-heading font-black text-primary uppercase mb-3">{title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed font-sans">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HISTORIQUE ===== */}
      <section className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center text-primary text-[10px] font-black uppercase tracking-widest mb-3">
              <span className="w-6 h-[2px] bg-primary mr-2" />
              Notre Parcours
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-black text-gray-900 uppercase">Notre Histoire</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gray-200" />
            <div className="space-y-8">
              {milestones.map(({ year, label }, i) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 pl-6"
                >
                  <div className="w-5 h-5 rounded-full bg-primary border-4 border-white shadow flex-shrink-0 relative z-10" />
                  <div className="flex items-center gap-4 bg-white border border-gray-200 p-4 flex-1 hover:border-primary transition-colors">
                    <span className="text-lg font-heading font-black text-accent flex-shrink-0">{year}</span>
                    <span className="text-sm font-bold text-gray-700">{label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== EQUIPE ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center text-primary text-[10px] font-black uppercase tracking-widest mb-3">
              <span className="w-6 h-[2px] bg-primary mr-2" />
              Notre Équipe
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-black text-gray-900 uppercase">
              Des experts à votre service
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-5">
                  <div
                    className="w-36 h-36 p-[3px] shadow-md"
                    style={{ background: "linear-gradient(135deg, #CE1126 0%, #FCD116 50%, #009460 100%)" }}
                  >
                    <div className="w-full h-full overflow-hidden bg-white">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-sm font-heading font-black text-primary leading-tight mb-1">{member.name}</h3>
                <p className="text-[10px] text-gray-500 font-medium max-w-[140px] leading-relaxed uppercase tracking-wide">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-heading font-black uppercase mb-4">
            Prêt à collaborer avec nous ?
          </h2>
          <p className="text-white/70 text-xs font-sans leading-relaxed mb-8 max-w-lg mx-auto">
            Que ce soit pour une formation, un audit ou un conseil stratégique, notre équipe est disponible 
            pour vous accompagner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-rouge hover:bg-white hover:text-primary text-white font-sans font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Nous contacter
            </Link>
            <Link
              href="/formations"
              className="inline-flex items-center justify-center px-6 py-3.5 border-2 border-white hover:bg-white hover:text-primary text-white font-sans font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Voir les formations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
