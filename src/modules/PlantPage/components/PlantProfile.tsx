import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { History, FlaskRound as Flask, BookOpen, Coffee, ChevronDown, ChevronUp } from 'lucide-react';
import { Plant } from '../types/plant';

interface PlantProfileProps {
  plant: Plant;
}

const PlantProfile: React.FC<PlantProfileProps> = ({ plant }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>('history');
  
  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };
  
  const sections = [
    {
      id: 'history',
      title: 'Origin & History',
      icon: <History className="h-5 w-5 text-primary-600 dark:text-primary-400" />,
      content: (
        <div>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800"></div>
            
            {plant.history.map((event, index) => (
              <div key={index} className="relative pl-6 pb-8 last:pb-0">
                <div className="absolute left-0 top-1 h-4 w-4 rounded-full bg-primary-500 dark:bg-primary-400 border-2 border-white dark:border-gray-800"></div>
                <div className="glass-card p-4">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">{event.period}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'benefits',
      title: 'Medicinal Benefits',
      icon: <BookOpen className="h-5 w-5 text-primary-600 dark:text-primary-400" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {plant.benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="benefit-card"
            >
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">{benefit.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-3">{benefit.description}</p>
              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                <span className="mr-2">Source:</span>
                <span className={`ayush-tag ayush-tag-${benefit.source.toLowerCase()}`}>{benefit.source}</span>
              </div>
            </motion.div>
          ))}
        </div>
      )
    },
    {
      id: 'compounds',
      title: 'Active Compounds & Effects',
      icon: <Flask className="h-5 w-5 text-primary-600 dark:text-primary-400" />,
      content: (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary-50 dark:bg-primary-900/30">
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">Compound</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">Effects</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">Research Status</th>
              </tr>
            </thead>
            <tbody>
              {plant.compounds.map((compound, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-800/50'}>
                  <td className="px-4 py-3 text-sm text-gray-800 dark:text-gray-200 border-b border-gray-100 dark:border-gray-700">{compound.name}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border-b border-gray-100 dark:border-gray-700">{compound.effects}</td>
                  <td className="px-4 py-3 text-sm border-b border-gray-100 dark:border-gray-700">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      compound.researchStatus === 'Well-established' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' 
                        : compound.researchStatus === 'Emerging' 
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                    }`}>
                      {compound.researchStatus}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    },
    {
      id: 'recipes',
      title: 'Recipes & DIY Remedies',
      icon: <Coffee className="h-5 w-5 text-primary-600 dark:text-primary-400" />,
      content: (
        <div className="space-y-6">
          {plant.recipes.map((recipe, index) => (
            <div key={index} className="glass-card p-5">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">{recipe.name}</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{recipe.description}</p>
              
              <div className="mb-4">
                <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Ingredients:</h5>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-1">
                  {recipe.ingredients.map((ingredient, idx) => (
                    <li key={idx}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Instructions:</h5>
                <ol className="list-decimal pl-5 text-gray-600 dark:text-gray-400 space-y-2">
                  {recipe.instructions.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="section-title">Plant Profile</h2>
      
      <div className="space-y-4">
        {sections.map((section) => (
          <div key={section.id} className="glass-card overflow-hidden">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full px-6 py-4 flex items-center justify-between text-left"
            >
              <div className="flex items-center space-x-3">
                {section.icon}
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{section.title}</h3>
              </div>
              {expandedSection === section.id ? (
                <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              )}
            </button>
            
            <AnimatePresence>
              {expandedSection === section.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    {section.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantProfile;