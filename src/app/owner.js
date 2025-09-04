// components/Owners.jsx
"use client";

import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const staffMembers = [
  { 
    name: "John Doe", 
    title: "CEO", 
    image: "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg",
    description: "Leading our company with vision and expertise for over 10 years."
  },
  { 
    name: "Jane Smith", 
    title: "CTO", 
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    description: "Technology innovator with a passion for cutting-edge solutions."
  },
  { 
    name: "Alice Johnson", 
    title: "Lead Engineer", 
    image: "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg",
    description: "Brings complex technical projects to life with precision."
  },
  { 
    name: "Bob Williams", 
    title: "Operations Manager", 
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
    description: "Ensures our operations run smoothly and efficiently."
  },
];

export default function Owners() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const length = staffMembers.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [current, isAutoPlaying]);

  return (
    <section className="w-full py-16 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/10 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-400/5 rounded-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 text-center mb-4">
          Meet Our Team
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          The talented professionals who make everything possible
        </p>
        
        <div className="relative max-w-4xl mx-auto flex items-center justify-center min-h-[400px]">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-4 z-10 p-4 text-yellow-400 bg-black/50 backdrop-blur-md rounded-full hover:bg-yellow-400/20 transition-all duration-300 shadow-lg"
            aria-label="Previous slide"
          >
            <FaChevronLeft size={24} />
          </button>

          {/* Staff Cards */}
          <div className="w-full h-full flex items-center justify-center">
            {staffMembers.map((member, index) => (
              <div
                key={index}
                className={`absolute w-full transition-all duration-500 ease-in-out transform ${
                  index === current 
                    ? "opacity-100 scale-100 translate-x-0 z-10" 
                    : index < current
                      ? "opacity-0 -translate-x-10 scale-90"
                      : "opacity-0 translate-x-10 scale-90"
                }`}
              >
                <div className="w-full max-w-sm mx-auto bg-black/40 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-yellow-400/20">
                  <div className="relative pt-8 px-8 flex flex-col items-center">
                    <div className="relative">
                      <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-yellow-400/30 shadow-lg">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-yellow-400/90 rounded-full flex items-center justify-center">
                        <span className="text-black font-bold text-xl">{index + 1}</span>
                      </div>
                    </div>
                    
                    <div className="text-center mt-6 pb-6">
                      <h3 className="text-2xl font-bold text-yellow-400">{member.name}</h3>
                      <p className="text-yellow-300/90 font-medium mt-1">{member.title}</p>
                      <p className="text-gray-300 mt-4 text-sm leading-relaxed">{member.description}</p>
                      
                      <div className="flex justify-center space-x-3 mt-6">
                        <button className="px-4 py-2 bg-yellow-400/10 text-yellow-400 rounded-lg text-sm hover:bg-yellow-400/20 transition">
                          View Profile
                        </button>
                        <button className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg text-sm hover:bg-yellow-500 transition">
                          Contact
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-4 z-10 p-4 text-yellow-400 bg-black/50 backdrop-blur-md rounded-full hover:bg-yellow-400/20 transition-all duration-300 shadow-lg"
            aria-label="Next slide"
          >
            <FaChevronRight size={24} />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-12 space-x-3">
          {staffMembers.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current 
                  ? "bg-yellow-400 w-8" 
                  : "bg-white/30 hover:bg-yellow-400/50"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Auto-play toggle */}
        <div className="flex justify-center mt-6">
          <button 
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-sm text-gray-400 hover:text-yellow-400 transition"
          >
            {isAutoPlaying ? 'Pause' : 'Play'} Auto Rotation
          </button>
        </div>
      </div>
    </section>
  );
}