import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Bot, ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div id="home"
        className="absolute inset-0 bg-hero-pattern bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585653621032-a5fec4e6f1c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-50/95 to-primary-100/90"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-800 leading-tight mb-6">
              Unlock the Healing Power of Nature
              <span className="block text-primary-600 mt-2">
                Explore Medicinal Plants with Ayura
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0">
              Discover the ancient wisdom of AYUSH medicinal plants through our interactive platform. Learn, connect, and heal naturally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full text-lg font-medium transition-colors shadow-lg"
              >
                <Leaf className="h-5 w-5" />
                <span>Explore Plants</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 bg-white hover:bg-gray-100 text-primary-700 px-6 py-3 rounded-full text-lg font-medium transition-colors shadow-lg"
              >
                <Bot className="h-5 w-5" />
                <span>AI Herbal Advisor</span>
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                width={0}
                height={0}
                alt="Medicinal Plant" 
                className="rounded-full w-96 h-96 object-cover border-8 border-white shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary-100/30 to-transparent"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-primary-600"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <ChevronDown className="h-8 w-8" />
      </motion.div>
    </section>
  );
};

export default HeroSection;