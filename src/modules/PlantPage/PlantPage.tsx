"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Leaf,  Volume2, VolumeX } from 'lucide-react';

import HeroSection from './components/HeroSection';
import PlantProfile from './components/PlantProfile';
import InteractiveFeatures from './components/InteractiveFeatures';
import GamifiedLearning from './components/GamifiedLearning';
import { PlantData } from './data/plantData';

function PlantPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  
  useEffect(() => {
    // Check user preference for dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
    
    // Listen for changes in color scheme preference
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      setDarkMode(event.matches);
    });
  }, []);
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  const toggleAudio = () => {
    setIsAudioEnabled(!isAudioEnabled);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <header className="sticky top-0 z-50 glass-card px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Leaf className="h-6 w-6 text-primary-600 dark:text-primary-400" />
          <h1 className="text-xl font-display font-semibold text-primary-800 dark:text-primary-300">Ayura</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleAudio}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label={isAudioEnabled ? "Disable audio narration" : "Enable audio narration"}
          >
            {isAudioEnabled ? (
              <Volume2 className="h-5 w-5 text-primary-600 dark:text-primary-400" />
            ) : (
              <VolumeX className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            )}
          </button>
          
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-gray-700" />
            )}
          </button>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <HeroSection plant={PlantData} isAudioEnabled={isAudioEnabled} />
          
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <PlantProfile plant={PlantData} />
            </div>
            <div className="lg:col-span-1">
              <InteractiveFeatures plant={PlantData} />
            </div>
          </div>
          
          <GamifiedLearning plant={PlantData} />
        </motion.div>
      </main>
      
      <footer className="glass-card mt-12 py-6 px-4">
        <div className="container mx-auto text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© 2025 Ayura - Traditional Medicinal Plants Platform. All rights reserved.</p>
          <p className="mt-2">Disclaimer: Information provided is for educational purposes only and not intended as medical advice.</p>
        </div>
      </footer>
    </div>
  );
}

export default PlantPage;