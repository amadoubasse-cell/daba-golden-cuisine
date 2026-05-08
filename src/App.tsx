import React from 'react';
import { Toaster } from 'sonner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SpecialOffers } from './components/SpecialOffers';
import { MenuSection } from './components/Menu';
import { ReservationForm } from './components/ReservationForm';
import { Chefs } from './components/Chefs';
import { Events } from './components/Events';
import { Reviews } from './components/Reviews';
import { Footer } from './components/Footer';
import { MapPin } from 'lucide-react';
import { CartProvider } from './context/CartContext';
import { CartSheet } from './components/CartSheet';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-black text-white selection:bg-[#D4AF37]/30 selection:text-[#D4AF37]">
        <style>{`
          .gold-text {
            color: #D4AF37;
            background: linear-gradient(to right, #D4AF37, #F9E29C, #B8860B);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .gold-border {
            border: 1px solid transparent;
            background-image: linear-gradient(black, black), linear-gradient(to right, #D4AF37, #B8860B);
            background-origin: border-box;
            background-clip: padding-box, border-box;
          }
          html {
            scroll-behavior: smooth;
          }
        `}</style>
        <Navbar />
        <main>
          <Hero />
          <SpecialOffers />
          <MenuSection />
          
          <ReservationForm />
          
          <Chefs />
          
          <Events />
          
          <Reviews />
          
          <section className="py-24 bg-zinc-900">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Où nous <span className="gold-text">Trouver</span></h2>
                <div className="flex items-center justify-center gap-2 text-zinc-400">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" />
                  <span>Almadies, Dakar, Sénégal</span>
                </div>
              </div>
              
              <div className="rounded-3xl overflow-hidden h-[450px] border border-zinc-800 shadow-2xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15433.80528652011!2d-17.5144368!3d14.7431114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec1132179836561%3A0xb7151121d4d8c0b8!2sAlmadies%2C%20Dakar!5e0!3m2!1sfr!2ssn!4v1700000000000!5m2!1sfr!2ssn" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <CartSheet />
        <Toaster position="bottom-right" theme="dark" richColors />
      </div>
    </CartProvider>
  );
}

export default App;