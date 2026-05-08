import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingBag } from 'lucide-react';

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/2fd83ee5-2d1a-4666-bcf3-02cdd519877b/thieboudienne-hero-3918aea6-1778262731349.webp')` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h4 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#D4AF37] font-medium tracking-widest uppercase mb-4"
        >
          L'Excellence de la Cuisine Sénégalaise
        </motion.h4>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-8xl font-bold mb-6 leading-tight"
        >
          Daba bou <span className="gold-text">serigne Babacar</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10"
        >
          Plongez dans un voyage culinaire authentique où la tradition rencontre le raffinement. Découvrez les saveurs uniques du Sénégal au cœur de notre table.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <Button 
            size="lg" 
            className="bg-[#D4AF37] text-black hover:bg-[#D4AF37]/90 text-lg px-8 h-14 font-bold"
            onClick={() => scrollToSection('menu')}
          >
            <ShoppingBag className="mr-2 w-5 h-5" />
            Commander en Ligne
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white/10 text-lg px-8 h-14"
            onClick={() => scrollToSection('reservation')}
          >
            Réserver une Table <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>

      {/* Decorative scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-[#D4AF37]/50 rounded-full flex justify-center p-1"
      >
        <div className="w-1 h-2 bg-[#D4AF37] rounded-full" />
      </motion.div>
    </section>
  );
};