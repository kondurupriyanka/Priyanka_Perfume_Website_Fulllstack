import { Menu, ShoppingBag, User, X, Search } from 'lucide-react';
import { useState } from 'react';
import Cart from './Cart';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-serif font-bold text-gradient">PRIYA</h1>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <a href="#home" className="hover:text-primary transition-colors">Home</a>
                <a href="#collection" className="hover:text-primary transition-colors">Collection</a>
                <a href="#about" className="hover:text-primary transition-colors">About</a>
                <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <button className="p-2 hover:text-primary transition-colors">
                <Search size={20} />
              </button>
              <button className="p-2 hover:text-primary transition-colors">
                <User size={20} />
              </button>
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 hover:text-primary transition-colors"
              >
                <ShoppingBag size={20} />
                <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-primary text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  1
                </span>
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="p-2">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 hover:bg-primary/10 hover:text-primary rounded-md">Home</a>
              <a href="#collection" className="block px-3 py-2 hover:bg-primary/10 hover:text-primary rounded-md">Collection</a>
              <a href="#about" className="block px-3 py-2 hover:bg-primary/10 hover:text-primary rounded-md">About</a>
              <a href="#contact" className="block px-3 py-2 hover:bg-primary/10 hover:text-primary rounded-md">Contact</a>
            </div>
          </div>
        )}
      </nav>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}