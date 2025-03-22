import React from 'react';
import { motion } from 'framer-motion';
import { Send, ArrowRight } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                  Start Your Herbal Journey Today
                </h2>
                <p className="text-primary-100 mb-8">
                  Join thousands of people discovering the healing power of medicinal plants. Get personalized recommendations, track your progress, and connect with a community of herbal enthusiasts.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-white text-primary-700 px-6 py-3 rounded-full text-lg font-medium transition-colors shadow-lg hover:bg-gray-100"
                >
                  <span>Sign Up Now</span>
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </motion.div>
            </div>
            
            <div className="bg-primary-700 p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-serif font-bold text-white mb-4">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-primary-100 mb-6">
                  Get weekly updates on new medicinal plants, remedies, and exclusive expert advice.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center space-x-2 bg-secondary-600 hover:bg-secondary-700 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    <Send className="h-5 w-5" />
                    <span>Subscribe</span>
                  </motion.button>
                </div>
                <p className="text-xs text-primary-200 mt-4">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from Ayura.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;