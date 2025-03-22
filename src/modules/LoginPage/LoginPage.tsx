"use client";
import React, { useState, useEffect } from 'react';
import { Leaf, Mail, Lock, User, ArrowRight, Facebook, Loader2 } from 'lucide-react';

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: '',
    resetEmail: ''
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position for the glass effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };
    
    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }
    
    // Additional validations for signup
    if (!isLogin) {
      if (!formData.name) {
        newErrors.name = 'Name is required';
        isValid = false;
      }
      
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
        isValid = false;
      }
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const validateResetEmail = () => {
    if (!resetEmail) {
      setErrors(prev => ({ ...prev, resetEmail: 'Email is required' }));
      return false;
    } else if (!/\S+@\S+\.\S+/.test(resetEmail)) {
      setErrors(prev => ({ ...prev, resetEmail: 'Email is invalid' }));
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        // Here you would typically redirect or update state based on successful login
        console.log('Form submitted:', formData);
      }, 1500);
    }
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateResetEmail()) {
      setIsLoading(true);
      
      // Simulate password reset email
      setTimeout(() => {
        setIsLoading(false);
        setResetEmailSent(true);
        console.log('Password reset email sent to:', resetEmail);
      }, 1500);
    }
  };

  const handleGoogleLogin = () => {
    setIsLoading(true);
    
    // Simulate Google OAuth flow
    console.log('Initiating Google login...');
    
    // In a real implementation, you would use Google's OAuth API
    // For example: window.gapi.auth2.getAuthInstance().signIn()
    
    setTimeout(() => {
      setIsLoading(false);
      console.log('Google login successful');
      // Here you would handle the Google auth response
    }, 1500);
  };

  const handleFacebookLogin = () => {
    setIsLoading(true);
    
    // Simulate Facebook OAuth flow
    console.log('Initiating Facebook login...');
    
    // In a real implementation, you would use Facebook's SDK
    // For example: FB.login(function(response) {...})
    
    setTimeout(() => {
      setIsLoading(false);
      console.log('Facebook login successful');
      // Here you would handle the Facebook auth response
    }, 1500);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setShowForgotPassword(false);
    setResetEmailSent(false);
    // Reset form data and errors when switching forms
    setFormData({
      email: '',
      password: '',
      name: '',
      confirmPassword: ''
    });
    setErrors({
      email: '',
      password: '',
      name: '',
      confirmPassword: '',
      resetEmail: ''
    });
  };

  // Calculate dynamic styles for glass effect based on mouse position
  const glassStyle = {
    background: `radial-gradient(
      circle at ${mousePosition.x}px ${mousePosition.y}px,
      rgba(236, 253, 245, 0.4) 0%,
      rgba(167, 243, 208, 0.2) 40%,
      rgba(110, 231, 183, 0.1) 80%
    )`,
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-100 z-0">
        {/* Animated circles with more elegant movement */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-300/40 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-green-300/40 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-300/40 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-emerald-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-6000"></div>
      </div>
      
      {/* Left Section - Branding */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-16 text-center md:text-left relative z-10">
        <div className="max-w-md">
          <div className="flex items-center justify-center md:justify-start mb-6 animate-fadeIn">
            <div className="bg-emerald-500 p-3 rounded-full shadow-lg hover-lift">
              <Leaf className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold ml-3 text-emerald-800">Ayura</h1>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6 animate-fadeIn">Your Gateway to Herbal Wisdom</h2>
          <p className="text-lg text-emerald-700 mb-8 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            Discover the ancient healing traditions of AYUSH and connect with nature's remedies for modern wellness.
          </p>
          
          <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-xl shadow-2xl hover-lift animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <img 
              src="https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Medicinal herbs and plants" 
              className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 to-transparent flex items-end">
              <p className="text-white p-6 text-sm md:text-base italic">
                "Nature itself is the best physician." — Hippocrates
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Section - Form */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-8 relative z-10">
        <div 
          className="glass w-full max-w-md rounded-2xl shadow-xl p-8 relative overflow-hidden border border-white/20 transition-all-300 hover:shadow-2xl animate-fadeIn"
          style={{ ...glassStyle, animationDelay: '0.3s' }}
        >
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-100/30 rounded-full animate-blob"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-emerald-100/30 rounded-full animate-blob animation-delay-2000"></div>
          
          <div className="relative">
            {!showForgotPassword ? (
              <>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  {isLogin ? 'Welcome Back' : 'Create Your Account'}
                </h2>
                
                <form onSubmit={handleSubmit}>
                  {!isLogin && (
                    <div className="mb-4 transition-all-300 hover:translate-x-1">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`pl-10 w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-white/70 backdrop-blur-sm`}
                          placeholder="John Doe"
                        />
                      </div>
                      {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                    </div>
                  )}
                  
                  <div className="mb-4 transition-all-300 hover:translate-x-1">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`pl-10 w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-white/70 backdrop-blur-sm`}
                        placeholder="you@example.com"
                      />
                    </div>
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>
                  
                  <div className="mb-4 transition-all-300 hover:translate-x-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`pl-10 w-full px-4 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-white/70 backdrop-blur-sm`}
                        placeholder="••••••••"
                      />
                    </div>
                    {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                  </div>
                  
                  {!isLogin && (
                    <div className="mb-4 transition-all-300 hover:translate-x-1">
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          className={`pl-10 w-full px-4 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-white/70 backdrop-blur-sm`}
                          placeholder="••••••••"
                        />
                      </div>
                      {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
                    </div>
                  )}
                  
                  {isLogin && (
                    <div className="flex justify-end mb-6">
                      <button 
                        type="button" 
                        onClick={() => setShowForgotPassword(true)}
                        className="text-sm text-emerald-600 hover:text-emerald-800 transition-colors hover:underline"
                      >
                        Forgot password?
                      </button>
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-4 rounded-lg transition-all-300 flex items-center justify-center hover-lift"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="animate-spin h-5 w-5 mr-2" />
                        {isLogin ? 'Signing in...' : 'Creating account...'}
                      </>
                    ) : (
                      <>
                        {isLogin ? 'Sign In' : 'Create Account'}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                  
                  <div className="mt-6">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white/80 backdrop-blur-sm text-gray-500">Or continue with</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={handleGoogleLogin}
                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white/80 backdrop-blur-sm text-sm font-medium text-gray-700 hover:bg-white transition-all-300 hover-lift"
                      >
                        <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                        </svg>
                      </button>
                      
                      <button
                        type="button"
                        onClick={handleFacebookLogin}
                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white/80 backdrop-blur-sm text-sm font-medium text-gray-700 hover:bg-white transition-all-300 hover-lift"
                      >
                        <Facebook className="h-5 w-5 text-blue-600" />
                      </button>
                    </div>
                  </div>
                </form>
                
                <p className="mt-8 text-center text-sm text-gray-600">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                  <button
                    type="button"
                    onClick={toggleForm}
                    className="ml-1 font-medium text-emerald-600 hover:text-emerald-500 transition-colors hover:underline"
                  >
                    {isLogin ? 'Sign up' : 'Sign in'}
                  </button>
                </p>
              </>
            ) : (
              <>
                {!resetEmailSent ? (
                  <>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Reset Your Password</h2>
                    <p className="text-gray-600 mb-6">
                      Enter your email address and we'll send you a link to reset your password.
                    </p>
                    
                    <form onSubmit={handleResetPassword}>
                      <div className="mb-4 transition-all-300 hover:translate-x-1">
                        <label htmlFor="resetEmail" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="email"
                            id="resetEmail"
                            value={resetEmail}
                            onChange={(e) => {
                              setResetEmail(e.target.value);
                              if (errors.resetEmail) {
                                setErrors(prev => ({ ...prev, resetEmail: '' }));
                              }
                            }}
                            className={`pl-10 w-full px-4 py-2 border ${errors.resetEmail ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-white/70 backdrop-blur-sm`}
                            placeholder="you@example.com"
                          />
                        </div>
                        {errors.resetEmail && <p className="mt-1 text-sm text-red-600">{errors.resetEmail}</p>}
                      </div>
                      
                      <div className="flex space-x-3">
                        <button
                          type="button"
                          onClick={() => {
                            setShowForgotPassword(false);
                            setResetEmail('');
                            setErrors(prev => ({ ...prev, resetEmail: '' }));
                          }}
                          className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2.5 px-4 rounded-lg transition-all-300 flex items-center justify-center hover-lift"
                        >
                          Back to Login
                        </button>
                        
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-4 rounded-lg transition-all-300 flex items-center justify-center hover-lift"
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="animate-spin h-5 w-5 mr-2" />
                              Sending...
                            </>
                          ) : (
                            'Reset Password'
                          )}
                        </button>
                      </div>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8 animate-fadeIn">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-6">
                      <Mail className="h-8 w-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Check Your Email</h2>
                    <p className="text-gray-600 mb-6">
                      We've sent a password reset link to <span className="font-medium">{resetEmail}</span>
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setShowForgotPassword(false);
                        setResetEmailSent(false);
                        setResetEmail('');
                      }}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-6 rounded-lg transition-all-300 hover-lift"
                    >
                      Back to Login
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;