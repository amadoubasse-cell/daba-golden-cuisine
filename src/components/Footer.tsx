import React from 'react';
import { Utensils, Instagram, Facebook, Twitter, Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Utensils className="text-primary w-6 h-6" />
              <span className="text-lg font-bold gold-text">DABA BOU SERIGNE BABACAR</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              Le rendez-vous incontournable de la haute gastronomie sénégalaise. Tradition, passion et élégance à chaque bouchée.
            </p>
            <div className="flex gap-4">
              <Instagram className="w-5 h-5 text-zinc-400 hover:text-primary cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-zinc-400 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-zinc-400 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Liens Rapides</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Accueil</a></li>
              <li><a href="#menu" className="hover:text-primary transition-colors">Notre Menu</a></li>
              <li><a href="#reservation" className="hover:text-primary transition-colors">Réservations</a></li>
              <li><a href="#events" className="hover:text-primary transition-colors">Événements</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Nous Contacter</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Almadies, Rue des Jardins, Dakar</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>+221 33 800 00 00</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>contact@dabarestaurant.sn</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Horaires</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li>Lun - Ven: 12h00 - 23h00</li>
              <li>Sam - Dim: 13h00 - 00h00</li>
              <li className="text-primary">Fermé les jours fériés</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 text-center text-zinc-600 text-xs">
          <p>© {new Date().getFullYear()} Daba bou serigne Babacar. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};