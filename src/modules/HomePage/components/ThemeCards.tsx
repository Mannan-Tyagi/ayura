import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Home, Coffee, Shield } from 'lucide-react';

interface ThemeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  delay: number;
}

const ThemeCard: React.FC<ThemeCardProps> = ({ icon, title, description, color, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all cursor-pointer border-t-4 ${color}`}
    >
      <div className="p-6">
        <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-serif font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm font-medium text-primary-600">Explore</span>
          <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

const ThemeCards: React.FC = () => {
  const themes = [
    {
      icon: <Leaf className="h-6 w-6 text-primary-600" />,
      title: "Ayurvedic Healing",
      description: "Discover ancient Ayurvedic herbs and their traditional uses for holistic wellness.",
      color: "border-primary-500",
      delay: 0.1
    },
    {
      icon: <Home className="h-6 w-6 text-secondary-600" />,
      title: "Home Remedies",
      description: "Simple and effective herbal remedies you can prepare at home for common ailments.",
      color: "border-secondary-500",
      delay: 0.2
    },
    {
      icon: <Coffee className="h-6 w-6 text-amber-600" />,
      title: "Tea & Herbal Infusions",
      description: "Healing teas and infusions to boost your health and enhance your wellbeing.",
      color: "border-amber-500",
      delay: 0.3
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Natural Immunity Boosters",
      description: "Powerful plants that strengthen your immune system and protect your health.",
      color: "border-blue-500",
      delay: 0.4
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div id="remedies" className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
            Explore Healing Traditions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dive into different aspects of herbal medicine and discover the perfect plants for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {themes.map((theme, index) => (
            <ThemeCard key={index} {...theme} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemeCards;