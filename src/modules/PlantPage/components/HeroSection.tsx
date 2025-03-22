import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize, Minimize, Volume2 } from 'lucide-react';
import { Plant } from '../types/plant';

interface HeroSectionProps {
  plant: Plant;
  isAudioEnabled: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ plant, isAudioEnabled }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [rotateY, setRotateY] = useState(0);
  
  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    
    // Calculate rotation based on mouse position
    const rotationAmount = ((x / width) - 0.5) * 40;
    setRotateY(rotationAmount);
  };
  
  const speakPlantInfo = () => {
    if (!isAudioEnabled || !window.speechSynthesis) return;
    
    const speech = new SpeechSynthesisUtterance();
    speech.text = `${plant.commonName}, scientifically known as ${plant.scientificName}, is ${plant.shortDescription}`;
    speech.volume = 1;
    speech.rate = 0.9;
    speech.pitch = 1;
    
    window.speechSynthesis.speak(speech);
  };

  return (
    <section className="glass-card overflow-hidden rounded-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div 
          className={`relative overflow-hidden ${isZoomed ? 'cursor-move' : 'cursor-pointer'}`}
          onClick={!isZoomed ? toggleZoom : undefined}
          onMouseMove={handleMouseMove}
        >
          <motion.div
            animate={{ 
              scale: isZoomed ? 1.5 : 1,
              rotateY: rotateY
            }}
            transition={{ type: "spring", stiffness: 100 }}
            className="relative aspect-square"
          >
            <img 
              src={plant.imageUrl} 
              alt={plant.commonName} 
              className="w-full h-full object-cover"
            />
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                toggleZoom();
              }}
              className="absolute top-4 right-4 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 transition-colors"
              aria-label={isZoomed ? "Zoom out" : "Zoom in"}
            >
              {isZoomed ? (
                <Minimize className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Maximize className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </motion.div>
        </div>
        
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <div className="flex flex-wrap gap-2 mb-4">
            {plant.ayushClassifications.map((classification) => (
              <span 
                key={classification} 
                className={`ayush-tag ayush-tag-${classification.toLowerCase()}`}
              >
                {classification}
              </span>
            ))}
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-2">
            {plant.commonName}
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 italic font-serif mb-4">
            {plant.scientificName}
          </p>
          
          <div className="h-px w-24 bg-primary-500 mb-6"></div>
          
          <p className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-6">
            {plant.shortDescription}
          </p>
          
          <div className="flex items-center space-x-2">
            {isAudioEnabled && (
              <button 
                onClick={speakPlantInfo}
                className="flex items-center space-x-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-lg hover:bg-primary-200 dark:hover:bg-primary-800/50 transition-colors"
              >
                <Volume2 className="h-4 w-4" />
                <span>Listen</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;