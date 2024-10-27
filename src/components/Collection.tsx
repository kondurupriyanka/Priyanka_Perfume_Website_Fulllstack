import { useState } from 'react';
import { ChevronRight, Star } from 'lucide-react';

export default function Collection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Collections' },
    { id: 'floral', name: 'Floral' },
    { id: 'oriental', name: 'Oriental' },
    { id: 'fresh', name: 'Fresh' },
    { id: 'luxury', name: 'Luxury' }
  ];

  const perfumes = [
    {
      name: "Rose Elegance",
      price: "$199",
      category: "floral",
      rating: 5,
      description: "A sophisticated blend of Bulgarian rose and jasmine",
      image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80"
    },
    {
      name: "Ocean Breeze",
      price: "$189",
      category: "fresh",
      rating: 4,
      description: "Fresh marine notes with citrus undertones",
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80"
    },
    {
      name: "Midnight Mystery",
      price: "$209",
      category: "oriental",
      rating: 5,
      description: "Exotic vanilla and warm amber notes",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&q=80"
    },
    {
      name: "Golden Iris",
      price: "$229",
      category: "luxury",
      rating: 5,
      description: "Luxurious iris with powdery notes",
      image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80"
    },
    {
      name: "Velvet Oud",
      price: "$259",
      category: "oriental",
      rating: 4,
      description: "Rich oud wood with royal vanilla",
      image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&q=80"
    },
    {
      name: "Citrus Symphony",
      price: "$179",
      category: "fresh",
      rating: 4,
      description: "Vibrant blend of Mediterranean citrus",
      image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6f?auto=format&fit=crop&q=80"
    },
    {
      name: "Purple Rain",
      price: "$289",
      category: "luxury",
      rating: 5,
      description: "Lavender and violet with precious woods",
      image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&q=80"
    },
    {
      name: "Pink Paradise",
      price: "$249",
      category: "floral",
      rating: 5,
      description: "Sweet peonies and delicate rose petals",
      image: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?auto=format&fit=crop&q=80"
    },
    {
      name: "Royal Jasmine",
      price: "$239",
      category: "luxury",
      rating: 5,
      description: "Pure jasmine with white musk",
      image: "https://images.unsplash.com/photo-1592914610354-fd354ea45e48?auto=format&fit=crop&q=80"
    }
  ];

  const filteredPerfumes = activeCategory === 'all' 
    ? perfumes 
    : perfumes.filter(perfume => perfume.category === activeCategory);

  return (
    <section id="collection" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif font-bold text-center mb-4 text-gradient">Our Collection</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Discover our exquisite range of fragrances, each carefully crafted to evoke emotion and create lasting memories.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? 'bg-gradient-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-primary/10'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPerfumes.map((perfume, index) => (
            <div key={index} className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative overflow-hidden">
                <img
                  src={perfume.image}
                  alt={perfume.name}
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-medium">{perfume.name}</h3>
                  <div className="flex items-center">
                    {[...Array(perfume.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{perfume.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-semibold text-lg">{perfume.price}</span>
                  <button className="flex items-center space-x-2 text-white bg-gradient-primary px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
                    <span>View Details</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}