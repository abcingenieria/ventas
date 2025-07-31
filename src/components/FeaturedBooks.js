import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const featuredBooks = [
  {
    id: 1,
    title: 'El Misterio del Faro',
    author: 'Ana García',
    image: 'https://via.placeholder.com/150x220/60A5FA/FFFFFF?text=Libro+1',
    rating: 5,
    price: '19.99€',
  },
  {
    id: 2,
    title: 'Viaje al Centro del Alma',
    author: 'Carlos Ruiz',
    image: 'https://via.placeholder.com/150x220/8B5CF6/FFFFFF?text=Libro+2',
    rating: 4,
    price: '22.50€',
  },
  {
    id: 3,
    title: 'La Última Profecía',
    author: 'Sofía Hernández',
    image: 'https://via.placeholder.com/150x220/EC4899/FFFFFF?text=Libro+3',
    rating: 5,
    price: '18.00€',
  },
  {
    id: 4,
    title: 'Código Secreto',
    author: 'David López',
    image: 'https://via.placeholder.com/150x220/10B981/FFFFFF?text=Libro+4',
    rating: 4,
    price: '25.00€',
  },
];

const BookCard = ({ book, index }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
    >
      <img src={book.image} alt={book.title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{book.title}</h3>
        <p className="text-gray-600 text-sm mb-3">{book.author}</p>
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < book.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">{book.price}</span>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300">
            Comprar
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedBooks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Libros Destacados
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredBooks.map((book, index) => (
            <BookCard key={book.id} book={book} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;