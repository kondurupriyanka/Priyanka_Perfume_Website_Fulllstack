import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-6 text-gradient">Get in Touch</h2>
          <p className="text-gray-600">
            Have questions about our products? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
              <Phone className="text-primary" size={24} />
            </div>
            <h3 className="font-medium mb-2">Call Us</h3>
            <p className="text-gray-600">(555) 123-4567</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
              <Mail className="text-primary" size={24} />
            </div>
            <h3 className="font-medium mb-2">Email Us</h3>
            <p className="text-gray-600">info@priya.com</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
              <MapPin className="text-primary" size={24} />
            </div>
            <h3 className="font-medium mb-2">Visit Us</h3>
            <p className="text-gray-600">123 Luxury Lane, NY</p>
          </div>
        </div>

        <form className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-primary text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}