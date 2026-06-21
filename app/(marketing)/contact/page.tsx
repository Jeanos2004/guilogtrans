"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { db } from "@/lib/db";

export default function ContactPage() {
  const [formData, setFormData] = useState({ fullName: "", email: "", subject: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await db.addMessage({
      fullName: formData.fullName,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    });
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[var(--color-primary)] pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="flex items-center text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-5 gap-2">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight className="w-4 h-4" />
              <span>Contact</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Contactez-nous
            </h1>
            <div className="w-20 h-1 bg-[var(--color-accent)] mb-8" />
            <p className="text-white/70 text-[15px] leading-relaxed max-w-2xl font-sans">
              Une question, un devis ou besoin d'un accompagnement sur mesure ? Notre équipe est à votre écoute pour vous apporter des réponses adaptées.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-surface)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-200">
            
            {/* Form Column */}
            <div className="lg:w-3/5 p-8 md:p-12">
              <SectionTitle title="Envoyez-nous un message" subtitle="Formulaire de contact" />
              <p className="text-gray-600 mb-8">
                Vous avez une question sur nos formations ou souhaitez un accompagnement sur mesure ? Remplissez le formulaire ci-dessous et notre équipe vous répondra rapidement.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-[var(--color-primary)] mb-2">Message envoyé !</h3>
                  <p className="text-gray-600 mb-6">Merci de nous avoir contacté. Notre équipe vous répondra très prochainement.</p>
                  <button
                    onClick={() => { setIsSubmitted(false); setFormData({ fullName: "", email: "", subject: "", message: "" }); }}
                    className="px-6 py-2 border-2 border-[var(--color-primary)] text-[var(--color-primary)] text-sm font-bold uppercase tracking-wider hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] mb-2">Nom complet *</label>
                      <input name="fullName" type="text" required value={formData.fullName} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none transition-all" placeholder="Votre nom" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] mb-2">Email *</label>
                      <input name="email" type="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none transition-all" placeholder="votre@email.com" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] mb-2">Sujet *</label>
                    <input name="subject" type="text" required value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none transition-all" placeholder="Objet de votre message" />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] mb-2">Message *</label>
                    <textarea name="message" rows={5} required value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none transition-all" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                  </div>
                  
                  <button type="submit" disabled={isSubmitting} className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-[var(--color-primary)] text-white font-bold text-xs uppercase tracking-wider hover:bg-[var(--color-accent)] transition-colors disabled:opacity-70 mt-4">
                    {isSubmitting ? "Envoi en cours..." : <><span>Envoyer le message</span> <Send className="w-4 h-4 ml-2" /></>}
                  </button>
                </form>
              )}
            </div>
            
            {/* Contact Info Column */}
            <div className="lg:w-2/5 bg-[var(--color-primary)] text-white p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[var(--color-accent)] opacity-10 rounded-full translate-y-1/3 -translate-x-1/4"></div>
              
              <h2 className="text-2xl font-heading font-bold mb-8 relative z-10">Informations de contact</h2>
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Adresse</h3>
                    <p className="text-gray-300">Lambanyi-Marché Transversal enco5-lambanyi<br/>Conakry, République de Guinée</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Téléphones</h3>
                    <p className="text-gray-300">+224 626 62 51 62</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-300">contact@guilogtrans.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Heures d'ouverture</h3>
                    <p className="text-gray-300">Tous les jours : 09h - 20h</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[450px] w-full relative bg-gray-100 border-t border-gray-200">
        <iframe
          src="https://maps.google.com/maps?q=Lambanyi%20March%C3%A9,%20Conakry,%20Guin%C3%A9e&t=&z=16&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localisation de Cabinet Guilogtrans"
          className="w-full h-full grayscale-[15%] contrast-[105%] opacity-95 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        />
      </section>
    </>
  );
}
