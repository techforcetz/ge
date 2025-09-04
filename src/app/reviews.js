// app/reviews/page.jsx (Next.js App Router)
"use client";

import { useState, useEffect } from "react";
import { FaStar, FaRegStar, FaQuoteRight } from "react-icons/fa";

const reviews = [
  {
    name: "Alice Johnson",
    title: "Entrepreneur",
    review: "This service has completely changed the way I manage my business. The team is professional, and the experience was seamless.",
    image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg",
    rating: 5
  },
  {
    name: "Michael Lee",
    title: "Engineer",
    review: "The attention to detail and customer support was outstanding. I felt valued and heard throughout the process.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    rating: 4
  },
  {
    name: "Sarah Williams",
    title: "Constructor",
    review: "Glass-like interface is beautiful! The platform feels modern and responsive across all my devices.",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    rating: 5
  },
  {
    name: "David Brown",
    title: "Constructor",
    review: "Fast, reliable, and built with a user-first mindset. Highly recommend to anyone looking for professional services.",
    image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
    rating: 5
  },
  {
    name: "Emma Garcia",
    title: "Manager",
    review: "Exceeded all our expectations. The team delivered on time and within budget while maintaining exceptional quality.",
    image: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg",
    rating: 4
  }
];

export default function ReviewsPage() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
      }, 4000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrent(current === reviews.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? reviews.length - 1 : current - 1);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  // Render star ratings
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => 
      i < rating ? 
        <FaStar key={i} className="text-yellow-400 inline-block mr-1" /> : 
        <FaRegStar key={i} className="text-yellow-400 inline-block mr-1" />
    );
  };

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 -left-20 w-40 h-40 bg-yellow-400/10 rounded-full"></div>
      <div className="absolute bottom-20 -right-20 w-60 h-60 bg-indigo-400/10 rounded-full"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-indigo-700 max-w-2xl mx-auto text-lg">
            Discover what our clients have to say about their experience working with us
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Main review card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 relative">
            <FaQuoteRight className="absolute top-6 right-6 text-indigo-100 text-5xl" />
            
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src={reviews[current].image}
                    alt={reviews[current].name}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              
              <div className="text-center md:text-left">
                <div className="mb-4">
                  {renderStars(reviews[current].rating)}
                </div>
                
                <p className="text-gray-700 text-lg md:text-xl mb-6 italic relative">
                  "{reviews[current].review}"
                </p>
                
                <div>
                  <h3 className="text-xl font-bold text-indigo-900">{reviews[current].name}</h3>
                  <p className="text-indigo-600">{reviews[current].title}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation controls */}
          <div className="flex justify-between items-center">
            <button
              onClick={prevSlide}
              className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors shadow-md"
              aria-label="Previous review"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Indicator dots */}
            <div className="flex space-x-3">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === current 
                      ? "bg-indigo-600 w-8" 
                      : "bg-indigo-300 hover:bg-indigo-400"
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors shadow-md"
              aria-label="Next review"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Auto-play toggle */}
          <div className="flex justify-center mt-8">
            <button 
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-indigo-600 hover:text-indigo-800 transition flex items-center text-sm font-medium"
            >
              {isAutoPlaying ? (
                <>
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Pause auto rotation
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Play auto rotation
                </>
              )}
            </button>
          </div>
        </div>
        
        {/* Additional reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
          {reviews.slice(0, 4).map((review, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-900">{review.name}</h4>
                  <p className="text-indigo-600 text-sm">{review.title}</p>
                </div>
              </div>
              <div className="mb-3">
                {renderStars(review.rating)}
              </div>
              <p className="text-gray-600 text-sm">"{review.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}