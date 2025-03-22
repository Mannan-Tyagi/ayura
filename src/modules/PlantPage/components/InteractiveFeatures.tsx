import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Mic, QrCode, BarChart2 } from 'lucide-react';
import { Plant } from '../types/plant';

interface InteractiveFeaturesProps {
  plant: Plant;
}

const InteractiveFeatures: React.FC<InteractiveFeaturesProps> = ({ plant }) => {
  const [symptomQuery, setSymptomQuery] = useState('');
  const [matchedBenefits, setMatchedBenefits] = useState<string[]>([]);
  const [isListening, setIsListening] = useState(false);
  const [showQrScanner, setShowQrScanner] = useState(false);
  
  const handleSymptomSearch = () => {
    if (!symptomQuery.trim()) {
      setMatchedBenefits([]);
      return;
    }
    
    // Simple search algorithm to find matching benefits
    const query = symptomQuery.toLowerCase();
    const matches = plant.benefits
      .filter(benefit => 
        benefit.title.toLowerCase().includes(query) || 
        benefit.description.toLowerCase().includes(query)
      )
      .map(benefit => benefit.title);
    
    setMatchedBenefits(matches);
  };
  
  const startVoiceRecognition = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Voice recognition is not supported in your browser.');
      return;
    }
    
    setIsListening(true);
    
    // This is a mock implementation since actual SpeechRecognition requires permissions
    // In a real app, you would use the Web Speech API
    setTimeout(() => {
      setIsListening(false);
      setSymptomQuery('cough and cold');
      handleSymptomSearch();
    }, 2000);
  };
  
  const toggleQrScanner = () => {
    setShowQrScanner(!showQrScanner);
  };

  return (
    <div className="space-y-6">
      <h2 className="section-title">Interactive Features</h2>
      
      <div className="glass-card p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          How Can This Help You?
        </h3>
        
        <div className="flex items-center space-x-2 mb-4">
          <div className="relative flex-1">
            <input
              type="text"
              value={symptomQuery}
              onChange={(e) => setSymptomQuery(e.target.value)}
              placeholder="Enter symptoms (e.g., cough & cold)"
              className="w-full px-4 py-2 pr-10 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          
          <button
            onClick={startVoiceRecognition}
            disabled={isListening}
            className={`p-2 rounded-lg ${
              isListening 
                ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 animate-pulse' 
                : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            } transition-colors`}
            aria-label="Voice search"
          >
            <Mic className="h-5 w-5" />
          </button>
        </div>
        
        <button
          onClick={handleSymptomSearch}
          className="w-full py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors mb-4"
        >
          Find Relevant Benefits
        </button>
        
        {matchedBenefits.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4"
          >
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {plant.commonName} may help with:
            </h4>
            <ul className="space-y-2">
              {matchedBenefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <span className="h-2 w-2 rounded-full bg-primary-500"></span>
                  <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
      
      <div className="glass-card p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Plant Identification
        </h3>
        
        <button
          onClick={toggleQrScanner}
          className="w-full py-3 flex items-center justify-center space-x-3 bg-secondary-100 hover:bg-secondary-200 dark:bg-secondary-900/30 dark:hover:bg-secondary-800/50 text-secondary-800 dark:text-secondary-300 rounded-lg transition-colors"
        >
          <QrCode className="h-5 w-5" />
          <span>{showQrScanner ? 'Hide Scanner' : 'Scan Plant QR Code'}</span>
        </button>
        
        {showQrScanner && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 bg-gray-900 rounded-lg overflow-hidden aspect-video flex items-center justify-center"
          >
            <div className="text-center p-6">
              <p className="text-white mb-2">Camera access required</p>
              <p className="text-gray-400 text-sm">Point your camera at a plant QR code to identify it</p>
            </div>
          </motion.div>
        )}
      </div>
      
      <div className="glass-card p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Compare with Other Plants
        </h3>
        
        <div className="relative">
          <select
            className="w-full px-4 py-2 rounded-lg appearance-none border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="">Select a plant to compare</option>
            <option value="ashwagandha">Ashwagandha</option>
            <option value="brahmi">Brahmi</option>
            <option value="neem">Neem</option>
            <option value="turmeric">Turmeric</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <BarChart2 className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        
        <button
          className="w-full mt-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg transition-colors"
        >
          Compare Benefits
        </button>
      </div>
    </div>
  );
};

export default InteractiveFeatures;