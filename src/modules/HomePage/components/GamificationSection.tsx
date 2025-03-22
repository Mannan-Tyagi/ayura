import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Trophy } from 'lucide-react';

const GamificationSection: React.FC = () => {
  const leaderboardUsers = [
    { name: "Aisha M.", points: 2450, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
    { name: "Raj S.", points: 2280, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
    { name: "Elena K.", points: 2150, avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
    { name: "David L.", points: 1980, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
  ];

  const badges = [
    { name: "Plant Explorer", count: 15, total: 50, color: "bg-green-500" },
    { name: "Remedy Master", count: 8, total: 30, color: "bg-blue-500" },
    { name: "Knowledge Seeker", count: 12, total: 25, color: "bg-purple-500" },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
            Learn & Earn
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Track your progress, earn badges, and join our community of herbal enthusiasts
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Badges Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <div className="flex items-center mb-4">
              <Award className="h-6 w-6 text-primary-600 mr-2" />
              <h3 className="text-xl font-serif font-bold text-gray-800">Your Badges</h3>
            </div>
            
            <div className="space-y-4">
              {badges.map((badge, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">{badge.name}</span>
                    <span className="text-sm text-gray-500">{badge.count}/{badge.total}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${badge.color} rounded-full`} 
                      style={{ width: `${(badge.count / badge.total) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-6 w-full py-2 bg-primary-100 hover:bg-primary-200 text-primary-700 rounded-lg font-medium transition-colors">
              View All Badges
            </button>
          </motion.div>

          {/* Progress Tracker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <div className="flex items-center mb-4">
              <TrendingUp className="h-6 w-6 text-primary-600 mr-2" />
              <h3 className="text-xl font-serif font-bold text-gray-800">Your Progress</h3>
            </div>
            
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary-600 bg-primary-100">
                    Herbal Knowledge
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-primary-600">
                    65%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-primary-100">
                <div style={{ width: "65%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-500"></div>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Plants Discovered</span>
                <span className="font-bold text-primary-600">24/100</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Remedies Learned</span>
                <span className="font-bold text-primary-600">12/50</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Quiz Score</span>
                <span className="font-bold text-primary-600">85%</span>
              </div>
            </div>
          </motion.div>

          {/* Leaderboard */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <div className="flex items-center mb-4">
              <Trophy className="h-6 w-6 text-primary-600 mr-2" />
              <h3 className="text-xl font-serif font-bold text-gray-800">Leaderboard</h3>
            </div>
            
            <div className="space-y-4">
              {leaderboardUsers.map((user, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <span className="w-6 text-center font-bold text-gray-500 mr-3">#{index + 1}</span>
                    <img src={user.avatar} width={0}
                          height={0} alt={user.name} className="w-8 h-8 rounded-full mr-3" />
                    <span className="font-medium">{user.name}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-bold text-primary-600">{user.points}</span>
                    <span className="ml-1 text-xs text-gray-500">pts</span>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-6 w-full py-2 bg-primary-100 hover:bg-primary-200 text-primary-700 rounded-lg font-medium transition-colors">
              View Full Leaderboard
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GamificationSection;