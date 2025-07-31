import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <motion.section
      className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20 md:py-32 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <BookOpen className="w-20 h-20 mx-auto mb-6 text-blue-300" />
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Descubre tu Próxima Gran Lectura
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-10 text-blue-100 font-light"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Sumérgete en un mundo de historias, conocimiento y aventura.
          </motion.p>
          <motion.button
            className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-bold rounded-full shadow-lg hover:bg-blue-100 transition-all duration-300 transform hover:scale-105"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5, type: "spring", stiffness: 200 }}
          >
            Explorar Libros <ArrowRight className="ml-2 w-5 h-5" />
          </motion.button>
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-20"></div>
    </motion.section>
  );
};

export default HeroSection;