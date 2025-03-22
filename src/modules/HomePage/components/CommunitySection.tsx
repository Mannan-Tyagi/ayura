import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Calendar, Users } from 'lucide-react';

const CommunitySection: React.FC = () => {
  const discussions = [
    {
      title: "Best herbs for seasonal allergies?",
      author: "Maria J.",
      replies: 24,
      time: "2 hours ago",
      tags: ["Allergies", "Respiratory"]
    },
    {
      title: "Growing Tulsi at home - Tips needed",
      author: "Rahul P.",
      replies: 18,
      time: "5 hours ago",
      tags: ["Gardening", "Tulsi"]
    },
    {
      title: "Ayurvedic remedies for joint pain",
      author: "Sarah L.",
      replies: 32,
      time: "1 day ago",
      tags: ["Ayurveda", "Pain Relief"]
    }
  ];

  const expertSessions = [
    {
      title: "Herbs for Stress Management",
      expert: "Dr. Anita Sharma",
      date: "June 15, 2025",
      time: "3:00 PM EST",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      title: "Medicinal Plants in Your Kitchen",
      expert: "Chef Michael Wong",
      date: "June 18, 2025",
      time: "1:00 PM EST",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      title: "Growing Your Herbal Garden",
      expert: "Emma Green, Botanist",
      date: "June 22, 2025",
      time: "4:00 PM EST",
      image: "https://images.unsplash.com/photo-1591378603223-e15b45a81640?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <section id="community" className="py-16 bg-primary-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
            Join Our Herbal Community
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with experts and fellow enthusiasts to share knowledge and experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Forum Discussions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="p-6 bg-primary-100 text-primary-800">
              <div className="flex items-center">
                <MessageSquare className="h-6 w-6 mr-2" />
                <h3 className="text-xl font-serif font-bold">Trending Discussions</h3>
              </div>
            </div>
            
            <div className="divide-y divide-gray-100">
              {discussions.map((discussion, index) => (
                <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                  <h4 className="font-medium text-lg text-gray-800 mb-2">{discussion.title}</h4>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>By {discussion.author}</span>
                    <span className="mx-2">•</span>
                    <span>{discussion.time}</span>
                    <span className="mx-2">•</span>
                    <span>{discussion.replies} replies</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {discussion.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 bg-gray-50 border-t border-gray-100 text-center">
              <button className="text-primary-600 hover:text-primary-800 font-medium">
                View All Discussions
              </button>
            </div>
          </motion.div>

          {/* Expert Sessions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="p-6 bg-secondary-100 text-secondary-800">
              <div className="flex items-center">
                <Calendar className="h-6 w-6 mr-2" />
                <h3 className="text-xl font-serif font-bold">Upcoming Expert Sessions</h3>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {expertSessions.map((session, index) => (
                <div key={index} className="flex gap-4">
                  <img
                   width={0}
                   height={0}
                    src={session.image} 
                    alt={session.expert} 
                    className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-medium text-lg text-gray-800">{session.title}</h4>
                    <p className="text-primary-600 font-medium">{session.expert}</p>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{session.date}, {session.time}</span>
                    </div>
                    <button className="mt-2 text-sm bg-secondary-100 hover:bg-secondary-200 text-secondary-700 px-3 py-1 rounded-full transition-colors">
                      Set Reminder
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-6 bg-gray-50 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-700">
                  <Users className="h-5 w-5 mr-2" />
                  <span className="font-medium">1,240+ community members</span>
                </div>
                <button className="bg-secondary-600 hover:bg-secondary-700 text-white px-4 py-2 rounded-lg transition-colors">
                  Join Community
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;