import React from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export const Events = () => {
  return (
    <section id="events" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Vos Événements <span className="gold-text">Privés</span></h2>
            <p className="text-zinc-400 mb-8 text-lg leading-relaxed">
              Qu'il s'agisse d'un mariage, d'un anniversaire ou d'un événement d'entreprise, nous mettons à votre disposition notre savoir-faire et notre cadre élégant pour faire de votre occasion un moment unique.
            </p>
            <ul className="space-y-4 mb-10">
              {["Menu sur mesure", "Privatisation de salle", "Service traiteur complet", "Ambiance musicale traditionnelle"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span className="text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>
            <Button 
              onClick={() => toast.info("Contactez-nous au +221 XX XXX XX XX pour vos devis.")}
              className="bg-primary text-black hover:bg-primary/90 px-8"
            >
              Demander un devis
            </Button>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800" alt="Event 1" className="rounded-2xl h-64 w-full object-cover" />
            <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800" alt="Event 2" className="rounded-2xl h-64 w-full object-cover mt-12" />
          </div>
        </div>
      </div>
    </section>
  );
};