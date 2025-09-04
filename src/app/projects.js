"use client";


const Projects = () => {
  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Kimara Plaza Paving",
      type: "Paving Blocks",
      location: "City Center, Downtown",
      description: "Premium interlocking paving blocks installation covering 5000 sq ft of pedestrian walkways with decorative patterns.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Masaki Driveway",
      type: "Paving Blocks",
      location: "Suburbs",
      description: "Elegant herringbone pattern driveway using premium concrete paving blocks with integrated drainage system.",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Mawasiliano Building Facade",
      type: "Brick Construction",
      location: "Ubungo District",
      description: "Modern commercial building featuring exposed brick walls with contemporary architectural elements.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Garden Pathway Project",
      type: "Paving Blocks",
      location: "Riverside",
      description: "Curved pathway installation using natural stone-textured paving blocks creating seamless integration with landscape.",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Luxury Home Construction",
      type: "Brick Construction",
      location: "Mbezi Estate",
      description: "Traditional brick construction with modern insulation techniques for energy-efficient luxury residential project.",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Shopping Center Courtyard",
      type: "Paving Blocks",
      location: "Complex City Mall",
      description: "Large-scale paving block installation with integrated lighting and seating areas for high-traffic commercial space.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=400&fit=crop"
    },
    {
      id: 7,
      title: "Historic Building Restoration",
      type: "Brick Construction",
      location: "Heritage District",
      description: "Careful restoration of century-old brick structure preserving original character while meeting modern standards.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&h=400&fit=crop"
    },
    {
      id: 8,
      title: "School Campus Walkways",
      type: "Paving Blocks",
      location: "Education Complex",
      description: "Durable and safe paving block installation for school pathways with anti-slip surface and vibrant color accents.",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path 
                d="M 60 0 L 0 0 0 60" 
                fill="none" 
                stroke="url(#gridGradient)" 
                strokeWidth="1"
                className="animate-pulse"
              />
            </pattern>
            <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#eee45dff" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#b9c45cff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#63b62bff" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Animated diagonal lines */}
          {[...Array(8)].map((_, i) => (
            <line
              key={`diag-${i}`}
              x1={i * 150}
              y1="0"
              x2={i * 150 + 200}
              y2="800"
              stroke="url(#gridGradient)"
              strokeWidth="2"
              strokeOpacity="0.3"
              className="animate-pulse"
              style={{ 
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            />
          ))}
          
          {/* Animated connecting nodes */}
          {[...Array(12)].map((_, i) => (
            <circle
              key={`node-${i}`}
              cx={(i % 4) * 300 + 150}
              cy={Math.floor(i / 4) * 200 + 100}
              r="4"
              fill="#3b82f6"
              className="animate-ping"
              style={{ 
                animationDelay: `${i * 0.3}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Main Container with Glass Effect */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="text-center py-16 px-8 bg-gradient-to-b from-white/5 to-transparent">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-400">Works</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Showcasing our expertise in premium paving block installations and brick construction projects across the region
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full"></div>
            </div>

            {/* Projects Grid Container */}
            <div className="px-6 sm:px-8 lg:px-12 pb-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">{projects.map((project, index) => (
                <div 
                  key={project.id}
                  className="group bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-yellow-400/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-400/20 hover:bg-white/15"
                  style={{ 
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 sm:h-52 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                        project.type === 'Paving Blocks' 
                          ? 'bg-yellow-400/90 text-gray-900' 
                          : 'bg-amber-500/90 text-white'
                      }`}>
                        {project.type}
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-yellow-400 mb-3 flex items-center">
                      <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="truncate">{project.location}</span>
                    </p>
                    <p className="text-sm text-gray-300 leading-relaxed line-clamp-3 mb-4">
                      {project.description}
                    </p>
                    
                    {/* View Details Button */}
                    <div className="pt-4 border-t border-white/10">
                      <button className="text-yellow-400 hover:text-yellow-300 text-sm font-medium flex items-center group-hover:translate-x-1 transition-all duration-300">
                        View Details
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="px-6 sm:px-8 lg:px-12 pb-16">
              <div className="bg-gradient-to-r from-yellow-400/20 via-yellow-500/15 to-amber-500/20 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-yellow-400/30 mx-auto max-w-4xl">
                <div className="text-center">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
                  <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-base sm:text-lg">
                    Let us bring your vision to life with our expertise in paving blocks and brick construction. Contact us for a consultation.
                  </p>
                  <button className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/30">
                    Get Quote Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes drawLine {
          0% {
            stroke-dasharray: 0 1000;
          }
          100% {
            stroke-dasharray: 1000 0;
          }
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Projects;