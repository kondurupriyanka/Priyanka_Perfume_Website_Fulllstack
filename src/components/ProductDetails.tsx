import { useState } from 'react';
import { Star, Heart, Share2, Minus, Plus, ShoppingBag } from 'lucide-react';

export default function ProductDetails({ 
  product = {
    name: "Rose Elegance",
    price: "$199",
    rating: 5,
    description: "A sophisticated blend of Bulgarian rose and jasmine",
    longDescription: "Experience the timeless elegance of Bulgarian rose combined with the delicate sweetness of jasmine. This luxurious fragrance opens with fresh citrus notes, evolving into a heart of rose and jasmine, and settling into a warm base of vanilla and musk.",
    images: [
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&q=80"
    ]
  }
}) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square rounded-lg overflow-hidden ${
                  selectedImage === index ? 'ring-2 ring-primary' : ''
                }`}
              >
                <img src={image} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-serif font-bold mb-4">{product.name}</h1>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center">
              {[...Array(product.rating)].map((_, i) => (
                <Star key={i} size={20} className="fill-primary text-primary" />
              ))}
            </div>
            <span className="text-gray-600">(124 reviews)</span>
          </div>

          <p className="text-2xl font-semibold text-primary mb-6">{product.price}</p>
          
          <p className="text-gray-600 mb-8">{product.longDescription}</p>

          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center border rounded-full">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 hover:text-primary"
              >
                <Minus size={20} />
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 hover:text-primary"
              >
                <Plus size={20} />
              </button>
            </div>

            <button className="flex-1 bg-gradient-primary text-white px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
              <ShoppingBag size={20} />
              Add to Cart
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-gray-600 hover:text-primary">
              <Heart size={20} />
              Add to Wishlist
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-primary">
              <Share2 size={20} />
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}