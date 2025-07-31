import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-gray-300 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div
          className="flex justify-center space-x-6 mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <a href="#" className="hover:text-white transition-colors duration-300">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-white transition-colors duration-300">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-white transition-colors duration-300">
            <Instagram className="w-6 h-6" />
          </a>
        </motion.div>
        <motion.p
          className="text-sm"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          &copy; {new Date().getFullYear()} BookWorm. Todos los derechos reservados.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;