"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Phone,
  Target,
  Eye,
  Award,
  Truck,
  ArrowRight,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Ship,
  Rocket,
  Users,
  Globe,
  Sun,
  LayoutGrid
} from "lucide-react";

const stats = [
  { value: "500+", label: "Apprenants Formés" },
  { value: "50+", label: "Formations Dispensées" },
  { value: "15+", label: "Audits Réalisés" },
  { value: "95%+", label: "Taux de Satisfaction" },
];

const services = [
  { title: "Conseil Stratégique", image: "https://images.unsplash.com/photo-1586528116311-ad8ed7e66a50?q=80&w=800&fit=crop" },
  { title: "Étude & Audit", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&fit=crop" },
  { title: "Formation Professionnelle", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&fit=crop" },
  { title: "Optimisation Supply Chain", image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=800&fit=crop" },
];

const timeline = [
  { year: "2021", title: "Création du Cabinet", desc: "Lancement officiel de GuilogTrans à Conakry pour répondre aux besoins logistiques.", icon: Ship },
  { year: "2022", title: "Lancement Formations", desc: "Début de nos programmes de formation pratiques pour les professionnels.", icon: Rocket },
  { year: "2023", title: "Croissance Majeure", desc: "Plus de 200 apprenants certifiés et de nombreux audits réalisés.", icon: Users },
  { year: "2024", title: "Réseau Stratégique", desc: "Extension de notre réseau avec des institutions et entreprises majeures.", icon: Globe },
  { year: "2025", title: "Leader en Guinée", desc: "Reconnaissance en tant que cabinet de référence dans la sous-région.", icon: Award },
];

const team = [
  {
    name: "Ibrahima Keita",
    role: "Directeur Associé & Expert",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Aissatou Diallo",
    role: "Formatrice Supply Chain",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  },
];

const testimonials = [
  {
    title: "Hautement Efficace",
    text: "L'audit réalisé par GuilogTrans nous a permis de réduire nos coûts de transport de 15% en seulement quelques mois. Une expertise précieuse.",
    name: "Mamadou Sylla",
    role: "Responsable Logistique",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    title: "Service Fiable",
    text: "La formation en gestion des stocks a complètement transformé notre approche. Les méthodes enseignées sont directement applicables.",
    name: "Fatoumata Barry",
    role: "Directrice des Opérations",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    title: "Un Vrai Levier",
    text: "Des experts qui maîtrisent parfaitement les réalités du terrain en Guinée. Un accompagnement sur-mesure et très professionnel.",
    name: "Ousmane Camara",
    role: "Chef d'Entreprise",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  },
  {
    title: "Performances Améliorées",
    text: "Grâce à leurs conseils stratégiques, nous avons pu restructurer entièrement notre chaîne d'approvisionnement avec succès.",
    name: "Aminata Diallo",
    role: "Directrice Supply Chain",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  }
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* =============== HERO =============== */}
      <section className="relative bg-[#0d2d38] pt-32 pb-24 overflow-hidden">
        {/* Airplane Graphic (Right side) */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-80 pointer-events-none transform translate-x-12 -translate-y-4">
          <Image
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&fit=crop&auto=format"
            alt="Airplane flying"
            fill
            priority
            className="object-cover mix-blend-screen mask-image-to-l"
            style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 40%)', maskImage: 'linear-gradient(to right, transparent, black 40%)' }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white leading-tight mb-4 tracking-tight">
              À Propos
            </h1>
            <div className="flex items-center justify-center text-sm text-white/80 font-medium">
              <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Accueil</Link>
              <ChevronRight className="w-4 h-4 mx-2 opacity-60" />
              <span className="text-white">À Propos</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =============== INTRODUCTION & STATS =============== */}
      <section className="relative py-24 bg-[var(--color-primary)] overflow-hidden">
        {/* World Map Background */}
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none flex items-center justify-center">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg" 
            alt="World Map" 
            className="w-full max-w-6xl object-contain"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 max-w-5xl">
            <span className="text-sm text-gray-300 font-medium tracking-wide mb-4 block">Pourquoi Travailler Avec GuilogTrans</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
              Nous Sommes Un Cabinet Leader En <span className="text-[var(--color-accent)] underline decoration-transparent border-b-4 border-[var(--color-accent)] pb-1">Conseil, Étude & Formation</span> Vous Aidant À Atteindre Vos Objectifs <span className="text-[var(--color-accent)] underline decoration-transparent border-b-4 border-[var(--color-accent)] pb-1">Sans Retard Ni Faille.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div>
              <div className="text-5xl md:text-6xl font-black text-white mb-3">500+</div>
              <div className="text-sm font-medium text-gray-300 leading-snug">Apprenants Formés Chaque Année</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-black text-white mb-3">15+</div>
              <div className="text-sm font-medium text-gray-300 leading-snug">Années d'Expérience Cumulée</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-black text-white mb-3">30+</div>
              <div className="text-sm font-medium text-gray-300 leading-snug">Experts & Formateurs Associés</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-black text-white mb-3">50+</div>
              <div className="text-sm font-medium text-gray-300 leading-snug">Projets & Formations Réussis</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-black text-white mb-3">95%+</div>
              <div className="text-sm font-medium text-gray-300 leading-snug">Taux de Satisfaction Client</div>
            </div>
          </div>
        </div>
      </section>

      {/* =============== SERVICES GALLERY =============== */}
      <section className="py-24 bg-[#F2F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm text-gray-600 font-medium tracking-wide mb-3 block">Nos Services</span>
          <h2 className="text-4xl font-heading font-bold text-[#0d2d38] mb-4">
            Services d'Étude, Conseil & Formation
          </h2>
          
          <div className="flex items-center justify-center gap-2 mb-16">
            <div className="w-20 h-[1.5px] bg-[var(--color-accent)]" />
            <Truck className="w-6 h-6 text-[var(--color-accent)]" strokeWidth={1.5} />
          </div>

          <div className="flex justify-between items-center mb-12">
            <button className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center text-gray-600 hover:bg-[#0d2d38] hover:text-white transition-colors hover:border-[#0d2d38]">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 flex-1 mx-6">
              {[
                { title: "Conseil Logistique", image: "https://images.unsplash.com/photo-1586528116311-ad8ed7e66a50?q=80&w=800&fit=crop" },
                { title: "Étude & Audit", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&fit=crop" },
                { title: "Formation Professionnelle", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&fit=crop" },
                { title: "Optimisation Supply Chain", image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=800&fit=crop" }
              ].map((svc, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-6 shadow-sm">
                    <img src={svc.image} alt={svc.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <h3 className="font-bold text-[#0d2d38] text-[15px] group-hover:text-[var(--color-accent)] transition-colors">{svc.title}</h3>
                </div>
              ))}
            </div>
            <button className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center text-gray-600 hover:bg-[#0d2d38] hover:text-white transition-colors hover:border-[#0d2d38]">
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
          
          <div className="mt-8">
            <Link href="/services" className="inline-block bg-[var(--color-accent)] text-white font-semibold text-sm px-8 py-3.5 hover:bg-[#e0b000] transition-colors shadow-sm">
              Voir Tous Nos Services
            </Link>
          </div>
        </div>
      </section>

      {/* =============== BUDGET & LOGISTICS =============== */}
      <section className="py-24 bg-[var(--color-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Image Side */}
            <div className="relative w-full">
              <div className="relative aspect-[4/3] w-full overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1586528116311-ad8ed7e66a50?q=80&w=1200&fit=crop" alt="Cargo" className="w-full h-full object-cover" />
                
                {/* Overlay Box */}
                <div className="absolute bottom-0 left-0 w-[80%] bg-[var(--color-primary)]/90 backdrop-blur-sm p-8">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-[var(--color-accent)] mb-3">
                    Packages De Formation
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Optimisez vos compétences avec nos programmes intensifs et certifiants, adaptés à la réalité du terrain et aux exigences de la Supply Chain.
                  </p>
                </div>
              </div>
              
              {/* Navigation Arrows Below Image */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center text-white hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center text-white hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right Content Side */}
            <div>
              <span className="text-sm text-gray-400 font-medium tracking-wide mb-3 block">Solutions Logistiques</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight mb-6">
                Optimisez Votre Budget<br/>Avec GuilogTrans
              </h2>

              <div className="flex items-center gap-2 mb-8">
                <div className="w-20 h-[1.5px] bg-[var(--color-accent)]" />
                <Truck className="w-6 h-6 text-[var(--color-accent)]" strokeWidth={1.5} />
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-10">
                Notre cabinet s'engage à vous fournir des stratégies logistiques qui maximisent votre efficacité opérationnelle tout en réduisant vos coûts. De la formation de vos équipes à l'audit de vos processus, nous couvrons tous vos besoins.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 mb-12">
                {[
                  "Formations 100% Pratiques",
                  "Experts Terrain Certifiés",
                  "Accompagnement Personnalisé",
                  "Diagnostics Et Audits Précis",
                  "Optimisation Supply Chain",
                  "Stratégies Sur Mesure"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-sm rotate-45 bg-[var(--color-accent)] mt-1.5 flex-shrink-0" />
                    <span className="text-sm text-gray-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                <Link href="/contact" className="inline-block bg-[var(--color-accent)] text-white font-semibold text-sm px-8 py-3.5 hover:bg-[#e0b000] transition-colors shadow-sm">
                  Contactez-Nous
                </Link>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white flex-shrink-0">
                    <Phone className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium tracking-wide mb-0.5">Appelez-Nous</div>
                    <div className="font-bold text-white text-lg">+224 620 00 00 00</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =============== TIMELINE =============== */}
      <section className="py-24 bg-[var(--color-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm text-gray-400 font-medium tracking-wide mb-3 block">Notre Historique</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Relevons Ensemble Les Défis<br/>Logistiques
          </h2>

          <div className="flex items-center justify-center gap-2 mb-20">
            <div className="w-20 h-[1.5px] bg-[var(--color-accent)]" />
            <Truck className="w-6 h-6 text-[var(--color-accent)]" strokeWidth={1.5} />
          </div>

          <div className="relative mt-16 text-left">
            {/* Horizontal Line */}
            <div className="absolute top-[9px] left-0 w-full border-t border-dashed border-gray-600" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
              {timeline.map((item, i) => {
                const Icon = item.icon;
                const isFirst = i === 0;
                
                return (
                  <div key={i} className="relative pt-0">
                    {/* Dot */}
                    <div className="w-[18px] h-[18px] rounded-full bg-[var(--color-accent)] relative z-10 shadow-[0_0_0_4px_var(--color-primary)] ml-8 md:ml-[3.25rem]" />
                    
                    <div className="mt-8 flex gap-4 px-2">
                      {/* Left side: Vertical Year & Line */}
                      <div className="w-16 flex-shrink-0 flex justify-end">
                        <div className="flex flex-col items-center">
                          <div className="w-[1px] h-[40px] border-l border-dashed border-[var(--color-accent)] -mt-[32px] mb-4" />
                          <div 
                            className={`text-4xl md:text-5xl font-black tracking-widest ${isFirst ? 'text-[var(--color-accent)]' : 'text-transparent'}`}
                            style={{ 
                              writingMode: 'vertical-rl', 
                              transform: 'rotate(180deg)',
                              ...(!isFirst ? { WebkitTextStroke: '1px rgba(255,255,255,0.4)' } : {})
                            }}
                          >
                            {item.year}
                          </div>
                        </div>
                      </div>

                      {/* Right side: Icon, Title, Text */}
                      <div className="flex-1 mt-6">
                        <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center mb-5 shadow-lg">
                          <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                        </div>
                        <h3 className="font-bold text-white text-[15px] mb-3 leading-tight">{item.title}</h3>
                        <p className="text-[13px] text-gray-400 leading-relaxed pr-2">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-24 text-[13px] text-gray-400 font-medium">
            Rejoignez notre réseau de plus de 20,000 acteurs du secteur. <Link href="/contact" className="text-[var(--color-accent)] font-bold hover:underline ml-1">Rejoignez-nous !</Link>
          </div>
        </div>
      </section>

      {/* =============== TEAM =============== */}
      <section className="py-24 bg-[#F2F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-sm text-gray-500 font-medium tracking-wide mb-3 block">Nos Experts Associés</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-[var(--color-primary)] mb-6">
                Découvrez Notre Équipe d'Élite
              </h2>
              <div className="flex items-center gap-2">
                <div className="w-20 h-[1.5px] bg-[var(--color-accent)]" />
                <Truck className="w-6 h-6 text-[var(--color-accent)]" strokeWidth={1.5} />
              </div>
            </div>
            <Link href="/contact" className="inline-block bg-[var(--color-accent)] text-white font-semibold text-sm px-8 py-3.5 hover:bg-[#e0b000] transition-colors shadow-sm">
              Voir Toute L'équipe
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {team.map((member, i) => (
              <div key={i} className="flex flex-col sm:flex-row bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                {/* Photo */}
                <div className="sm:w-[45%] aspect-square sm:aspect-auto relative">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                {/* Info */}
                <div className="p-8 sm:p-10 flex-1 flex flex-col justify-center">
                  <span className="text-sm text-[var(--color-secondary)] font-medium mb-2">{member.role}</span>
                  <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">{member.name}</h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed mb-8">
                    Expert en logistique et transport, dédié à la réussite de vos projets d'optimisation et de formation au sein de GuilogTrans.
                  </p>
                  
                  <Link href="/contact" className="flex items-center gap-3 group w-max">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white transition-transform group-hover:scale-110">
                      <ArrowRight className="w-4 h-4 transform rotate-45" />
                    </div>
                    <span className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">Plus De Détails</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============== TESTIMONIALS =============== */}
      <section className="py-24 bg-[var(--color-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-sm text-gray-400 font-medium tracking-wide mb-3 block">Avis & Retours</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                Ce Que Disent Nos Clients
              </h2>
              <div className="flex items-center gap-2">
                <div className="w-20 h-[1.5px] bg-[var(--color-accent)]" />
                <Truck className="w-6 h-6 text-[var(--color-accent)]" strokeWidth={1.5} />
              </div>
            </div>
            
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-gray-500 flex items-center justify-center text-white hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 rounded-full border border-gray-500 flex items-center justify-center text-white hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {testimonials.map((t, i) => {
              const isFilled = i % 2 === 0;
              return (
                <div key={i} className={`p-8 relative ${isFilled ? 'bg-[#153a44]' : 'border border-[#1f4a56]'}`}>
                  <h4 className="text-white font-bold text-lg mb-4">"{t.title}"</h4>
                  <p className="text-gray-300 text-[13px] leading-relaxed mb-10 relative z-10">
                    {t.text}
                  </p>
                  
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
                       <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h5 className="font-bold text-white text-[13px]">{t.name}</h5>
                      <span className="text-xs text-gray-400">{t.role}</span>
                    </div>
                  </div>

                  {/* Quote Icon */}
                  <div 
                    className={`absolute bottom-6 right-6 text-7xl font-serif leading-none opacity-20 select-none ${isFilled ? 'text-white' : 'text-transparent'}`} 
                    style={!isFilled ? { WebkitTextStroke: '2px rgba(255,255,255,0.4)' } : {}}
                  >
                    ”
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =============== WHY CHOOSE US =============== */}
      <section className="py-24 bg-[#F2F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm text-gray-500 font-medium tracking-wide mb-3 block">Rendre l'impossible possible</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[var(--color-primary)] mb-6">
              Pourquoi Nous Choisir
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="w-16 h-[1.5px] bg-[var(--color-accent)]" />
              <Truck className="w-6 h-6 text-[var(--color-accent)]" strokeWidth={1.5} />
              <div className="w-16 h-[1.5px] bg-[var(--color-accent)]" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {/* Core Objectives */}
            <div>
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-8">Objectifs Principaux</h3>
              <div className="flex gap-6">
                <Target className="w-14 h-14 text-[var(--color-primary)] flex-shrink-0" strokeWidth={1.2} />
                <p className="text-[14px] text-gray-500 leading-relaxed">
                  Former les professionnels avec des méthodes pratiques et certifiantes. Auditer et optimiser vos processus pour une rentabilité maximale.
                </p>
              </div>
            </div>

            {/* Mission & Vision */}
            <div>
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-8">Mission & Vision</h3>
              <div className="flex gap-6">
                <Sun className="w-14 h-14 text-[var(--color-primary)] flex-shrink-0" strokeWidth={1.2} />
                <p className="text-[14px] text-gray-500 leading-relaxed">
                  Devenir le partenaire privilégié des entreprises en Guinée pour bâtir des chaînes logistiques résilientes, compétitives et durables.
                </p>
              </div>
            </div>

            {/* Our Values */}
            <div>
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-8">Nos Valeurs</h3>
              <div className="flex gap-6">
                <LayoutGrid className="w-14 h-14 text-[var(--color-primary)] flex-shrink-0" strokeWidth={1.2} />
                <p className="text-[14px] text-gray-500 leading-relaxed">
                  Excellence, intégrité, innovation et transfert de compétences. Nous plaçons la réussite de nos clients au cœur de nos actions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
