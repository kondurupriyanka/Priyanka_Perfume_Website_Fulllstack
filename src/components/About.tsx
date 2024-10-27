import { Heart, Award, Star } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Heart className="text-primary" size={24} />,
      title: "Crafted with Love",
      description: "Each fragrance is carefully composed with passion and dedication."
    },
    {
      icon: <Award className="text-primary" size={24} />,
      title: "Premium Quality",
      description: "We use only the finest ingredients sourced globally."
    },
    {
      icon: <Star className="text-primary" size={24} />,
      title: "Expert Perfumers",
      description: "Created by world-renowned master perfumers."
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1583467875263-d0dec5617511?auto=format&fit=crop&q=80"
              alt="About Us"
              className="rounded-lg shadow-lg col-span-2"
            />
            <img
              src="https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&q=80"
              alt="Perfume Creation"
              className="rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1585650352255-4f3ea7c8722d?auto=format&fit=crop&q=80"
              alt="Luxury Perfumes"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-serif font-bold mb-6 text-gradient">Our Story</h2>
            <p className="text-gray-600 mb-6">
              For over two decades, PRIYA has been crafting exceptional fragrances that capture the essence of luxury and sophistication. Each perfume is a masterpiece, carefully composed using the finest ingredients sourced from around the world.
            </p>
            <p className="text-gray-600 mb-8">
              Our passion for perfumery drives us to create unique scents that become an integral part of your personal story. We believe that every fragrance should be an expression of individuality and elegance.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-medium mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            <button className="bg-gradient-primary text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}