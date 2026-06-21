"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Ship,
  Truck,
  Plane,
  Layers,
  Search,
  Award,
  Clock,
  Settings,
  ChevronRight,
  Calendar,
  MapPin,
  User,
  Smartphone,
  PhoneCall,
  Info,
  Warehouse,
  Anchor,
  Activity,
  AlertCircle
} from "lucide-react";

// === Partners Data ===
const partners = [
  { name: "Conakry Terminal", logo: "CT" },
  { name: "Maersk Guinea", logo: "MSK" },
  { name: "Bolloré Logistics", logo: "BL" },
  { name: "Alport Conakry", logo: "APC" },
  { name: "Guiter SA", logo: "GTR" },
  { name: "Soguipami", logo: "SGPM" }
];

// === Team Data ===
const teamData = [
  {
    name: "Kathleen Angela",
    role: "SOFTWARE ENGINEER",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop&crop=face",
    bio: "Donec semper lacinia sem nec aliquam. Sedurna pulvinar, luctus augue scelerisqu risusEtiam lacinia ex sit amet."
  },
  {
    name: "Edward Jeffrey",
    role: "DATA SCIENCE",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop&crop=face",
    bio: "Etiam lacinia ex sit amet conec semper lacinia sem nec aliquam. Sedurna pulvinar, luctus augue scelerisqu risus."
  },
  {
    name: "George Timothy",
    role: "SYSTEM ANALYST",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=600&fit=crop&crop=face",
    bio: "Augue scelerisqu risusEtiam lacinia ex sit amet wonec semper lacinia sem nec aliquam. Sedurna pulvinar luctus."
  },
  {
    name: "Kenneth Brian",
    role: "QUALITY ASSURANCE",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=600&fit=crop&crop=face",
    bio: "Vinec semper lacinia sem nec aliquam. Sedurna pulvinar, luctus augue scelerisqu risusEtiam lacinia ex sit amet."
  }
];

// === Projects Data ===
const projects = [
  {
    title: "Audit Logistique National",
    category: "Étude & Conseil",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&fit=crop",
    desc: "Optimisation de la chaîne d'approvisionnement pour une industrie minière."
  },
  {
    title: "Formation Gestion de Stock",
    category: "Formation Pro",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&fit=crop",
    desc: "Session certifiante pour 50 magasiniers d'une grande entreprise locale."
  },
  {
    title: "Conseil Stratégique Douanier",
    category: "Conseil",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&fit=crop",
    desc: "Accompagnement d'un transitaire dans la mise aux normes douanières."
  },
  {
    title: "Masterclass Supply Chain",
    category: "Séminaire",
    image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=800&fit=crop",
    desc: "Intervention sur les meilleures pratiques du transport régional."
  }
];

// === Blog Data ===
const blogs = [
  {
    date: "08 August 2024",
    category: "Logistics",
    title: "Overcoming Delivery Obstacles",
    desc: "Donec rutrum congue leo eget malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&fit=crop"
  },
  {
    date: "08 August 2024",
    category: "Warehouse",
    title: "Stock Checker Skills And Knowledge",
    desc: "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at.",
    image: "https://images.unsplash.com/photo-1542362567-b07eac790acd?q=80&w=600&fit=crop"
  },
  {
    date: "08 August 2024",
    category: "Freight",
    title: "Container Handling Onboard Cranes",
    desc: "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=600&fit=crop"
  }
];

// === Logistics Services Data ===
const logisticsServices = [
  {
    id: "conseil",
    icon: Activity,
    title: "Conseil Logistique",
    desc: "Optimisation de vos flux, réduction de vos coûts de transport et amélioration de la gestion de vos entrepôts.",
    link: "/services/conseil",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&fit=crop"
  },
  {
    id: "etude",
    icon: Search,
    title: "Étude et Audit",
    desc: "Analyse approfondie de vos processus existants et recommandations stratégiques sur-mesure pour votre supply chain.",
    link: "/services/etude",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&fit=crop"
  },
  {
    id: "formation",
    icon: Award,
    title: "Formation Professionnelle",
    desc: "Programmes certifiants pour monter en compétences : gestion des stocks, réglementation douanière, et optimisation des routes.",
    link: "/services/formation",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&fit=crop"
  }
];

// === Section 4 Slides Data ===
const section4Slides = [
  {
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1200&fit=crop",
    title: "Gestion du Fret et de la Logistique",
    desc: "Nous assurons une gestion fluide de votre chaîne d'approvisionnement grâce à une planification experte et un suivi rigoureux."
  },
  {
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&fit=crop",
    title: "Sécurité et Conformité",
    desc: "Vos marchandises sont protégées et acheminées dans le respect total des réglementations douanières en vigueur."
  },
  {
    image: "https://images.unsplash.com/photo-1516576885502-d49957d5e3f1?q=80&w=1200&fit=crop",
    title: "Optimisation des Coûts",
    desc: "Des solutions sur mesure pour réduire vos frais de transport tout en maintenant une qualité de service optimale."
  }
];

