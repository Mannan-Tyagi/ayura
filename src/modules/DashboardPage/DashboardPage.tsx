"use client"
import React, { useState, useEffect } from 'react';
import { 
  Leaf, 
  Sun, 
  Moon, 
  Award, 
  Calendar, 
  BookOpen, 
  Users, 
  MessageSquare, 
  TrendingUp,
  Home,
  Settings,
  LogOut,
  ChevronRight,
  Bell
} from 'lucide-react';

// Mock data for the dashboard
const mockUser = {
  name: "Arjun",
  avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&h=120",
  progress: 65,
  streak: 12,
  level: "Intermediate Herbalist",
  journalEntries: 24,
  dailyGoal: 3,
  dailyProgress: 2
};

const trendingHerbs = [
  { 
    id: 1, 
    name: "Ashwagandha", 
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300", 
    benefits: ["Stress Relief", "Immune Support"], 
    category: "Adaptogen" 
  },
  { 
    id: 2, 
    name: "Tulsi (Holy Basil)", 
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300", 
    benefits: ["Respiratory Health", "Anti-inflammatory"], 
    category: "Herb" 
  },
  { 
    id: 3, 
    name: "Turmeric", 
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300", 
    benefits: ["Anti-inflammatory", "Antioxidant"], 
    category: "Root" 
  },
  { 
    id: 4, 
    name: "Brahmi", 
    image: "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300", 
    benefits: ["Cognitive Function", "Memory"], 
    category: "Herb" 
  }
];

const suggestedPlants = [
  { 
    id: 5, 
    name: "Neem", 
    image: "https://images.unsplash.com/photo-1618494299529-c9e229d97582?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300", 
    benefits: ["Skin Health", "Immune Support"], 
    category: "Tree" 
  },
  { 
    id: 6, 
    name: "Shatavari", 
    image: "https://images.unsplash.com/photo-1550828520-4cb496926fc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300", 
    benefits: ["Women's Health", "Adaptogen"], 
    category: "Root" 
  },
  { 
    id: 7, 
    name: "Triphala", 
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300", 
    benefits: ["Digestive Health", "Detoxification"], 
    category: "Herbal Blend" 
  }
];

const achievements = [
  { id: 1, name: "Plant Explorer", description: "Discover 10 new plants", progress: 80, icon: <Leaf size={20} /> },
  { id: 2, name: "Knowledge Seeker", description: "Complete 5 quizzes", progress: 60, icon: <BookOpen size={20} /> },
  { id: 3, name: "Community Guide", description: "Help 3 community members", progress: 30, icon: <Users size={20} /> }
];

const upcomingEvents = [
  { 
    id: 1, 
    title: "Ayurvedic Herbs for Immunity", 
    date: "Oct 15, 2025", 
    time: "3:00 PM", 
    speaker: "Dr. Anita Sharma",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=200"
  },
  { 
    id: 2, 
    title: "Traditional Uses of Tulsi", 
    date: "Oct 22, 2025", 
    time: "5:30 PM", 
    speaker: "Dr. Rajesh Kumar",
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=200"
  }
];

const communityDiscussions = [
  { id: 1, title: "Best herbs for seasonal allergies?", author: "Priya M.", replies: 24, isHot: true },
  { id: 2, title: "Growing Tulsi at home - Tips & Tricks", author: "Vikram S.", replies: 18, isHot: false },
  { id: 3, title: "Ayurvedic remedies for better sleep", author: "Meera K.", replies: 32, isHot: true }
];

