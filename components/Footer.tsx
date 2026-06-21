"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Send, 
  ArrowUpRight, 
  ArrowRight, 
  Truck, 
  ChevronUp 
} from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#0A3123] text-white pt-24 pb-8 border-t border-white/10 mt-0">
      {/* Background image of trucks */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-luminosity">
        <Image 
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1600&fit=crop" 
          alt="Trucks Background" 
          fill 
          className="object-cover" 
        />
      </div>

      <div className="w-[95%] max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
        
        {/* Left Side Container */}
        <div className="lg:w-[65%]">
          {/* Top Left: Subscribe */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 border-b border-white/10 pb-16">
            <div className="mb-6 md:mb-0">
              <h3 className="text-3xl sm:text-[32px] font-bold text-white mb-6 tracking-wide">
                Abonnez-vous à notre Newsletter
              </h3>
              <div className="flex items-center gap-2 text-[#FCD116]">
                <div className="h-[2px] w-16 bg-[#FCD116]" />
                <Truck className="w-6 h-6" />
              </div>
            </div>
            <div className="w-full md:w-[450px]">
              <form className="relative flex shadow-md" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  required
                  className="w-full bg-[#F2F5F9] text-[#0A3123] px-6 py-5 text-[15px] font-medium focus:outline-none placeholder-gray-400" 
                />
                <button type="submit" className="absolute right-6 top-1/2 -translate-y-1/2 text-[#0A3123] hover:text-[#CE1126] transition-colors">
                   <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1: Logo & Slogan */}
            <div className="md:col-span-1 pr-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#CE1126] flex items-center justify-center rounded-sm">
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </div>
                <span className="text-3xl font-bold text-white tracking-tight">Guilogtrans</span>
              </div>
              <h4 className="text-[26px] font-bold text-white leading-tight mb-8">
                Cabinet de Conseil et Formation en Logistique
              </h4>
              <Link href="#" className="flex items-center gap-4 text-white text-[15px] font-medium hover:text-[#FCD116] transition-colors group">
                Découvrir
                <ArrowRight className="w-5 h-5 text-[#FCD116] transition-transform group-hover:translate-x-2" />
              </Link>
            </div>

            {/* Column 2: Contact Us */}
            <div>
              <h4 className="text-[20px] font-bold text-white mb-8">Nous Contacter</h4>
              <ul className="space-y-4">
                {["Trouvez-nous", "Prendre RDV", "FAQ", "Réseau Global", "Support"].map(link => (
                  <li key={link}>
                    <Link href="#" className="text-white/80 hover:text-[#FCD116] text-[15px] font-sans transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h4 className="text-[20px] font-bold text-white mb-8">Nos Services</h4>
              <ul className="space-y-4">
                {["Conseil Logistique", "Étude & Audit", "Formations", "Vérifier Certificat", "Conditions Générales"].map(link => (
                  <li key={link}>
                    <Link href="#" className="text-white/80 hover:text-[#FCD116] text-[15px] font-sans transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Latest News */}
            <div>
              <h4 className="text-[20px] font-bold text-white mb-8">Expertise</h4>
              <ul className="space-y-4">
                {["Gestion des Stocks", "Audit Douanier", "Transport Terrestre", "Magasinage", "Chaîne d'Approvisionnement"].map(link => (
                  <li key={link}>
                    <Link href="#" className="text-white/80 hover:text-[#FCD116] text-[15px] font-sans transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side Container (Form) */}
        <div className="lg:w-[35%] relative mt-12 lg:mt-0 lg:-mt-16">
          <div className="bg-[#F2F5F9] p-10 sm:p-14 h-full shadow-2xl relative z-20 border-t-4 border-[#CE1126]">
            <form className="space-y-10 text-[#0A3123]" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[17px] font-bold mb-4">Nom Complet:</label>
                  <input type="text" placeholder="Votre nom" className="w-full bg-transparent border-b border-gray-300 pb-3 text-[14px] font-medium text-gray-600 focus:outline-none focus:border-[#0A3123] transition-colors placeholder-gray-400" />
                </div>
                <div>
                  <label className="block text-[17px] font-bold mb-4">Téléphone:</label>
                  <input type="text" placeholder="+224 ..." className="w-full bg-transparent border-b border-gray-300 pb-3 text-[14px] font-medium text-gray-600 focus:outline-none focus:border-[#0A3123] transition-colors placeholder-gray-400" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[17px] font-bold mb-4">Service Requis:</label>
                  <div className="relative">
                    <select className="w-full bg-transparent border-b border-gray-300 pb-3 text-[14px] font-medium text-gray-600 focus:outline-none focus:border-[#0A3123] transition-colors appearance-none pr-6 cursor-pointer">
                      <option>Conseil</option>
                      <option>Audit</option>
                      <option>Formation</option>
                    </select>
                    <div className="absolute right-0 top-1/2 -translate-y-[80%] pointer-events-none">
                      <svg className="w-4 h-4 text-[#0A3123]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-[17px] font-bold mb-4">Entreprise:</label>
                  <input type="text" placeholder="Nom de l'entreprise" className="w-full bg-transparent border-b border-gray-300 pb-3 text-[14px] font-medium text-gray-600 focus:outline-none focus:border-[#0A3123] transition-colors placeholder-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-[17px] font-bold mb-4">Détails de la Demande:</label>
                <textarea placeholder="Votre message..." rows={4} className="w-full bg-transparent border-b border-gray-300 pb-3 text-[14px] font-medium text-gray-600 focus:outline-none focus:border-[#0A3123] transition-colors resize-none placeholder-gray-400"></textarea>
              </div>

              <div className="pt-2">
                <button type="submit" className="bg-[#CE1126] hover:bg-[#A90D1E] text-white text-[14px] font-bold px-10 py-4 transition-colors tracking-wide shadow-md w-full sm:w-auto">
                  Envoyer la Demande
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="w-[95%] max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-white/80 text-[14px] font-sans">
          Tous Droits Réservés &copy; {new Date().getFullYear()} Cabinet Guilogtrans
        </p>
        
        <div className="flex items-center gap-8">
          <span className="text-white/90 text-[15px] font-medium hidden sm:block">Réseaux Sociaux :</span>
          <div className="flex items-center gap-3">
            {[
              { 
                label: "Facebook", 
                url: "#",
                path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              },
              { 
                label: "X (Twitter)", 
                url: "#",
                path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              },
              { 
                label: "Instagram", 
                url: "#",
                path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
              },
              { 
                label: "LinkedIn", 
                url: "#",
                path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              }
            ].map((social, idx) => (
              <a key={idx} href={social.url} aria-label={social.label} className="w-9 h-9 rounded-full bg-[#CE1126] flex items-center justify-center hover:bg-white hover:text-[#CE1126] transition-colors text-white shadow-sm">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="w-10 h-10 ml-2 bg-[#FCD116] flex items-center justify-center hover:bg-[#CE1126] hover:text-white transition-colors shadow-sm text-[#0A3123]"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
