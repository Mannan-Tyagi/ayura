import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles } from 'lucide-react';

const SearchSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  
  const suggestions = [
    { type: 'plant', name: 'Ashwagandha' },
    { type: 'plant', name: 'Tulsi (Holy Basil)' },
    { type: 'plant', name: 'Turmeric' },
    { type: 'ailment', name: 'Stress & Anxiety' },
    { type: 'ailment', name: 'Digestive Issues' },
    { type: 'benefit', name: 'Immune Support' },
  ];

  const recommendedHerbs = [
    {
      id: 1,
      name: 'Ashwagandha',
      image: 'https://images.unsplash.com/photo-1620881888360-8a8f3b2d0595?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      benefits: 'Stress Relief, Energy',
    },
    {
      id: 2,
      name: 'Tulsi',
      image: 'https://images.unsplash.com/photo-1589517585382-1e58e3e2d518?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      benefits: 'Respiratory Health, Immunity',
    },
    {
      id: 3,
      name: 'Turmeric',
      image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      benefits: 'Anti-inflammatory, Antioxidant',
    },
    {
      id: 4,
      name: 'Ginger',
      image: 'https://images.unsplash.com/photo-1603431777007-61db4494a034?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      benefits: 'Digestive Aid, Immunity',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-primary-50">
      <div id="plants" className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
              Find Your Perfect Herbal Match
            </h2>
            <p className="text-lg text-gray-600">
              Search by plant name, health concern, or desired benefit
            </p>
          </div>

          <div className="relative">
            <div className={`relative rounded-full shadow-lg transition-all duration-300 ${isFocused ? 'ring-2 ring-primary-500 shadow-xl' : ''}`}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                placeholder="Search plants, ailments, or benefits..."
                className="w-full pl-6 pr-12 py-4 rounded-full text-lg focus:outline-none"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <Search className="h-6 w-6 text-primary-500" />
              </div>
            </div>

            {/* Search suggestions */}
            {isFocused && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute mt-2 w-full bg-white rounded-xl shadow-xl z-10 py-2 border border-gray-100"
              >
                <div className="px-4 py-2 text-sm text-gray-500 border-b border-gray-100">
                  Popular Searches
                </div>
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-primary-50 cursor-pointer flex items-center"
                  >
                    <span className={`inline-block w-20 text-xs font-medium rounded-full px-2 py-1 mr-2 ${
                      suggestion.type === 'plant' 
                        ? 'bg-green-100 text-green-800' 
                        : suggestion.type === 'ailment'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {suggestion.type}
                    </span>
                    <span>{suggestion.name}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="mt-16">
          <div className="flex items-center justify-center mb-8">
            <Sparkles className="h-6 w-6 text-primary-500 mr-2" />
            <h3 className="text-2xl font-serif font-bold text-primary-800">
              Recommended Herbs for You
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedHerbs.map((herb) => (
              <motion.div
                key={herb.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                   width={0}
                   height={0}
                    src={herb.image} 
                    alt={herb.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-serif font-bold text-lg text-primary-800 mb-1">{herb.name}</h4>
                  <p className="text-sm text-gray-600">{herb.benefits}</p>
                  <button className="mt-3 text-primary-600 hover:text-primary-800 text-sm font-medium flex items-center">
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;