function Dashboardpage() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Show notification after 3 seconds
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Auto-rotate carousel
    const interval = setInterval(() => {
      setActiveCarouselIndex((prev) => (prev + 1) % trendingHerbs.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'} transition-colors duration-300`}>
      {/* Background pattern */}
      <div className="absolute inset-0 bg-repeat opacity-5 pointer-events-none" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${darkMode ? '9C9C9C' : '4F7942'}' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
           }}>
      </div>

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg flex flex-col items-center py-8 z-10`}>
        <div className="mb-8">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white">
            <Leaf size={24} />
          </div>
        </div>
        
        <nav className="flex flex-col items-center space-y-8 flex-1">
          <button className={`p-3 rounded-xl ${darkMode ? 'bg-gray-700 text-green-400' : 'bg-green-50 text-green-600'}`}>
            <Home size={20} />
          </button>
          <button className={`p-3 rounded-xl ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-green-600'} transition-colors`}>
            <BookOpen size={20} />
          </button>
          <button className={`p-3 rounded-xl ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-green-600'} transition-colors`}>
            <Users size={20} />
          </button>
          <button className={`p-3 rounded-xl ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-green-600'} transition-colors`}>
            <Calendar size={20} />
          </button>
          <button className={`p-3 rounded-xl ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-green-600'} transition-colors`}>
            <Award size={20} />
          </button>
        </nav>
        
        <div className="mt-auto flex flex-col items-center space-y-6">
          <button className={`p-3 rounded-xl ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-green-600'} transition-colors`}>
            <Settings size={20} />
          </button>
          <button onClick={toggleDarkMode} className="p-3 rounded-xl text-yellow-500">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className={`p-3 rounded-xl ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-green-600'} transition-colors`}>
            <LogOut size={20} />
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="pl-20">
        {/* Header */}
        <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm sticky top-0 z-10`}>
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-500 to-emerald-700 bg-clip-text text-transparent">
              Ayura Dashboard
            </h1>
            
            <div className="flex items-center space-x-6">
              <div className="relative">
                <button 
                  className="relative"
                  onClick={() => setShowNotification(!showNotification)}
                >
                  <Bell size={20} className={darkMode ? 'text-gray-300' : 'text-gray-600'} />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                    2
                  </span>
                </button>
                
                {showNotification && (
                  <div className={`absolute right-0 mt-2 w-80 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-lg shadow-lg py-2 z-20`}>
                    <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                      <h3 className="font-medium">Notifications</h3>
                    </div>
                    <div className={`px-4 py-3 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} transition-colors cursor-pointer`}>
                      <p className="text-sm font-medium">New herb added: Giloy</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">2 hours ago</p>
                    </div>
                    <div className={`px-4 py-3 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} transition-colors cursor-pointer`}>
                      <p className="text-sm font-medium">Your streak is at risk!</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Complete today&apos;s goal to maintain your streak</p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="relative">
                <div className="flex items-center space-x-3 cursor-pointer">
                  <img 
                    src={mockUser.avatar} 
                    alt="User avatar" 
                    width={0}
                    height={0}
                    className="w-10 h-10 rounded-full border-2 border-green-400"
                  />
                  <span className="font-medium">{mockUser.name}</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="container mx-auto px-6 py-8">
          {/* Welcome section with parallax effect */}
          <section className={`relative overflow-hidden rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg mb-10`}>
            <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
              <img
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&h=800" 
                width={0}
                height={0}
                alt="Herbal garden background" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center">
              <div className="md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  🌿 Welcome back, {mockUser.name}!
                </h2>
                <p className="text-xl mb-6">Ready to explore new medicinal plants today?</p>
                
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center">
                    Start Exploring
                    <ChevronRight size={18} className="ml-2" />
                  </button>
                  <button className={`px-6 py-3 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'} rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center`}>
                    Join Community Discussion
                    <MessageSquare size={18} className="ml-2" />
                  </button>
                </div>
              </div>
              
              <div className="mt-8 md:mt-0 md:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-green-300 to-emerald-500 flex items-center justify-center shadow-lg">
                    <img
                     width={0}
                     height={0}
                      src={mockUser.avatar} 
                      alt="User avatar" 
                      className="w-32 h-32 rounded-full object-cover border-4 border-white"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-gray-800 rounded-full px-3 py-1 text-sm font-bold shadow-md">
                    Level {mockUser.streak}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Progress section */}
              <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-md p-6`}>
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Award size={20} className="mr-2 text-yellow-500" />
                  Your Herbal Journey
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className={`${darkMode ? 'bg-gray-700' : 'bg-green-50'} rounded-lg p-4 text-center`}>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Current Streak</p>
                    <p className="text-3xl font-bold text-green-600 dark:text-green-400">{mockUser.streak} days</p>
                  </div>
                  
                  <div className={`${darkMode ? 'bg-gray-700' : 'bg-green-50'} rounded-lg p-4 text-center`}>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Plants Explored</p>
                    <p className="text-3xl font-bold text-green-600 dark:text-green-400">{mockUser.journalEntries}</p>
                  </div>
                  
                  <div className={`${darkMode ? 'bg-gray-700' : 'bg-green-50'} rounded-lg p-4 text-center`}>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Current Level</p>
                    <p className="text-lg font-bold text-green-600 dark:text-green-400">{mockUser.level}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Overall Progress</span>
                    <span className="text-sm font-medium">{mockUser.progress}%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-500"
                      style={{ width: `${mockUser.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Today&apos;s Goal: {mockUser.dailyProgress}/{mockUser.dailyGoal} plants</span>
                    <span className="text-sm font-medium">{Math.round((mockUser.dailyProgress / mockUser.dailyGoal) * 100)}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-yellow-400 rounded-full transition-all duration-500"
                      style={{ width: `${(mockUser.dailyProgress / mockUser.dailyGoal) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="text-sm text-gray-500 dark:text-gray-400 italic">
                  Explore 1 more plant today to reach your daily goal!
                </div>
              </section>

              {/* Trending herbs carousel */}
              <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-md p-6`}>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold flex items-center">
                    <TrendingUp size={20} className="mr-2 text-red-500" />
                    Trending Herbs
                  </h3>
                  
                  <div className="flex space-x-2">
                    {trendingHerbs.map((_, index) => (
                      <button 
                        key={index}
                        className={`w-2 h-2 rounded-full ${activeCarouselIndex === index ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'}`}
                        onClick={() => setActiveCarouselIndex(index)}
                      ></button>
                    ))}
                  </div>
                </div>
                
                <div className="relative overflow-hidden">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${activeCarouselIndex * 100}%)` }}
                  >
                    {trendingHerbs.map((herb) => (
                      <div key={herb.id} className="w-full flex-shrink-0 pr-4">
                        <div className={`h-full ${darkMode ? 'bg-gray-700' : 'bg-green-50'} rounded-xl overflow-hidden flex flex-col md:flex-row`}>
                          <div className="md:w-1/3 h-48 md:h-auto">
                            <img
                               width={0}
                               height={0}
                              src={herb.image} 
                              alt={herb.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          <div className="p-6 md:w-2/3">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="text-xl font-bold">{herb.name}</h4>
                              <span className={`px-2 py-1 text-xs rounded-full ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                                {herb.category}
                              </span>
                            </div>
                            
                            <div className="mb-4">
                              <h5 className="text-sm text-gray-500 dark:text-gray-400 mb-2">Key Benefits:</h5>
                              <div className="flex flex-wrap gap-2">
                                {herb.benefits.map((benefit, index) => (
                                  <span 
                                    key={index} 
                                    className="px-3 py-1 bg-green-100 dark:bg-green-900 dark:text-green-200 text-green-800 rounded-full text-xs"
                                  >
                                    {benefit}
                                  </span>
                                ))}
                              </div>
                            </div>
                            
                            <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm transition-colors">
                              Learn More
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* AI Recommendations */}
              <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-md p-6`}>
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Leaf size={20} className="mr-2 text-green-500" />
                  Suggested Plants for You
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {suggestedPlants.map((plant) => (
                    <div 
                      key={plant.id} 
                      className={`${darkMode ? 'bg-gray-700 hover:bg-gray-650' : 'bg-white hover:bg-green-50'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'} rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer`}
                    >
                      <div className="h-36 overflow-hidden">
                        <img
                         width={0}
                         height={0}
                          src={plant.image} 
                          alt={plant.name} 
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                      
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold">{plant.name}</h4>
                          <span className={`px-2 py-1 text-xs rounded-full ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>
                            {plant.category}
                          </span>
                        </div>
                        
                        <div className="mb-3">
                          <div className="flex flex-wrap gap-1">
                            {plant.benefits.map((benefit, index) => (
                              <span 
                                key={index} 
                                className="px-2 py-0.5 bg-green-100 dark:bg-green-900 dark:text-green-200 text-green-800 rounded-full text-xs"
                              >
                                {benefit}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <button className="w-full px-3 py-1.5 bg-green-500 hover:bg-green-600 text-white rounded text-sm transition-colors">
                          Explore
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right column */}
            <div className="space-y-8">
              {/* Achievements */}
              <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-md p-6`}>
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Award size={20} className="mr-2 text-yellow-500" />
                  Achievements & Quests
                </h3>
                
                <div className="space-y-4">
                  {achievements.map((achievement) => (
                    <div key={achievement.id} className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
                      <div className="flex items-start">
                        <div className={`p-2 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'} mr-4`}>
                          {achievement.icon}
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="font-bold">{achievement.name}</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{achievement.description}</p>
                          
                          <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-yellow-400 rounded-full transition-all duration-500"
                              style={{ width: `${achievement.progress}%` }}
                            ></div>
                          </div>
                          
                          <div className="flex justify-between mt-1">
                            <span className="text-xs text-gray-500 dark:text-gray-400">{achievement.progress}% complete</span>
                            {achievement.progress === 100 && (
                              <span className="text-xs text-green-500">Completed!</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className={`mt-4 w-full py-2 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} rounded-lg text-sm transition-colors`}>
                  View All Achievements
                </button>
              </section>

              {/* Community discussions */}
              <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-md p-6`}>
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <MessageSquare size={20} className="mr-2 text-blue-500" />
                  Community Discussions
                </h3>
                
                <div className="space-y-3">
                  {communityDiscussions.map((discussion) => (
                    <div 
                      key={discussion.id} 
                      className={`${darkMode ? 'bg-gray-700 hover:bg-gray-650' : 'bg-gray-50 hover:bg-gray-100'} rounded-lg p-4 cursor-pointer transition-colors`}
                    >
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium">{discussion.title}</h4>
                        {discussion.isHot && (
                          <span className="px-2 py-0.5 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 rounded-full text-xs">
                            Hot
                          </span>
                        )}
                      </div>
                      
                      <div className="flex justify-between mt-2 text-sm text-gray-500 dark:text-gray-400">
                        <span>By {discussion.author}</span>
                        <span>{discussion.replies} replies</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className="mt-4 w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm transition-colors">
                  Join Discussion
                </button>
              </section>

              {/* Upcoming events */}
              <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-md p-6`}>
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Calendar size={20} className="mr-2 text-purple-500" />
                  Upcoming Events
                </h3>
                
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div 
                      key={event.id} 
                      className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg overflow-hidden`}
                    >
                      <div className="h-32 overflow-hidden">
                        <img
                         width={0}
                         height={0}
                          src={event.image} 
                          alt={event.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="p-4">
                        <h4 className="font-bold mb-1">{event.title}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                          By {event.speaker}
                        </p>
                        
                        <div className="flex justify-between text-sm">
                          <span className="flex items-center">
                            <Calendar size={14} className="mr-1" />
                            {event.date}
                          </span>
                          <span className="flex items-center">
                            <Clock size={14} className="mr-1" />
                            {event.time}
                          </span>
                        </div>
                        
                        <button className="mt-3 w-full py-2 bg-purple-500 hover:bg-purple-600 text-white rounded text-sm transition-colors">
                          Register
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>

      {/* Floating AI Assistant button */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 z-20">
        <MessageSquare size={24} />
      </button>
    </div>
  );
}

// Missing component definition
function Clock(props: { size: number, className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={props.size} 
      height={props.size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={props.className}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );
}

export default Dashboardpage;