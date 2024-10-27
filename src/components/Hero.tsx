import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <div className="relative h-full">
          <img
            src="https://images.unsplash.com/photo-1541108564883-bde8e501a874?auto=format&fit=crop&q=80"
            alt="Luxury Perfume"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-secondary/40" />
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="text-accent" size={24} />
          <span className="text-accent font-medium">Luxury Fragrances</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
          Discover Your<br />Perfect Scent
        </h1>
        <p className="text-xl mb-8 max-w-xl text-light">
          Indulge in our exclusive collection of premium fragrances, where each scent tells a unique story.
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-primary px-8 py-3 rounded-full font-medium flex items-center space-x-2 hover:bg-light transition-colors">
            <span>Explore Collection</span>
            <ArrowRight size={20} />
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}