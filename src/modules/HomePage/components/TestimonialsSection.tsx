import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, India",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      text: "Ayura has transformed my approach to health. I've been using Ashwagandha as recommended, and my stress levels have decreased significantly. The detailed information and dosage guidelines are incredibly helpful.",
      ailment: "Chronic Stress"
    },
    {
      id: 2,
      name: "James Wilson",
      location: "Toronto, Canada",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      text: "After struggling with digestive issues for years, I found relief through the herbal remedies suggested on Ayura. The community forums also provided great support and additional tips that my doctor never mentioned.",
      ailment: "Digestive Issues"
    },
    {
      id: 3,
      name: "Mei Lin",
      location: "Singapore",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      text: "The AI Herbal Advisor recommended a combination of Tulsi and Ginger for my seasonal allergies. I was skeptical at first, but I'm amazed by how effective this natural approach has been compared to my usual medications.",
      ailment: "Seasonal Allergies"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="py-16 bg-primary-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <pattern id="pattern-circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
            <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#000"></circle>
          </pattern>
          <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-primary-800">
            Success Stories
          </h2>
          <p className="text-lg text-primary-700 max-w-2xl mx-auto">
            Real people, real results with natural herbal remedies
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative h-[400px] md:h-[300px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={testimonials[current].id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute w-full h-full"
              >
                <div className="bg-white rounded-xl p-6 md:p-8 shadow-xl">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <img
                          src={testimonials[current].avatar} 
                          alt={testimonials[current].name} 
                          width={0}
                          height={0}
                          className="w-20 h-20 rounded-full object-cover border-4 border-primary-200"
                        />
                        <div className="absolute -top-2 -left-2 bg-primary-500 rounded-full p-2">
                          <Quote className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg md:text-xl italic mb-6 text-gray-700">{testimonials[current].text}</p>
                      <div>
                        <h4 className="font-bold text-xl text-gray-900">{testimonials[current].name}</h4>
                        <p className="text-primary-600">{testimonials[current].location}</p>
                        <div className="mt-2 inline-block bg-primary-100 px-3 py-1 rounded-full text-sm text-primary-700">
                          {testimonials[current].ailment}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === current ? 'bg-primary-600' : 'bg-primary-300 hover:bg-primary-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:translate-x-0 bg-white hover:bg-gray-100 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-primary-500 text-primary-700 shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-0 bg-white hover:bg-gray-100 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-primary-500 text-primary-700 shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;