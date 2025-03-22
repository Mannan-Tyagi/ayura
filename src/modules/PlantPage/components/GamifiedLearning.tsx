import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Award, Users } from 'lucide-react';
import { Plant } from '../types/plant';

interface GamifiedLearningProps {
  plant: Plant;
}

const GamifiedLearning: React.FC<GamifiedLearningProps> = ({ plant }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    
    if (answerIndex === plant.quiz[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < plant.quiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
    }
  };
  
  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setQuizCompleted(false);
  };
  
  const getBadge = () => {
    const percentage = (score / plant.quiz.length) * 100;
    
    if (percentage >= 90) {
      return "AYUSH Master";
    } else if (percentage >= 70) {
      return "Herbal Expert";
    } else if (percentage >= 50) {
      return "Plant Enthusiast";
    } else {
      return "Herbal Novice";
    }
  };

  return (
    <div className="mt-16">
      <h2 className="section-title">Learn & Engage</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-card p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Award className="h-6 w-6 text-secondary-500" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Test Your Knowledge</h3>
          </div>
          
          {!quizCompleted ? (
            <div>
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Question {currentQuestionIndex + 1} of {plant.quiz.length}
                  </span>
                  <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                    Score: {score}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-primary-500 h-2 rounded-full" 
                    style={{ width: `${((currentQuestionIndex + 1) / plant.quiz.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">
                {plant.quiz[currentQuestionIndex].question}
              </h4>
              
              <div className="space-y-3 mb-6">
                {plant.quiz[currentQuestionIndex].answers.map((answer, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full text-left p-3 rounded-lg border transition-colors ${
                      selectedAnswer === index
                        ? selectedAnswer === plant.quiz[currentQuestionIndex].correctAnswer
                          ? 'bg-green-100 border-green-300 dark:bg-green-900/30 dark:border-green-700'
                          : 'bg-red-100 border-red-300 dark:bg-red-900/30 dark:border-red-700'
                        : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                    disabled={selectedAnswer !== null}
                  >
                    <div className="flex items-center">
                      <div className={`h-6 w-6 rounded-full flex items-center justify-center mr-3 ${
                        selectedAnswer === index
                          ? selectedAnswer === plant.quiz[currentQuestionIndex].correctAnswer
                            ? 'bg-green-500 text-white'
                            : 'bg-red-500 text-white'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{answer}</span>
                    </div>
                  </button>
                ))}
              </div>
              
              {selectedAnswer !== null && (
                <button
                  onClick={handleNextQuestion}
                  className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
                >
                  {currentQuestionIndex < plant.quiz.length - 1 ? 'Next Question' : 'See Results'}
                </button>
              )}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <div className="mb-6">
                <div className="inline-block p-4 rounded-full bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 mb-4">
                  <Award className="h-10 w-10" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                  {getBadge()}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  You scored {score} out of {plant.quiz.length}!
                </p>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {score >= plant.quiz.length / 2 
                  ? `Great job! You've demonstrated a good understanding of ${plant.commonName}.` 
                  : `Keep learning! There's more to discover about ${plant.commonName}.`}
              </p>
              
              <button
                onClick={resetQuiz}
                className="px-6 py-2 bg-secondary-600 hover:bg-secondary-700 text-white rounded-lg transition-colors"
              >
                Try Again
              </button>
            </motion.div>
          )}
        </div>
        
        <div className="glass-card p-6">
          <div className="flex items-center space-x-3 mb-6">
            <MessageCircle className="h-6 w-6 text-secondary-500" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Community Discussions</h3>
          </div>
          
          <div className="space-y-4 mb-6">
            {plant.communityDiscussions.map((discussion, index) => (
              <div key={index} className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-2">
                      {discussion.user.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-gray-800 dark:text-gray-200">{discussion.user}</h5>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{discussion.date}</p>
                    </div>
                  </div>
                  <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded text-gray-600 dark:text-gray-400">
                    {discussion.topic}
                  </span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">{discussion.message}</p>
              </div>
            ))}
          </div>
          
          <a 
            href="#" 
            className="block w-full py-2 text-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg transition-colors"
          >
            View All Discussions
          </a>
        </div>
      </div>
    </div>
  );
};

export default GamifiedLearning;