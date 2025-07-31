import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Search } from 'lucide-react';

const CallToAction = () => {
  return (
    <motion.section
      className="bg-gradient-to-br from-blue-700 to-purple-800 text-white py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6 drop-shadow-lg"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          ¿No encuentras lo que buscas?
        </motion.h2>
        <motion.p
          className="text-lg mb-10 text-blue-200 font-light max-w-2xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Explora nuestro catálogo completo o suscríbete a nuestro boletín para recibir las últimas novedades y ofertas exclusivas.
        </motion.p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button
            className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-bold rounded-full shadow-lg hover:bg-blue-100 transition-all duration-300 transform hover:scale-105"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5, type: "spring", stiffness: 200 }}
          >
            <Search className="mr-2 w-5 h-5" /> Ver Catálogo
          </motion.button>
          <motion.button
            className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full shadow-lg hover:bg-white hover:text-blue-700 transition-all duration-300 transform hover:scale-105"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5, type: "spring", stiffness: 200 }}
          >
            <Mail className="mr-2 w-5 h-5" /> Suscribirse
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default CallToAction;