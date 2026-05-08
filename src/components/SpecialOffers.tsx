import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const offers = [
  {
    id: 1,
    title: "Menu Teranga",
    description: "Une dégustation complète de nos meilleurs plats pour deux personnes.",
    price: "45.000 FCFA",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/2fd83ee5-2d1a-4666-bcf3-02cdd519877b/yassa-special-ef192bf2-1778262730799.webp",
    tag: "Populaire"
  },
  {
    id: 2,
    title: "Happy Hour Dakar",
    description: "Tous les soirs de 18h à 20h, cocktails à base de Bissap offerts.",
    price: "Offre",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/2fd83ee5-2d1a-4666-bcf3-02cdd519877b/fataya-appetizer-569ee622-1778262730478.webp",
    tag: "Événement"
  },
  {
    id: 3,
    title: "Spécial Maafe",
    description: "Notre célèbre Maafe royal avec riz parfumé, servi tous les vendredis.",
    price: "12.000 FCFA",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/2fd83ee5-2d1a-4666-bcf3-02cdd519877b/maafe-dish-1-bb56f23f-1778262730509.webp",
    tag: "Saisonnier"
  }
];

export const SpecialOffers = () => {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Offres <span className="gold-text">Spéciales</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-zinc-900 border-zinc-800 overflow-hidden group hover:border-primary/50 transition-all duration-300">
                <div className="relative h-64">
                  <img src={offer.image} alt={offer.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <Badge className="absolute top-4 right-4 bg-primary text-black">{offer.tag}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{offer.title}</h3>
                  <p className="text-zinc-400 mb-4">{offer.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold text-lg">{offer.price}</span>
                    <button className="text-sm font-medium hover:underline text-primary">Détails</button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};