import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Fatou Diop",
    text: "Le meilleur Thieboudienne que j'ai mangé à Dakar. Le cadre est magnifique et le service est irréprochable.",
    rating: 5
  },
  {
    name: "Moussa Sow",
    text: "Une expérience gastronomique incroyable. Les saveurs sont authentiques et la présentation est moderne.",
    rating: 5
  },
  {
    name: "Sarah Johnson",
    text: "Beautiful atmosphere and the food is delicious. Highly recommend the Yassa Chicken!",
    rating: 4
  }
];

export const Reviews = () => {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">Ce que nos <span className="gold-text">Clients</span> disent</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 relative">
              <Quote className="text-primary/20 w-12 h-12 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-primary fill-primary' : 'text-zinc-700'}`} />
                ))}
              </div>
              <p className="text-zinc-300 mb-6 italic">"{review.text}"</p>
              <p className="font-bold text-white">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};