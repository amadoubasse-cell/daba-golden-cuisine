import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { useCart } from '@/context/CartContext';
import { ShoppingBag } from 'lucide-react';

const menuItems = [
  {
    id: 1,
    category: 'principaux',
    name: 'Thieboudienne Rouge',
    description: "Le plat national : riz rouge aux légumes frais, poisson fumé et épices traditionnelles.",
    price: '15.000 FCFA',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/2fd83ee5-2d1a-4666-bcf3-02cdd519877b/thieboudienne-hero-3918aea6-1778262731349.webp',
    tags: ['Signature', 'Épicé']
  },
  {
    id: 2,
    category: 'principaux',
    name: 'Yassa Poulet',
    description: "Poulet mariné au citron et à l'oignon, servi with du riz blanc étuvé.",
    price: '12.000 FCFA',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/2fd83ee5-2d1a-4666-bcf3-02cdd519877b/yassa-special-ef192bf2-1778262730799.webp',
    tags: ['Authentique']
  },
  {
    id: 3,
    category: 'principaux',
    name: 'Maafe Royal',
    description: "Sauce onctueuse à base de pâte d'arachide avec viande de bœuf et légumes.",
    price: '13.500 FCFA',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/2fd83ee5-2d1a-4666-bcf3-02cdd519877b/maafe-dish-1-bb56f23f-1778262730509.webp',
    tags: ['Favori']
  },
  {
    id: 5,
    category: 'desserts',
    name: 'Thiakry Gourmand',
    description: "Couscous de mil mélangé avec du lait caillé frais, muscade et vanille.",
    price: '5.000 FCFA',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800',
    tags: ['Sucré']
  },
  {
    id: 6,
    category: 'boissons',
    name: 'Jus de Bissap',
    description: "Boisson rafraîchissante à base de fleurs d'hibiscus séchées et de menthe.",
    price: '3.000 FCFA',
    image: 'https://images.unsplash.com/photo-1544145945-f904253d0c7b?auto=format&fit=crop&q=80&w=800',
    tags: ['Maison']
  }
];

export const MenuSection = () => {
  const { addToCart } = useCart();

  const handleOrder = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image
    });
    toast.success(`${item.name} ajouté au panier !`);
  };

  return (
    <section id="menu" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Notre <span className="gold-text">Menu</span> Gastronomique</h2>
          <p className="text-zinc-400">Découvrez une sélection raffinée de nos meilleurs plats traditionnels.</p>
        </div>

        <Tabs defaultValue="tous" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-zinc-900 border border-zinc-800 p-1">
              <TabsTrigger value="tous" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black">Tous</TabsTrigger>
              <TabsTrigger value="principaux" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black">Plats</TabsTrigger>
              <TabsTrigger value="desserts" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black">Desserts</TabsTrigger>
              <TabsTrigger value="boissons" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black">Boissons</TabsTrigger>
            </TabsList>
          </div>

          <AnimatePresence mode="wait">
            <TabsContent value="tous">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuItems.map((item) => (
                  <MenuCard key={item.id} item={item} onOrder={() => handleOrder(item)} />
                ))}
              </div>
            </TabsContent>
            {['principaux', 'desserts', 'boissons'].map((cat) => (
              <TabsContent key={cat} value={cat}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {menuItems.filter(i => i.category === cat).map((item) => (
                    <MenuCard key={item.id} item={item} onOrder={() => handleOrder(item)} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
};

const MenuCard = ({ item, onOrder }: { item: any, onOrder: () => void }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-[#D4AF37]/30 transition-all group"
  >
    <div className="relative h-56 overflow-hidden">
      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute top-4 left-4 flex gap-2">
        {item.tags.map((tag: string) => (
          <Badge key={tag} className="bg-black/50 backdrop-blur-sm text-[#D4AF37] border-[#D4AF37]/30">{tag}</Badge>
        ))}
      </div>
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-white">{item.name}</h3>
        <span className="text-[#D4AF37] font-bold">{item.price}</span>
      </div>
      <p className="text-zinc-400 text-sm mb-6 line-clamp-2">{item.description}</p>
      <Button 
        onClick={onOrder}
        className="w-full bg-zinc-800 hover:bg-[#D4AF37] hover:text-black border border-zinc-700 transition-colors flex items-center gap-2 group/btn"
      >
        <ShoppingBag className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
        Commander
      </Button>
    </div>
  </motion.div>
);