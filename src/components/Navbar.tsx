import React, { useState, useEffect } from 'react';
import { Menu, X, Utensils, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Badge } from '@/components/ui/badge';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Menu', href: '#menu' },
    { name: 'Réservation', href: '#reservation' },
    { name: 'Nos Chefs', href: '#chefs' },
    { name: 'Événements', href: '#events' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-[#D4AF37]/20 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Utensils className="text-[#D4AF37] w-8 h-8" />
          <span className="text-xl font-bold tracking-tighter gold-text">
            DABA BOU SERIGNE BABACAR
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium hover:text-[#D4AF37] transition-colors">
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsOpen(true)}
              className="relative p-2 text-white hover:text-[#D4AF37] transition-colors"
            >
              <ShoppingBag className="w-6 h-6" />
              {totalItems > 0 && (
                <Badge className="absolute -top-1 -right-1 bg-[#D4AF37] text-black border-none w-5 h-5 flex items-center justify-center p-0 text-[10px] font-bold">
                  {totalItems}
                </Badge>
              )}
            </button>
            <Button 
              onClick={() => setIsOpen(true)}
              variant="outline" 
              className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
            >
              Livraison
            </Button>
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-4">
          <button 
            onClick={() => setIsOpen(true)}
            className="relative p-2 text-white"
          >
            <ShoppingBag className="w-6 h-6" />
            {totalItems > 0 && (
              <Badge className="absolute -top-1 -right-1 bg-[#D4AF37] text-black border-none w-5 h-5 flex items-center justify-center p-0 text-[10px] font-bold">
                {totalItems}
              </Badge>
            )}
          </button>
          <button className="text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-[#D4AF37]/20 p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              {link.name}
            </a>
          ))}
          <Button className="bg-[#D4AF37] text-black w-full" onClick={() => {
            setIsMobileMenuOpen(false);
            setIsOpen(true);
          }}>Commander pour livraison</Button>
        </div>
      )}
    </nav>
  );
};