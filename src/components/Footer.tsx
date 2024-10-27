import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">PRIYA</h3>
            <p className="text-white/80">
              Luxury fragrances for the discerning individual.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/80 hover:text-white">Home</a></li>
              <li><a href="#collection" className="text-white/80 hover:text-white">Collection</a></li>
              <li><a href="#about" className="text-white/80 hover:text-white">About</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-white/80">
              <li>123 Luxury Lane</li>
              <li>New York, NY 10001</li>
              <li>Tel: (555) 123-4567</li>
              <li>Email: info@priya.com</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Newsletter</h4>
            <p className="text-white/80 mb-4">Subscribe to receive updates and exclusive offers.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-full bg-white/10 border-0 focus:ring-2 focus:ring-accent placeholder-white/50 text-white"
              />
              <button className="px-6 py-2 bg-white text-primary rounded-r-full hover:bg-accent transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/80">
          <p>&copy; 2024 PRIYA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}