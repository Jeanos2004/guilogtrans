"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MapPin, Package, Calendar, Phone, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/a-propos" },
  { name: "Nos Services", href: "/services" },
  { name: "Formations", href: "/formations" },
  { name: "Galerie", href: "/galerie" },
  { name: "Actualités", href: "/actualites" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";

  const headerClasses = cn(
    "w-full z-50 transition-all duration-300 ease-in-out",
    isHome
      ? isScrolled
        ? "sticky top-0 bg-[#0d2d38] shadow-lg text-white"
        : "absolute top-0 left-0 bg-transparent text-white border-b border-white/10"
      : "sticky top-0 bg-[#0d2d38] text-white shadow-md border-b border-[#0d2d38]"
  );

  return (
    <header className={headerClasses}>
      {/* === TOP BAR === */}
      <div className="hidden lg:block border-b border-white/10 text-white/90 text-[13px] font-sans">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-2.5">
          {/* Left: Address */}
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#FCD116]" />
            <span className="opacity-90">No: 58 A, Lambanyi-marché Transversal enco5, Conakry</span>
          </div>

          {/* Right: Info */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 border-r border-white/20 pr-6">
              <Package className="w-4 h-4 text-[#FCD116]" />
              <span className="opacity-90">Suivre votre commande</span>
            </div>
            <div className="flex items-center gap-2 border-r border-white/20 pr-6">
              <Calendar className="w-4 h-4 text-[#FCD116]" />
              <span className="opacity-90">Lun - Sam : 8h - 17h</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#FCD116]" />
              <span className="opacity-90">+224 626 62 51 62</span>
            </div>
          </div>
        </div>
      </div>

      {/* === MAIN NAV === */}
      <nav className="w-full transition-all duration-300">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[80px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 bg-[#CE1126] rounded-sm flex items-center justify-center transform hover:scale-105 transition-transform">
                <ArrowUpRight className="w-6 h-6 text-[#0d2d38] stroke-[2.5]" />
              </div>
              <span className="text-3xl font-bold text-white tracking-tight">Guilog</span>
            </Link>

            {/* Desktop menu & CTA */}
            <div className="hidden lg:flex items-center h-full">
              <div className="flex items-center gap-8 mr-12">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href || (link.href === '/' && pathname === '/');
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={cn(
                        "text-[15px] font-sans transition-colors relative hover:text-[#CE1126]",
                        isActive ? "text-[#CE1126]" : "text-white"
                      )}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              {/* Slanted CTA Button */}
              <Link
                href="/contact"
                className="h-[80px] px-10 bg-[#CE1126] hover:bg-[#A90D1E] text-white font-sans text-[15px] transition-colors flex items-center justify-center"
                style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)" }}
              >
                Obtenir un devis !
              </Link>
              
              {/* Hamburger Icon next to CTA */}
              <button className="ml-8 text-white hover:text-[#CE1126]">
                <Menu className="w-8 h-8" strokeWidth={1.5} />
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white/80 hover:text-white border border-white/20 hover:border-white transition-colors"
              aria-label="Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-[#0d2d38] border-t border-white/10 shadow-xl absolute left-0 right-0 w-full z-40">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-4 py-3 text-[14px] border-l-4 transition-all",
                      isActive
                        ? "border-[#CE1126] text-[#CE1126] bg-black/10"
                        : "border-transparent text-white/70 hover:border-[#CE1126] hover:text-white hover:bg-white/5"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-3 border-t border-white/10">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center py-3 bg-[#CE1126] hover:bg-[#A90D1E] text-white text-[14px] transition-all duration-300"
                >
                  Obtenir un devis !
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
