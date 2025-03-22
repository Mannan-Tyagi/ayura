import React from 'react';
import { Leaf, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8 text-primary-400" />
              <span className="ml-2 text-2xl font-serif font-bold">Ayura</span>
            </div>
            <p className="text-gray-400 mb-6">
              Unlocking the healing power of nature through traditional medicinal plants and modern science.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Plant Directory</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Herbal Remedies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Ayurvedic Plants</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Medicinal Herbs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Herbal Teas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Essential Oils</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Immunity Boosters</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Seasonal Remedies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">AI Herbal Advisor</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Herbal Lane, Nature Valley, Earth 54321</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@ayura.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 Ayura. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;