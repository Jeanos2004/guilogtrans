"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRight, BookOpen, Clock, Users, Calendar } from "lucide-react";
import { getFormations, Formation } from "@/lib/services/formations";

const categoryLabels: Record<string, string> = {
  "logistique": "Logistique",
  "transport": "Transport",
  "supply-chain": "Supply Chain",
  "douane": "Transit & Douane",
  "securite": "Sécurité Routière"
};

const categoryColors: Record<string, string> = {
  "transport": "bg-rouge text-white",
  "logistique": "bg-[#FCD116] text-gray-900",
  "supply-chain": "bg-accent text-white",
  "douane": "bg-vert text-white",
  "securite": "bg-vert text-white"
};

const categoryImages: Record<string, string> = {
  "logistique": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&fit=crop",
  "transport": "https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=600&fit=crop",
  "supply-chain": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=600&fit=crop",
  "douane": "https://images.unsplash.com/photo-1521791136368-1a8b3d88a2e5?q=80&w=600&fit=crop",
  "securite": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&fit=crop"
};

export default function FormationsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("Tous");
  const [formations, setFormations] = useState<Formation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const list = await getFormations(true);
        setFormations(list);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const categories = ["Tous", "logistique", "transport", "supply-chain", "douane", "securite"];

  const filteredFormations = formations.filter(f => 
    activeCategory === "Tous" || f.categorie === activeCategory
  );

  return (
    <>
      {/* PAGE HERO */}
      <section className="bg-primary py-20 relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent)] opacity-25" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            {/* Breadcrumb */}
            <div className="flex items-center text-[10px] font-bold uppercase tracking-widest text-white/60 mb-4 gap-2">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight className="w-3.5 h-3.5 text-secondary" />
              <span className="text-secondary">Formations</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-heading font-black uppercase tracking-tight mb-4">
              Nos Formations Certifiantes
            </h1>
            <p className="text-white/70 max-w-xl font-sans text-xs sm:text-sm leading-relaxed">
              Des programmes de formation 100% pratiques conçus pour acquérir les compétences réelles demandées par les recruteurs du secteur logistique & transport.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FILTER TABS & CATALOG GRID */}
      <section className="py-16 bg-surface min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-12 border-b border-gray-200">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors border-b-[3px] -mb-[2px] ${
                  activeCategory === cat
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-primary hover:border-gray-300"
                }`}
              >
                {cat === "Tous" ? "Tous" : (categoryLabels[cat] || cat)}
              </button>
            ))}
          </div>

          {/* Catalogue Loader */}
          {loading ? (
            <div className="flex justify-center items-center py-24">
              <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredFormations.map((formation) => {
                  const imageSrc = categoryImages[formation.categorie] || "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&fit=crop";
                  const colorClass = categoryColors[formation.categorie] || "bg-primary text-white";
                  const dateStr = formation.prochaineSession 
                    ? (typeof formation.prochaineSession.toDate === "function" 
                        ? formation.prochaineSession.toDate().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
                        : String(formation.prochaineSession)) 
                    : "";

                  return (
                    <motion.div
                      key={formation.id}
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="bg-white border border-gray-200 hover:border-primary hover:shadow-md transition-all duration-300 flex flex-col group"
                    >
                      {/* Course Image */}
                      <div className="h-48 relative overflow-hidden bg-gray-100">
                        <img
                          src={imageSrc}
                          alt={formation.titre}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className={`absolute top-4 left-4 text-[9px] font-bold px-2.5 py-1 uppercase tracking-widest ${colorClass}`}>
                          {categoryLabels[formation.categorie] || formation.categorie}
                        </span>
                      </div>

                      {/* Content Body */}
                      <div className="p-6 flex-grow flex flex-col justify-between">
                        <div className="space-y-4">
                          <h3 className="text-base font-heading font-black text-primary uppercase leading-tight line-clamp-2 min-h-[2.5rem] group-hover:text-secondary transition-colors">
                            {formation.titre}
                          </h3>

                          {/* Quick specs */}
                          <div className="grid grid-cols-2 gap-3 text-[10px] text-gray-500 font-sans border-t border-b border-gray-100 py-3">
                            <div className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                              <span>{formation.duree}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Users className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                              <span>100% Pratique</span>
                            </div>
                            {dateStr && (
                              <div className="col-span-2 flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                                <span>Session : {dateStr}</span>
                              </div>
                            )}
                          </div>

                          <p className="text-gray-650 text-[11px] leading-relaxed line-clamp-3">
                            {formation.description}
                          </p>
                        </div>

                        {/* Card footer (Tarifs & Register CTAs) */}
                        <div className="pt-6 border-t border-gray-100 flex items-center justify-between mt-6">
                          <div className="flex flex-col">
                            <span className="text-[9px] uppercase tracking-wider font-bold text-gray-400">Tarif</span>
                            <span className="text-sm font-black text-rouge">
                              {formation.tarif.toLocaleString('fr-GN')} GNF
                            </span>
                          </div>
                          <div className="flex gap-2">
                            <Link
                              href={`/formations/${formation.slug}`}
                              className="text-[10px] font-bold uppercase tracking-wider text-primary border border-gray-200 px-3 py-2 hover:bg-gray-50 transition-colors"
                            >
                              Détails
                            </Link>
                            <Link
                              href={`/contact?subject=Inscription - ${encodeURIComponent(formation.titre)}`}
                              className="bg-primary hover:bg-rouge text-white font-bold text-[10px] uppercase tracking-wider px-3 py-2 transition-colors"
                            >
                              S'inscrire
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          )}

          {!loading && filteredFormations.length === 0 && (
            <div className="text-center py-24 bg-white border border-gray-200 shadow-sm">
              <BookOpen className="w-12 h-12 text-gray-350 mx-auto mb-3" />
              <p className="text-gray-500 font-medium text-sm">Aucun module pour cette catégorie actuellement.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