// === Partners Logos Data ===
const row1Logos = ["NOKI", "boogie", "mihoku", "Hiln", "Logis", "Trans"];
const row2Logos = ["DAF", "IVECO", "DHL", "FedEx", "Maersk", "CMA"];
const row3Logos = ["TNT", "dpd", "GLS", "UPS", "MSC", "Hapag"];

export default function Home() {
  // Section 4 Carousel State
  const [s4Index, setS4Index] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setS4Index((prev) => (prev + 1) % section4Slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Active Service Accordion State
  const [activeServiceId, setActiveServiceId] = useState("conseil");

  // Tracking State
  const [trackId, setTrackId] = useState("");
  const [trackResult, setTrackResult] = useState<string | null>(null);
  const [trackError, setTrackError] = useState(false);

  // Handle tracking search
  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackId.trim()) return;
    setTrackError(false);
    setTrackResult(null);

    // Simple mockup response
    const validCodes = ["CERT-100", "CERT-200", "CERT-300", "CERT-400"];
    const code = trackId.trim().toUpperCase();

    if (validCodes.includes(code) || code.startsWith("CERT")) {
      setTimeout(() => {
        if (code.endsWith("100") || code.includes("1")) {
          setTrackResult("Certificat valide. Formation : Gestion des Stocks (Session 2024).");
        } else if (code.endsWith("200") || code.includes("2")) {
          setTrackResult("Certificat valide. Formation : Réglementation du Transport.");
        } else if (code.endsWith("300") || code.includes("3")) {
          setTrackResult("Dossier d'inscription en cours de validation par notre équipe.");
        } else {
          setTrackResult("Certificat vérifié et authentifié par le Cabinet Guilogtrans.");
        }
      }, 600);
    } else {
      setTimeout(() => {
        setTrackError(true);
      }, 400);
    }
  };

  return (
    <div className="w-full overflow-hidden">
      {/* ================================================
          1. HERO SECTION (Ship background, centered title)
      ================================================ */}
      <section className="relative w-full h-[100vh] min-h-[600px] flex flex-col items-center justify-center bg-[#0A3123]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-overlay"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1920&fit=crop')` }}
        />
        <div className="absolute inset-0 bg-[#0A3123]/70" />

        <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6 lg:px-8 mt-20 flex-grow flex flex-col justify-center items-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-white text-sm sm:text-base mb-4 tracking-wide font-medium"
          >
            CONSEIL, ÉTUDE ET FORMATION EN LOGISTIQUE
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-[70px] font-bold text-white leading-tight mb-8 tracking-tight"
          >
            L'Expertise Logistique <br className="hidden sm:block" /> & Transport
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed"
          >
            Le premier cabinet spécialisé en Guinée, combinant expertise sectorielle et pédagogie interactive.<br />
            Nous accompagnons les entreprises dans l'optimisation de leurs flux et la montée en compétences de leurs équipes.
          </motion.p>
        </div>

        {/* Button at the very bottom of the hero section */}
        <div className="relative z-10 mb-[-24px]">
          <Link
            href="/services"
            className="px-8 py-4 bg-[#CE1126] hover:bg-[#A90D1E] text-white font-sans text-[15px] transition-colors inline-block shadow-lg font-medium"
          >
            Découvrir Nos Formations
          </Link>
        </div>
      </section>

      {/* ================================================
          2. INTRO & STATS SECTION (Leading Provider & 5 Stats)
      ================================================ */}
      <section className="relative py-28 bg-[#0A3123] overflow-hidden">
        {/* World Map Dotted Background */}
        <div 
          className="absolute inset-0 opacity-[0.10] pointer-events-none bg-center bg-no-repeat" 
          style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/c/c4/World_map_dotted.svg")', backgroundSize: '80% auto' }}
        />
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mb-24">
            <span className="text-white/80 text-[14px] font-sans block mb-4">
              Pourquoi choisir le Cabinet Guilogtrans
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white leading-[1.3] tracking-tight">
              Le Partenaire De Confiance Qui Vous Aide À{" "}
              <span className="text-[#FCD116] underline decoration-2 underline-offset-8">Optimiser</span> Votre Chaîne Logistique Et{" "}
              <span className="text-[#FCD116] underline decoration-2 underline-offset-8">Former Vos Équipes.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
            {[
              { value: "5+", label: "Années D'expérience" },
              { value: "50+", label: "Entreprises Accompagnées" },
              { value: "1K+", label: "Apprenants Formés" },
              { value: "100+", label: "Audits Réalisés" },
              { value: "10+", label: "Formateurs Experts" }
            ].map((stat, idx) => (
              <div key={idx} className="text-left">
                <div className="text-5xl sm:text-6xl font-bold text-white tracking-tighter mb-4">
                  {stat.value}
                </div>
                <div className="text-[14px] text-white/80 font-sans leading-relaxed">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================
          3. LOGISTICS SOLUTIONS (Interactive Accordion)
      ================================================ */}
      <section className="bg-white">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          {/* Left Column (Text & Button) */}
          <div className="lg:w-[40%] p-8 sm:p-16 flex flex-col justify-center bg-[#F2F5F9]">
            <span className="text-[#0A3123] text-sm font-sans mb-4 tracking-wide font-medium">Nos Domaines d'Expertise</span>
            <h2 className="text-4xl sm:text-[50px] font-bold text-[#0A3123] leading-[1.1] mb-6">
              Services & <br /> Formations
            </h2>
            
            {/* Divider with Icon */}
            <div className="flex items-center gap-2 mb-8 text-[#FCD116]">
              <div className="h-[2px] w-20 bg-[#FCD116]" />
              <Activity className="w-6 h-6" />
            </div>

            <p className="text-[#0A3123]/70 text-base leading-relaxed mb-10 font-sans max-w-sm">
              Nous accompagnons les entreprises et les professionnels à travers des missions de conseil, d'audit, et des programmes de formations sur-mesure.
            </p>

            <div>
              <div className="relative inline-block group">
                <div className="absolute inset-0 bg-[#FCD116]/30 translate-x-2 translate-y-2 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                <Link
                  href="/services"
                  className="relative flex items-center justify-center px-10 py-4 bg-[#CE1126] hover:bg-[#A90D1E] text-white font-sans text-[14px] font-medium transition-all shadow-sm"
                >
                  Tous Nos Services
                </Link>
              </div>
            </div>
          </div>

          {/* Middle Column (Services List Accordion) */}
          <div className="lg:w-[30%] flex flex-col border-l border-gray-200">
            {logisticsServices.map((service) => {
              const isActive = activeServiceId === service.id;
              
              if (isActive) {
                return (
                  <div key={service.id} className="flex flex-col px-10 py-10 bg-[#0A3123] text-white shadow-2xl relative z-10 border-l-4 border-[#FCD116] transition-all duration-500">
                    <div className="flex items-center gap-6 mb-4">
                      <service.icon className="w-10 h-10 stroke-[1.5] text-white" />
                      <h3 className="text-xl font-bold">{service.title}</h3>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="overflow-hidden"
                    >
                      <p className="text-white/80 text-[14px] leading-relaxed mb-6 font-sans">
                        {service.desc}
                      </p>
                      <Link href={service.link} className="text-[#FCD116] text-[14px] font-sans underline underline-offset-4 hover:text-white transition-colors">
                        En Savoir Plus
                      </Link>
                    </motion.div>
                  </div>
                );
              }

              return (
                <div 
                  key={service.id} 
                  onClick={() => setActiveServiceId(service.id)}
                  className="flex items-center gap-6 px-10 py-10 border-b border-gray-200 hover:bg-[#F2F5F9] transition-colors cursor-pointer text-[#0A3123]"
                >
                  <service.icon className="w-10 h-10 stroke-[1.5]" />
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
              );
            })}
          </div>

          {/* Right Column (Image based on active service) */}
          <div className="lg:w-[30%] relative min-h-[500px] lg:min-h-auto overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeServiceId}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url('${logisticsServices.find(s => s.id === activeServiceId)?.image}')` 
                }}
              />
            </AnimatePresence>
            
            {/* Scroll Up Button - matches image layout at bottom right */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="absolute bottom-6 right-6 w-12 h-12 bg-[#0A3123] text-white flex items-center justify-center hover:bg-[#CE1126] transition-colors z-20"
            >
              <ChevronRight className="w-6 h-6 -rotate-90" />
            </button>
          </div>
        </div>
      </section>

      {/* ================================================
          4. COST-EFFECTIVE SERVICES (Left cargo image, right service grid)
      ================================================ */}
      <section className="py-24 bg-[#0A3123] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Image & Overlay Card (Carousel) */}
            <div className="relative w-full h-[600px] mb-12 lg:mb-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={s4Index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  {/* The actual image container */}
                  <div className="absolute top-0 right-0 w-[90%] h-[500px]">
                    <Image
                      src={section4Slides[s4Index].image}
                      alt={section4Slides[s4Index].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* The overlapping dark box */}
                  <div className="absolute bottom-16 left-0 w-[85%] bg-gradient-to-r from-[#0A3123] to-[#0A3123]/90 backdrop-blur-md p-10 shadow-2xl border-t border-white/5">
                    <h3 className="text-[#FCD116] text-3xl sm:text-4xl font-bold mb-6 leading-tight">
                      {section4Slides[s4Index].title}
                    </h3>
                    <p className="text-white/80 text-[14px] leading-relaxed font-sans min-h-[60px]">
                      {section4Slides[s4Index].desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
              {/* Carousel Dots */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
                {section4Slides.map((_, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setS4Index(idx)}
                    className={`cursor-pointer transition-all flex items-center justify-center ${s4Index === idx ? "w-5 h-5 rounded-full border border-[#CE1126]" : "w-1.5 h-1.5 rounded-full bg-[#CE1126]"}`}
                  >
                    {s4Index === idx && <div className="w-1.5 h-1.5 rounded-full bg-[#CE1126]"></div>}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content */}
            <div>
              <span className="text-white/80 text-sm font-sans mb-4 block">Notre Méthodologie</span>
              <h2 className="text-4xl sm:text-[45px] font-bold text-white leading-[1.1] mb-6">
                Des Résultats <br /> Mesurables
              </h2>
              
              <div className="flex items-center gap-2 mb-8 text-[#FCD116]">
                <div className="h-[2px] w-20 bg-[#FCD116]" />
                <Award className="w-6 h-6" />
              </div>

              <p className="text-white/70 text-[14px] leading-relaxed mb-12 font-sans">
                Grâce à une approche analytique et une expertise terrain reconnue, nous transformons vos contraintes logistiques en avantages compétitifs durables.
              </p>

              {/* 2x2 Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 mb-12">
                {[
                  { title: "Approche Personnalisée", desc: "Des audits sur-mesure pour chaque client." },
                  { title: "Experts Qualifiés", desc: "Formateurs certifiés et professionnels du terrain." },
                  { title: "Veille Réglementaire", desc: "Mise en conformité douanière stricte." },
                  { title: "Support Continu", desc: "Un accompagnement au-delà des formations." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-[#009460]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-white/60 text-[13px] leading-relaxed font-sans">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Buttons Row */}
              <div className="flex flex-wrap items-center gap-8">
                <Link
                  href="/services"
                  className="px-8 py-4 bg-[#CE1126] hover:bg-[#A90D1E] text-white font-sans text-[14px] font-medium transition-all shadow-sm"
                >
                  Demander un Devis
                </Link>

                <a href="tel:+224626625162" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#FCD116] flex items-center justify-center group-hover:bg-[#E5BD0F] transition-colors">
                    <PhoneCall className="w-5 h-5 text-[#0A3123]" />
                  </div>
                  <div>
                    <span className="block text-[13px] text-white/80 font-sans mb-0.5">Appelez nos experts</span>
                    <span className="block text-base font-bold text-white">+224 626 62 51 62</span>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================
          5. COST CALCULATOR / CONTACT LOCATION
      ================================================ */}
      <section className="bg-white">
        <div className="flex flex-col lg:flex-row min-h-[650px]">
          {/* Left Column (Form) */}
          <div className="lg:w-1/2 p-8 sm:p-16 lg:p-24 bg-[#F2F5F9] relative overflow-hidden flex flex-col justify-center">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0A3123 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
            
            <div className="relative z-10">
              <span className="text-[#0A3123]/70 text-sm font-sans mb-4 block font-medium">Inscription Rapide</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#0A3123] leading-[1.1] mb-6">
                Réservez Votre <br /> Session De Formation
              </h2>
              
              <div className="flex items-center gap-2 mb-8 text-[#FCD116]">
                <div className="h-[2px] w-20 bg-[#FCD116]" />
                <Calendar className="w-6 h-6" />
              </div>

              <p className="text-[#0A3123]/70 text-[14px] leading-relaxed mb-10 font-sans max-w-lg">
                Consultez notre planning et réservez votre place pour nos prochaines masterclass et formations certifiantes.
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Entrez Votre Nom" className="w-full px-6 py-4 bg-transparent border border-gray-300 focus:outline-none focus:border-[#FCD116] focus:ring-1 focus:ring-[#FCD116] text-[13px] text-[#0A3123] transition-all" />
                  <input type="email" placeholder="Entrez Votre Email" className="w-full px-6 py-4 bg-transparent border border-gray-300 focus:outline-none focus:border-[#FCD116] focus:ring-1 focus:ring-[#FCD116] text-[13px] text-[#0A3123] transition-all" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <select className="w-full px-6 py-4 bg-transparent border border-gray-300 focus:outline-none focus:border-[#FCD116] text-[13px] text-[#0A3123]/70 appearance-none transition-all cursor-pointer">
                      <option value="">Sélectionnez un programme</option>
                      <option value="gestion-stocks">Gestion des Stocks</option>
                      <option value="douane">Réglementation Douanière</option>
                      <option value="supply-chain">Audit Supply Chain</option>
                    </select>
                    <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 rotate-90 pointer-events-none" />
                  </div>
                  <div className="relative">
                    <select className="w-full px-6 py-4 bg-transparent border border-gray-300 focus:outline-none focus:border-[#FCD116] text-[13px] text-[#0A3123]/70 appearance-none transition-all cursor-pointer">
                      <option value="">Profil</option>
                      <option value="entreprise">Entreprise</option>
                      <option value="particulier">Particulier / Étudiant</option>
                    </select>
                    <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 rotate-90 pointer-events-none" />
                  </div>
                </div>
                <textarea rows={4} placeholder="Besoins spécifiques / Message" className="w-full px-6 py-4 bg-transparent border border-gray-300 focus:outline-none focus:border-[#FCD116] text-[13px] text-[#0A3123] resize-none transition-all"></textarea>
                
                <button type="submit" className="px-10 py-4 bg-[#CE1126] hover:bg-[#A90D1E] text-white font-sans text-[14px] font-medium transition-all inline-block mt-4 shadow-sm">
                  Valider L'inscription
                </button>
              </form>
            </div>
          </div>

          {/* Right Column (Image) */}
          <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-auto">
            <Image
              src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1200&fit=crop"
              alt="Warehouse Workers"
              fill
              className="object-cover"
            />
            {/* Scroll Up Button at bottom right */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="absolute bottom-6 right-6 w-12 h-12 bg-[#0A3123] text-white flex items-center justify-center hover:bg-[#FF8050] transition-colors z-20"
            >
              <ChevronRight className="w-6 h-6 -rotate-90" />
            </button>
          </div>
        </div>
      </section>

      {/* ================================================
          6. PARTNERS LOGOS (Sliding Marquee)
      ================================================ */}
      <section className="pt-24 pb-16 bg-[#0A3123] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <span className="text-white/80 text-sm font-sans mb-4 block font-medium">Nos Références</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Ils Nous Font Confiance
          </h2>
          <div className="flex justify-center items-center gap-2 text-[#FCD116]">
            <div className="h-[2px] w-16 bg-[#FCD116]" />
            <Award className="w-6 h-6" />
          </div>
        </div>

        {/* Marquee Rows with Faded Edges */}
        <div className="relative w-full max-w-[1400px] mx-auto" style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
          
          {/* Row 1 (Left) */}
          <div className="flex overflow-hidden w-full mb-10">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
              className="flex w-max items-center"
            >
              {[...row1Logos, ...row1Logos].map((logo, idx) => (
                <div key={idx} className="flex-shrink-0 w-[200px] sm:w-[250px] flex items-center justify-center mx-4">
                  <span className={`text-4xl sm:text-[45px] text-white opacity-90 ${idx % 2 === 0 ? 'font-serif font-medium tracking-wide' : 'font-sans font-bold tracking-tight'}`}>
                    {logo}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2 (Right) */}
          <div className="flex overflow-hidden w-full mb-10">
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
              className="flex w-max items-center"
            >
              {[...row2Logos, ...row2Logos].map((logo, idx) => (
                <div key={idx} className="flex-shrink-0 w-[200px] sm:w-[250px] flex items-center justify-center mx-4">
                  <span className={`text-5xl sm:text-[55px] text-white opacity-90 ${idx % 2 !== 0 ? 'font-black italic tracking-tighter' : 'font-sans font-extrabold tracking-widest'}`}>
                    {logo}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 3 (Left) */}
          <div className="flex overflow-hidden w-full mb-4">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
              className="flex w-max items-center"
            >
              {[...row3Logos, ...row3Logos].map((logo, idx) => (
                <div key={idx} className="flex-shrink-0 w-[200px] sm:w-[250px] flex items-center justify-center mx-4">
                  <span className={`text-4xl sm:text-[50px] text-white opacity-90 ${idx % 3 === 0 ? 'font-serif italic font-bold' : 'font-sans font-black tracking-tight'}`}>
                    {logo}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================
          7. TEAM MEMBERS GRID (Logi Team Members)
      ================================================ */}
      <section className="py-24 bg-[#0A3123]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-white/80 text-sm font-sans mb-4 block font-medium">Pédagogie & Expertise</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Nos Experts & Formateurs
            </h2>
            <div className="flex justify-center items-center gap-2 text-[#FCD116]">
              <div className="h-[2px] w-16 bg-[#FCD116]" />
              <User className="w-6 h-6" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamData.map((expert, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row bg-[#F2F5F9] overflow-hidden group"
              >
                {/* Photo Left */}
                <div className="relative h-[300px] sm:h-[350px] sm:w-1/2 flex-shrink-0">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Details Right */}
                <div className={`p-10 sm:p-12 lg:p-14 flex flex-col justify-center sm:w-1/2 ${idx === 3 ? 'bg-[#CE1126]' : 'bg-[#F2F5F9]'}`}>
                  <span className={`block text-xs font-sans tracking-widest mb-3 ${idx === 3 ? 'text-white/90' : 'text-[#0A3123]/80'}`}>
                    {expert.role}
                  </span>
                  <h3 className={`text-2xl sm:text-[28px] font-bold mb-6 leading-tight ${idx === 3 ? 'text-white' : 'text-[#0A3123]'}`}>
                    {expert.name}
                  </h3>
                  <p className={`text-[14px] sm:text-[15px] leading-relaxed font-sans mb-8 ${idx === 3 ? 'text-white/90' : 'text-[#0A3123]/80'}`}>
                    {expert.bio}
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0A3123] hover:bg-[#FCD116] transition-colors cursor-pointer group/btn">
                      <ArrowRight className="w-5 h-5 text-white group-hover/btn:text-[#0A3123] transform rotate-45" />
                    </div>
                    <span className={`text-[13px] font-bold tracking-widest cursor-pointer ${idx === 3 ? 'text-white' : 'text-[#0A3123]'}`}>
                      VOIR LE PROFIL
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================
          8. PROCESS TIMELINE (How It Works)
      ================================================ */}
      <section className="py-24 bg-[#0A3123] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <span className="text-white/80 text-sm font-sans mb-4 block font-medium">Comment Nous Procédons</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Notre Méthodologie <br /> d'Intervention
            </h2>
            <div className="flex justify-center items-center gap-2 text-[#FCD116]">
              <div className="h-[2px] w-16 bg-[#FCD116]" />
              <Activity className="w-6 h-6" />
            </div>
          </div>

          {/* Timeline Grid */}
          <div className="relative">
            {/* The continuous dotted horizontal line */}
            <div className="absolute top-[28px] left-0 right-0 h-[1px] border-t border-dashed border-white/20 hidden lg:block" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {[
                {
                  year: "01",
                  icon: Search,
                  title: "Diagnostic & Audit",
                  desc: "Évaluation complète de votre chaîne d'approvisionnement ou des besoins en formation."
                },
                {
                  year: "02",
                  icon: Settings,
                  title: "Plan d'Action",
                  desc: "Élaboration de stratégies sur-mesure et définition des objectifs de performance."
                },
                {
                  year: "03",
                  icon: Award,
                  title: "Mise en Œuvre",
                  desc: "Déploiement des solutions ou animation des sessions de formation certifiantes."
                },
                {
                  year: "04",
                  icon: Activity,
                  title: "Suivi & Évaluation",
                  desc: "Analyse des KPI et accompagnement post-mission pour garantir des résultats durables."
                }
              ].map((item, idx) => (
                <div key={idx} className="relative group cursor-pointer pt-8 lg:pt-0">
                  {/* Timeline Dot (with Hover Effect) */}
                  <div className="hidden lg:flex absolute top-[28px] left-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center z-20">
                    {/* The halo/pulse effect */}
                    <div className={`absolute w-12 h-12 rounded-full bg-[#FCD116]/20 scale-0 group-hover:scale-100 transition-transform duration-300 ${idx === 0 ? 'scale-100' : ''}`} />
                    <div className={`w-3.5 h-3.5 rounded-full bg-[#FCD116] relative z-10 transition-transform duration-300 group-hover:scale-[1.8] ${idx === 0 ? 'scale-[1.8]' : ''}`} />
                  </div>

                  {/* Vertical dashed line connecting down */}
                  <div className="hidden lg:block absolute top-[28px] bottom-0 left-10 -translate-x-1/2 w-[1px] border-l border-dashed border-white/10 group-hover:border-[#FCD116]/40 transition-colors duration-300" />

                  <div className="flex mt-8 lg:mt-16 relative">
                    {/* Rotated Year/Step */}
                    <div className="w-10 lg:w-12 flex-shrink-0 relative">
                      <div className="absolute top-28 left-1/2 -translate-x-1/2 -rotate-90 origin-center text-[40px] sm:text-[46px] font-black tracking-widest whitespace-nowrap pointer-events-none select-none">
                        <span className={idx === 0 ? 'text-[#FCD116]' : 'text-transparent'} style={idx !== 0 ? { WebkitTextStroke: '1px rgba(255,255,255,0.6)' } : {}}>
                          ÉTAPE {item.year}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pl-6 sm:pl-8">
                      <div className="w-12 h-12 rounded-full bg-[#CE1126] flex items-center justify-center text-white mb-6">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl sm:text-[22px] font-bold text-white mb-4 leading-tight pr-4">
                        {item.title}
                      </h3>
                      <p className="text-[14px] text-white/70 leading-relaxed font-sans pr-2">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-24">
            <p className="text-white/90 text-[15px] font-sans">
              Prêt à optimiser vos opérations logistiques ? <Link href="/contact" className="text-[#FCD116] hover:underline font-bold tracking-wide">Contactez-nous</Link>
            </p>
          </div>
        </div>
      </section>

      {/* ================================================
          9. COMPLETED PROJECTS (Exceptional Services)
      ================================================ */}
      <section className="py-24 bg-[#0A3123]">
        <div className="w-[95%] max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-white/80 text-sm font-sans mb-4 block font-medium">Découvrez Nos Réalisations</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Missions & Formations Récentes
            </h2>
            <div className="flex justify-center items-center gap-2 text-[#FCD116]">
              <div className="h-[2px] w-16 bg-[#FCD116]" />
              <Activity className="w-6 h-6" />
            </div>
          </div>

          {/* Masonry Grid of Projects */}
          <div className="flex flex-col md:flex-row gap-6">
            
            {/* Left Column */}
            <div className="flex flex-col gap-6 md:w-1/2">
              {/* Image 1: Tall */}
              <div className="relative w-full h-[600px] overflow-hidden group cursor-pointer">
                <Image
                  src={projects[0].image}
                  alt={projects[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A3123]/95 via-[#0A3123]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                  <span className="text-[#FCD116] text-[15px] font-sans mb-2 block tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {projects[0].category}
                  </span>
                  <h3 className="text-white text-3xl sm:text-4xl font-bold mb-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {projects[0].title}
                  </h3>
                  <button className="bg-[#CE1126] hover:bg-[#A90D1E] text-white text-[13px] font-bold px-8 py-4 transition-colors w-fit tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                    EN SAVOIR PLUS
                  </button>
                </div>
              </div>

              {/* Image 2: Short */}
              <div className="relative w-full h-[400px] overflow-hidden group cursor-pointer">
                <Image
                  src={projects[1].image}
                  alt={projects[1].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A3123]/95 via-[#0A3123]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                  <span className="text-[#FCD116] text-[15px] font-sans mb-2 block tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {projects[1].category}
                  </span>
                  <h3 className="text-white text-3xl sm:text-4xl font-bold mb-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {projects[1].title}
                  </h3>
                  <button className="bg-[#CE1126] hover:bg-[#A90D1E] text-white text-[13px] font-bold px-8 py-4 transition-colors w-fit tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                    EN SAVOIR PLUS
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6 md:w-1/2">
              {/* Image 3: Short */}
              <div className="relative w-full h-[400px] overflow-hidden group cursor-pointer">
                <Image
                  src={projects[2].image}
                  alt={projects[2].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A3123]/95 via-[#0A3123]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                  <span className="text-[#FF8050] text-[15px] font-sans mb-2 block tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {projects[2].category}
                  </span>
                  <h3 className="text-white text-3xl sm:text-4xl font-bold mb-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {projects[2].title}
                  </h3>
                  <button className="bg-[#FF8050] hover:bg-[#e07045] text-white text-[13px] font-bold px-8 py-4 transition-colors w-fit tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                    VIEW DETAILS
                  </button>
                </div>
              </div>

              {/* Image 4: Tall */}
              <div className="relative w-full h-[600px] overflow-hidden group cursor-pointer">
                <Image
                  src={projects[3].image}
                  alt={projects[3].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* On the bottom right image, let's make the overlay partially visible or fully visible on hover. 
                    The screenshot shows it visible, so we'll just use the same hover effect, but it will appear exactly as in the screenshot when hovered. */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A3123]/95 via-[#0A3123]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                  <span className="text-[#FF8050] text-[15px] font-sans mb-2 block tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {projects[3].category}
                  </span>
                  <h3 className="text-white text-3xl sm:text-4xl font-bold mb-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {projects[3].title}
                  </h3>
                  <button className="bg-[#FF8050] hover:bg-[#e07045] text-white text-[13px] font-bold px-8 py-4 transition-colors w-fit tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                    VIEW DETAILS
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================
          10. CARGO STATUS TRACKING (App left, tracking form right)
      ================================================ */}
      <section className="py-24 relative bg-[#F2F5F9] overflow-hidden">
        {/* Subtle Map Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0A3123 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        
        {/* Delivery Driver Image Faded in Background */}
        <div className="absolute bottom-0 right-0 lg:right-1/4 w-[500px] h-[700px] pointer-events-none hidden md:block opacity-60 z-0" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 30%, black 80%, transparent)' }}>
          <Image src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&fit=crop" alt="Certification" fill className="object-cover object-top" />
        </div>

        <div className="w-[95%] max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="max-w-xl">
              <span className="text-gray-500 text-[15px] font-sans mb-4 block font-medium">
                Authenticité & Reconnaissance
              </span>
              <h2 className="text-4xl sm:text-[46px] font-bold text-[#0A3123] leading-tight mb-6">
                Vérification de Certificat <br /> d'Aptitude
              </h2>
              <div className="flex items-center gap-2 text-[#FCD116] mb-8">
                <div className="h-[2px] w-16 bg-[#FCD116]" />
                <Award className="w-6 h-6" />
              </div>

              <p className="text-[#0A3123]/80 text-[15px] leading-relaxed mb-10 font-sans">
                Assurez-vous de la validité et de l'authenticité des certificats délivrés par le Cabinet Guilogtrans lors de nos sessions de formation professionnelle.
              </p>

              <ul className="space-y-5 mb-12">
                {[
                  { title: "Sécurité", desc: "Base de données chiffrée et sécurisée" },
                  { title: "Rapidité", desc: "Vérification instantanée en ligne" },
                  { title: "Transparence", desc: "Historique accessible aux recruteurs" },
                  { title: "Fiabilité", desc: "Certificats conformes aux normes ISO" },
                  { title: "Support", desc: "Assistance en cas d'anomalie" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 bg-[#CE1126] rotate-45 flex-shrink-0" />
                    <div className="text-[15px]">
                      <span className="font-bold text-[#0A3123]">{item.title} : </span>
                      <span className="text-[#0A3123]/80">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Info Box */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#CE1126] text-white flex flex-shrink-0 items-center justify-center font-bold text-lg mt-1">
                  i
                </div>
                <p className="text-[14px] text-[#0A3123]/80 leading-relaxed max-w-md">
                  Chaque certificat possède un numéro d'identification unique. <Link href="#" className="text-[#CE1126] font-medium hover:underline">En savoir plus</Link>
                </p>
              </div>
            </div>

            {/* Right Content (Tracking Box) */}
            <div className="flex justify-end">
              <div className="bg-[#0A3123] p-10 lg:p-14 text-white w-full max-w-[600px] shadow-2xl relative z-10 border-t-4 border-[#CE1126]">
                <div className="flex justify-between items-start mb-10">
                  <h3 className="text-[32px] sm:text-[40px] font-bold leading-tight">
                    Vérifier Un <br/> Certificat
                  </h3>
                  <div className="w-16 h-16 opacity-90 border-2 border-white/20 rounded-md p-2 text-[#FCD116]">
                    {/* Badge/Award SVG */}
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                  </div>
                </div>

                <form className="space-y-4" onSubmit={handleTrack}>
                  <input
                    type="text"
                    value={trackId}
                    onChange={(e) => setTrackId(e.target.value)}
                    placeholder="Entrez le numéro du certificat (ex: CERT-100)"
                    required
                    className="w-full bg-[#F4F4F4] text-[#0A3123] px-5 py-4 font-medium focus:outline-none focus:ring-2 focus:ring-[#FCD116] placeholder:text-gray-400 transition-all"
                  />
                  
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full sm:w-fit bg-[#CE1126] text-white text-[14px] font-bold px-10 py-4 transition-colors hover:bg-[#A90D1E]"
                    >
                      Vérifier Maintenant
                    </button>
                  </div>
                </form>

                {/* Result Display */}
                {trackResult && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 p-4 bg-[#009460]/20 border border-[#009460] rounded flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#009460] mt-0.5 flex-shrink-0" />
                    <p className="text-sm font-sans text-white">{trackResult}</p>
                  </motion.div>
                )}
                
                {trackError && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 p-4 bg-[#CE1126]/20 border border-[#CE1126] rounded flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-[#CE1126] mt-0.5 flex-shrink-0" />
                    <p className="text-sm font-sans text-white">Certificat introuvable. Veuillez vérifier le numéro de série.</p>
                  </motion.div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================
          11. BLOG & NEWS (Updates, Blogs & News)
      ================================================ */}
      <section className="py-24 bg-[#0A3123]">
        <div className="w-[95%] max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16">
            <div>
              <span className="text-white/80 text-[15px] font-sans mb-4 block font-medium">Veille Logistique</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Actualités & Conseils
              </h2>
              <div className="flex items-center gap-2 text-[#FCD116]">
                <div className="h-[2px] w-16 bg-[#FCD116]" />
                <Activity className="w-6 h-6" />
              </div>
            </div>
            <button className="bg-[#CE1126] hover:bg-[#A90D1E] text-white text-[14px] font-bold px-10 py-4 transition-colors tracking-wide mt-6 sm:mt-0 shadow-sm">
              Toutes Les Actualités
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative h-[280px] sm:h-[320px] w-full overflow-hidden mb-6">
                  <Image src={blog.image} alt={blog.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-0 left-0 bg-[#FCD116] text-[#0A3123] px-5 py-2.5 font-bold text-sm tracking-wide">
                    {blog.date}
                  </div>
                </div>
                <div>
                  <h3 className="text-white text-[26px] font-bold mb-4 leading-snug group-hover:text-[#FCD116] transition-colors pr-4">
                    {blog.title}
                  </h3>
                  <p className="text-white/60 text-[15px] leading-relaxed mb-6 font-sans">
                    {blog.desc}
                  </p>
                  <Link href="#" className="text-[#FCD116] text-[14px] font-bold underline underline-offset-4 decoration-[#FCD116]/30 hover:decoration-[#FCD116] transition-colors">
                    Lire L'article
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
