import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Calendar, Users, Clock } from 'lucide-react';

export const ReservationForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Votre demande de réservation a été envoyée ! Nous vous contacterons bientôt.");
  };

  return (
    <section id="reservation" className="py-24 bg-black relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
          <div className="md:w-1/2 p-12 bg-zinc-900">
            <h2 className="text-3xl font-bold mb-6">Réserver une <span className="gold-text">Table</span></h2>
            <p className="text-zinc-400 mb-8">Partagez un moment inoubliable avec nous. Réservez en ligne pour garantir votre place.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <div className="relative">
                    <Input id="date" type="date" className="bg-zinc-800 border-zinc-700 pl-10" required />
                    <Calendar className="absolute left-3 top-2.5 w-4 h-4 text-zinc-500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Heure</Label>
                  <div className="relative">
                    <Input id="time" type="time" className="bg-zinc-800 border-zinc-700 pl-10" required />
                    <Clock className="absolute left-3 top-2.5 w-4 h-4 text-zinc-500" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="guests">Nombre de personnes</Label>
                <div className="relative">
                  <Select required>
                    <SelectTrigger className="bg-zinc-800 border-zinc-700 pl-10">
                      <SelectValue placeholder="Choisir..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Personne</SelectItem>
                      <SelectItem value="2">2 Personnes</SelectItem>
                      <SelectItem value="4">4 Personnes</SelectItem>
                      <SelectItem value="6">6 Personnes</SelectItem>
                      <SelectItem value="8+">Plus de 8</SelectItem>
                    </SelectContent>
                  </Select>
                  <Users className="absolute left-3 top-2.5 w-4 h-4 text-zinc-500 z-10" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Nom complet</Label>
                <Input id="name" placeholder="Votre nom" className="bg-zinc-800 border-zinc-700" required />
              </div>

              <Button type="submit" className="w-full bg-primary text-black hover:bg-primary/90 h-12 text-lg font-bold">
                Confirmer la réservation
              </Button>
            </form>
          </div>
          
          <div className="md:w-1/2 relative min-h-[400px]">
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/2fd83ee5-2d1a-4666-bcf3-02cdd519877b/restaurant-interior-afc4f84d-1778262731468.webp" 
              alt="Restaurant interior" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-12">
              <div>
                <p className="text-primary font-bold mb-2 italic">"Une expérience culinaire qui raconte l'histoire du Sénégal."</p>
                <p className="text-white text-sm">— Chef Daba</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};