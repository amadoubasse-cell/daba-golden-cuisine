import React, { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/context/CartContext';
import { Trash2, Plus, Minus, ShoppingBag, Truck } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

export const CartSheet = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems, isOpen, setIsOpen, clearCart } = useCart();
  const [isCheckout, setIsCheckout] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
  });

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      toast.error('Veuillez remplir tous les champs');
      return;
    }
    
    toast.success('Commande reçue ! Nous vous contacterons sous peu pour la livraison.');
    clearCart();
    setIsOpen(false);
    setIsCheckout(false);
    setFormData({ name: '', phone: '', address: '' });
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="bg-zinc-950 border-zinc-800 text-white w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="text-[#D4AF37] flex items-center gap-2 text-2xl">
            <ShoppingBag className="w-6 h-6" />
            {isCheckout ? 'Livraison' : 'Votre Panier'}
          </SheetTitle>
        </SheetHeader>

        <div className="mt-8 flex flex-col h-[calc(100vh-200px)]">
          {!isCheckout ? (
            <>
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center flex-1 text-zinc-500 gap-4">
                  <ShoppingBag className="w-16 h-16 opacity-20" />
                  <p>Votre panier est vide</p>
                  <Button 
                    variant="outline" 
                    className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
                    onClick={() => setIsOpen(false)}
                  >
                    Découvrir le menu
                  </Button>
                </div>
              ) : (
                <>
                  <ScrollArea className="flex-1 pr-4">
                    <div className="space-y-6">
                      {cart.map((item) => (
                        <div key={item.id} className="flex gap-4 group">
                          <div className="relative h-20 w-20 rounded-lg overflow-hidden flex-shrink-0">
                            <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between mb-1">
                              <h4 className="font-medium text-white">{item.name}</h4>
                              <button 
                                onClick={() => removeFromCart(item.id)}
                                className="text-zinc-500 hover:text-red-500 transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                            <p className="text-[#D4AF37] text-sm font-bold mb-2">{item.price}</p>
                            <div className="flex items-center gap-3">
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-7 h-7 flex items-center justify-center rounded-full border border-zinc-700 hover:border-[#D4AF37] text-zinc-400 hover:text-[#D4AF37] transition-colors"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-7 h-7 flex items-center justify-center rounded-full border border-zinc-700 hover:border-[#D4AF37] text-zinc-400 hover:text-[#D4AF37] transition-colors"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                  
                  <div className="mt-auto pt-6 space-y-4">
                    <Separator className="bg-zinc-800" />
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total</span>
                      <span className="text-[#D4AF37]">{totalPrice.toLocaleString()} FCFA</span>
                    </div>
                    <Button 
                      className="w-full bg-[#D4AF37] hover:bg-[#B8860B] text-black h-12 text-lg font-bold flex gap-2"
                      onClick={() => setIsCheckout(true)}
                    >
                      <Truck className="w-5 h-5" />
                      Passer à la livraison
                    </Button>
                  </div>
                </>
              )}
            </>
          ) : (
            <form onSubmit={handleCheckout} className="space-y-6 flex-1">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet</Label>
                  <Input 
                    id="name"
                    placeholder="Votre nom"
                    className="bg-zinc-900 border-zinc-800 focus:border-[#D4AF37]"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input 
                    id="phone"
                    placeholder="Ex: 77 000 00 00"
                    className="bg-zinc-900 border-zinc-800 focus:border-[#D4AF37]"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Adresse de livraison</Label>
                  <Input 
                    id="address"
                    placeholder="Quartier, Rue, N° de maison"
                    className="bg-zinc-900 border-zinc-800 focus:border-[#D4AF37]"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>
              </div>

              <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
                <h5 className="text-sm font-bold text-zinc-400 mb-2 uppercase tracking-wider">Résumé</h5>
                <div className="flex justify-between text-sm mb-1">
                  <span>Articles ({totalItems})</span>
                  <span>{totalPrice.toLocaleString()} FCFA</span>
                </div>
                <div className="flex justify-between text-sm mb-3">
                  <span>Livraison</span>
                  <span className="text-green-500">Gratuite</span>
                </div>
                <Separator className="bg-zinc-800 mb-3" />
                <div className="flex justify-between font-bold text-[#D4AF37]">
                  <span>Total à payer</span>
                  <span>{totalPrice.toLocaleString()} FCFA</span>
                </div>
              </div>

              <div className="mt-auto flex gap-3 pt-6">
                <Button 
                  type="button"
                  variant="outline" 
                  className="flex-1 border-zinc-800 hover:bg-zinc-900 text-white"
                  onClick={() => setIsCheckout(false)}
                >
                  Retour
                </Button>
                <Button 
                  type="submit"
                  className="flex-[2] bg-[#D4AF37] hover:bg-[#B8860B] text-black font-bold"
                >
                  Confirmer la commande
                </Button>
              </div>
            </form>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};