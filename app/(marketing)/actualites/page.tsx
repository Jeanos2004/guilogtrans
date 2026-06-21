"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, Calendar, User, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import Image from "next/image";
import { db, Article } from "@/lib/db";

export default function ActualitesPage() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const loadArticles = async () => {
      await db.init();
      setArticles(await db.getArticles());
    };
    loadArticles();
  }, []);

  return (
    <>
      <section className="relative bg-[var(--color-primary)] pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="flex items-center text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-5 gap-2">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight className="w-4 h-4" />
              <span>Actualités</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Actualités & Blog
            </h1>
            <div className="w-20 h-1 bg-[var(--color-accent)] mb-8" />
            <p className="text-white/70 text-[15px] leading-relaxed max-w-2xl font-sans">
              Restez informés des derniers événements, des nouvelles formations et découvrez les conseils de nos experts en logistique.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-surface)] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Dernières nouvelles" 
            subtitle="Restez informés des événements, des nouvelles formations et des conseils de nos experts."
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col group"
              >
                <Link href={`/actualites/${article.id}`} className="block h-48 bg-gray-200 relative overflow-hidden">
                  <Image 
                    src={article.image} 
                    alt={article.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1.5 bg-[var(--color-accent)] text-white text-[10px] uppercase tracking-widest font-bold shadow-sm">
                      {article.category}
                    </span>
                  </div>
                </Link>
                
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {article.date}
                    </div>
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {article.author}
                    </div>
                  </div>
                  
                  <Link href={`/actualites/${article.id}`}>
                    <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3 group-hover:text-[var(--color-secondary)] transition-colors line-clamp-2 hover:text-[var(--color-accent)]">
                      {article.title}
                    </h3>
                  </Link>
                  
                  <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <Link href={`/actualites/${article.id}`} className="inline-flex items-center text-[var(--color-secondary)] font-medium text-sm group-hover:underline mt-auto">
                    Lire l'article <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="px-8 py-3.5 border border-[var(--color-primary)] text-[var(--color-primary)] font-bold text-[13px] uppercase tracking-wider hover:bg-[var(--color-primary)] hover:text-white transition-colors">
              Charger plus d'articles
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
