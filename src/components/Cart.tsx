import { useState } from 'react';
import { X, ShoppingBag, Plus, Minus } from 'lucide-react';

export default function Cart({ isOpen, onClose }) {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Rose Elegance",
      price: 199,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80"
    }
  ]);

  const updateQuantity = (id: number, change: number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(0, item.quantity + change);
        return newQuantity === 0 ? null : { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(Boolean));
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      
      <div className="absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-2">
            <ShoppingBag size={24} />
            <h2 className="text-xl font-medium">Shopping Cart</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:text-primary">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.map(item => (
            <div key={item.id} className="flex gap-4 py-4 border-b">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-primary font-medium">${item.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="p-1 hover:text-primary"
                  >
                    <Minus size={16} />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="p-1 hover:text-primary"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
              <button
                onClick={() => updateQuantity(item.id, -item.quantity)}
                className="p-2 hover:text-primary"
              >
                <X size={20} />
              </button>
            </div>
          ))}
        </div>

        <div className="border-t p-6">
          <div className="flex justify-between mb-4">
            <span className="font-medium">Total</span>
            <span className="font-medium">${total}</span>
          </div>
          <button className="w-full bg-gradient-primary text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}