import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf, Search, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Leaf className="h-8 w-8 text-primary-600" />
            <span className="ml-2 text-2xl font-serif font-bold text-primary-800">Ayura</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleScrollToSection('home')} className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Home</button>
            <button onClick={() => handleScrollToSection('plants')} className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Plants</button>
            <button onClick={() => handleScrollToSection('remedies')} className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Remedies</button>
            <button onClick={() => handleScrollToSection('community')} className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Community</button>
            
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            <button 
              onClick={() => navigate('/login')}
              className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-full transition-colors"
            >
              <User className="h-4 w-4" />
              <span>Sign In</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-6 absolute top-full left-0 right-0">
          <div className="flex flex-col space-y-4">
            <button onClick={() => handleScrollToSection('home')} className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Home</button>
            <button onClick={() => handleScrollToSection('plants')} className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Plants</button>
            <button onClick={() => handleScrollToSection('remedies')} className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Remedies</button>
            <button onClick={() => handleScrollToSection('community')} className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Community</button>
            <div className="pt-2 flex items-center justify-between">
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Search className="h-5 w-5 text-gray-600" />
              </button>
              <button 
                onClick={() => navigate('/login')}
                className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-full transition-colors"
              >
                <User className="h-4 w-4" />
                <span>Sign In</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
