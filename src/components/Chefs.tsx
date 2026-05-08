import React from 'react';
import { motion } from 'framer-motion';

const chefs = [
  {
    name: "Chef Daba",
    role: "Chef Exécutif",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/2fd83ee5-2d1a-4666-bcf3-02cdd519877b/chef-daba-dc5ed6a5-1778262732453.webp",
    bio: "Avec plus de 20 ans d'expérience, Chef Daba revisite les classiques sénégalais avec une touche de modernité."
  },
  {
    name: "Awa Seck",
    role: "Chef Pâtissière",
    image: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&q=80&w=800",
    bio: "Spécialiste des douceurs locales, Awa transforme les fruits tropicaux en desserts d'exception."
  }
];

export const Chefs = () => {
  return (
    <section id="chefs" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nos <span className="gold-text">Maîtres</span> Culinaires</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {chefs.map((chef, index) => (
            <motion.div
              key={chef.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[3/4]">
                <img src={chef.image} alt={chef.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{chef.name}</h3>
              <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">{chef.role}</p>
              <p className="text-zinc-400">{chef.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};