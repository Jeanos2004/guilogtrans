"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export function SiteLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Chaque fois que l'URL change (ou au premier chargement), on déclenche le loader
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Durée du loader (1.5s)
    
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] bg-[var(--color-primary)] flex items-center justify-center flex-col"
        >
          <div className="relative w-16 h-24 flex flex-col items-center justify-end">
            {/* Boîte tombante (celle du haut) */}
            <motion.div
              animate={{ 
                y: [0, -40, 0], 
                rotate: [45, 135, 225] 
              }}
              transition={{ 
                duration: 1, 
                repeat: Infinity, 
                ease: "easeInOut",
                times: [0, 0.5, 1]
              }}
              className="w-8 h-8 bg-[var(--color-accent)] absolute top-2"
              style={{ originX: 0.5, originY: 0.5 }}
            />
            
            {/* Boîte fixe (celle du bas) */}
            <motion.div 
              animate={{
                scaleY: [1, 0.8, 1],
                y: [0, 4, 0]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.5, 1]
              }}
              className="w-8 h-8 bg-[var(--color-accent)] absolute bottom-4"
            />
            
            {/* Ombre portée */}
            <motion.div
              animate={{ 
                scale: [1, 0.7, 1], 
                opacity: [0.5, 0.2, 0.5] 
              }}
              transition={{ 
                duration: 1, 
                repeat: Infinity, 
                ease: "easeInOut",
                times: [0, 0.5, 1]
              }}
              className="w-12 h-1.5 bg-black/40 rounded-[100%] absolute bottom-0 blur-[2px]"
            />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-[var(--color-accent)] font-heading font-bold uppercase tracking-[0.2em] text-sm"
          >
            Chargement...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
